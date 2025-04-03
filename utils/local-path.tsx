import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { withQuery, getQuery } from 'ufo'
import { isServer } from '@/utils/common'
export const LocalPath = (props: any) => {
  const { i18n } = useTranslation('common')
  const router = useRouter()

  const locale = props.locale || i18n.language || ''

  if (!locale) {
    const href = props.href || router.asPath
    return <Link {...props} href={href}></Link>
  } else {
    const href = props.href ? `/${locale}${props.href}` : router.pathname.replace('[locale]', locale)
    return <Link {...props} href={href} locale={undefined}></Link>
  }
}

const keepQueryKeys = ['source_from', 'code']

export const withKeepQueryPath = (path: string, query?: Record<string, string | number | boolean | undefined>) => {
  const currentQuery = getQuery(isServer() ? '' : window.location.href)

  const keepQuery = Object.fromEntries(Object.entries(currentQuery).filter(([key]) => keepQueryKeys.includes(key)))
  return withQuery(path, { ...keepQuery, ...query })
}
