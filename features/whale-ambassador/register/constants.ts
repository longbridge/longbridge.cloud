import { Service } from '@/services/whale-ambassador/types'
import { useTranslation } from 'react-i18next'

export const useServiceOptions = () => {
  const { t } = useTranslation('common')
  return [
    { label: t('whale-ambassador.internet-app-plus'), value: Service.INTERNET_APP_PLUS },
    { label: t('whale-ambassador.desk-system'), value: Service.DESK_SYSTEM },
    { label: t('whale-ambassador.us-stock-and-options'), value: Service.US_STOCK_AND_OPTIONS },
    { label: t('whale-ambassador.wealth-management'), value: Service.WEALTH_MANAGEMENT },
    { label: t('whale-ambassador.virtual-asset'), value: Service.VIRTUAL_ASSET },
    { label: t('whale-ambassador.other'), value: Service.OTHER },
  ]
}