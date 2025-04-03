import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { withKeepQueryPath } from '@/utils/local-path'

export function useLocaleNavigate() {
  const { i18n } = useTranslation('common')
  const navigate = useNavigate()

  return (path: string, options?: { replace?: boolean }) => {
    return navigate(withKeepQueryPath(i18n.language === 'zh-HK' ? path : `/${i18n.language}${path}`), options)
  }
}
export function useWithLocalePathFn() {
  const { i18n } = useTranslation('common')

  return (path: string) => {
    return withKeepQueryPath(i18n.language === 'zh-HK' ? path : `/${i18n.language}${path}`)
  }
}
