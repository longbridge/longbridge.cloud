const glob = require('glob')
const path = require('path')
const dayjs = require('dayjs')
const fs = require('fs')

const list = glob.sync(path.resolve(__dirname, 'out') + '/**/*.html')

const domain = 'https://longportwhale.com'
const today = dayjs().format('YYYY-MM-DD')

const urls = list.map(filepath => {
  const [_, pathname] = filepath.split('/out')
  const url = domain + pathname.replace('.html', '')

  if (url.includes('/404')) return ''

  return `
    <url>
        <loc>${url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
  `
})
let sitemapStr = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>`

fs.writeFileSync(path.resolve(__dirname, 'out') + '/sitemap.xml', sitemapStr, 'utf-8')

console.log(`total: ${list.length}`)
