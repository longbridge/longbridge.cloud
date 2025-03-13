import { useTranslation } from 'next-i18next'

export const PrivacyAgreement = () => {
  const { t } = useTranslation('common')
  return (
    <a
      className=" text-brand_color"
      href={t('whale-ambassador.privacy-agreement-link')}
      target="_blank"
      rel="noreferrer"
    >
      {t('whale-ambassador.privacy-agreement')}
    </a>
  )
}
