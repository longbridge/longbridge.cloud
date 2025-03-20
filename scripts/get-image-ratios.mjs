import fs from 'fs'
import path from 'path'
import https from 'https'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const desktopMetaPath = path.join(__dirname, '../features/whale-journey/block-list/desktop-meta.json')
const mobileMetaPath = path.join(__dirname, '../features/whale-journey/block-list/mobile-meta.json')

async function getImageDimensions(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        const options = {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          },
        }

        https
          .get(url, options, response => {
            if (response.statusCode !== 200) {
              reject(new Error(`Failed to fetch image: ${response.statusCode}`))
              return
            }

            const chunks = []
            response.on('data', chunk => chunks.push(chunk))
            response.on('end', async () => {
              try {
                const buffer = Buffer.concat(chunks)
                const metadata = await sharp(buffer).metadata()
                resolve({
                  width: metadata.width,
                  height: metadata.height,
                  ratio: metadata.width / metadata.height,
                })
              } catch (error) {
                reject(error)
              }
            })
          })
          .on('error', reject)
      })
    } catch (error) {
      if (i === retries - 1) throw error
      console.log(`Retry ${i + 1}/${retries} for ${url}...`)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Exponential backoff
    }
  }
}

async function processMetaFile(filePath) {
  const metaData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  for (const item of metaData) {
    for (const [lang, source] of Object.entries(item.source)) {
      try {
        console.log(`Processing ${lang} image for block ${item.id}...`)
        const dimensions = await getImageDimensions(source.url)
        item.source[lang] = {
          url: source.url,
          ...dimensions,
        }
      } catch (error) {
        console.error(`Error processing ${lang} image for block ${item.id}:`, error.message)
        // Keep the original URL if we fail to get dimensions
        item.source[lang] = {
          url: source.url,
          width: 0,
          height: 0,
          ratio: 0,
        }
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(metaData, null, 2))
  console.log(`Updated ${filePath}`)
}

async function main() {
  try {
    await processMetaFile(desktopMetaPath)
    await processMetaFile(mobileMetaPath)
    console.log('All files processed successfully!')
  } catch (error) {
    console.error('Error processing files:', error)
  }
}

main()
