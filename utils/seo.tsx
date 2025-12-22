import { NextSeo, NextSeoProps } from 'next-seo'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

const domain = 'https://longportwhale.com'

export const SEOMeta: FC<NextSeoProps & { url?: string; indexTitle?: boolean }> = props => {
  const localtion = useLocation()
  const { title: rawTitle, description, url = 'https://longportwhale.com', indexTitle } = props
  const title = indexTitle ? rawTitle : `${rawTitle} - Longbridge Whale`
  const openGraph = {
    title,
    description,
    url,
    images: [
      {
        url: 'https://pub.pbkrs.com/files/202205/bHQKu1TbTP5prjuH/preview.png',
      },
    ],
    site_name: 'Longbridge Whale',
  }
  const twitter = {
    handle: '@longbridgeapp',
    site: url,
    cardType: 'summary_large_image',
  }

  const withoutLocalePathname = localtion.pathname.replace(/^\/(en|zh-HK|zh-CN)/, '/').replace(/\/\//g, '/')

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${domain}${localtion.pathname}`}
      languageAlternates={[
        {
          hrefLang: 'zh-Hant',
          href: `${domain}${withoutLocalePathname}`,
        },
        {
          hrefLang: 'en',
          href: `${domain}/en${withoutLocalePathname}`,
        },
        {
          hrefLang: 'zh-Hans',
          href: `${domain}/zh-CN${withoutLocalePathname}`,
        },
      ]}
      openGraph={openGraph}
      twitter={twitter}
    />
  )
}
