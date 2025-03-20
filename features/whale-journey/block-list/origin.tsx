import { useMemo } from 'react'
import { Block } from '../block'
import desktopMetaList from './desktop-meta.json'
import mobileMetaList from './mobile-meta.json'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'
import { useWidth } from '@/hooks/use-width'

const BlockList = () => {
  const { i18n } = useTranslation()
  const width = useWidth()
  const metaList = useMemo(() => {
    return width > 768 ? desktopMetaList : mobileMetaList
  }, [width])

  return (
    <>
      {metaList.map(item => {
        const currentLang = i18n.language as keyof typeof item.source
        const imageInfo = item.source[currentLang]

        return (
          <Block
            className={classNames(styles.block, '!py-0 md:!py-[100px] !px-0 md:!px-4', `block-${item.id}`)}
            key={`${width}-${item.id}-${metaList.length}`}
          >
            <img
              loading="lazy"
              key={imageInfo.url}
              className="w-full"
              style={{
                aspectRatio: `${imageInfo.width} / ${imageInfo.height}`,
              }}
              src={imageInfo.url}
              alt={`${item.id}`}
            />
          </Block>
        )
      })}
    </>
  )
}

export default BlockList
