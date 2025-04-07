import { Link } from 'react-router-dom'
import { useTranslation } from 'next-i18next'
import { withKeepQueryPath } from '@/utils/local-path'
// @ts-ignore
export const LocaleLink: typeof Link = ({ to, children, rawValue, ...other }) => {
  const { i18n } = useTranslation('common')
  const localePrefix = i18n.language === 'zh-HK' ? '' : `/${i18n.language}`

  if (rawValue) {
    return (
      <a href={`${to}`} target="_blank" rel="noreferrer" {...other}>
        {children}
      </a>
    )
  }

  const normalTo = withKeepQueryPath(`${localePrefix}${to}`)

  return (
    <Link to={normalTo} {...other}>
      {children}
    </Link>
  )
}
