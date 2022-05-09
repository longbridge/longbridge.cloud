import React, { FC, useState, useMemo, useEffect } from 'react'
import { getRootDomain } from '@/utils/common'
import Cookies from 'js-cookie'
import Dropdown from '@/components/dropdown'
import { useTranslation } from 'next-i18next'

export const LocaleDropdown: FC = () => {
  // 为了方便复制粘贴，就不用组件了
  const items = useMemo(() => {
    return [
      {
        label: '简体中文',
        shortLabel: '简',
        value: 'zh-CN',
      },
      {
        label: '繁体中文',
        shortLabel: '繁',
        value: 'zh-HK',
      },
      {
        label: 'English',
        shortLabel: 'EN',
        value: 'en',
      },
    ]
  }, [])
  const { i18n } = useTranslation('common')
  const [locale, setLocale] = useState(i18n.language || Cookies.get('locale'))
  const pathLocale = i18n.language
  const onChange = (value: string) => {
    Cookies.set('locale', value, {
      domain: getRootDomain(location.hostname),
      expires: 7,
    })
    setLocale(value)
    let pathname = location.pathname
    if (pathLocale) {
      pathname = pathname.replace(`/${pathLocale}`, `/${value}`)
    } else {
      pathname = `/${value}${pathname}`
    }
    pathname = pathname.replace('/zh-HK', '')
    const url = new URL(location.href)
    url.pathname = pathname
    location.href = url.toString()
  }

  return <Dropdown items={items} value={locale} onChange={onChange} />
}
