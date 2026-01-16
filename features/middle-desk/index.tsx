import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import MainContain from '@/features/middle-desk/components/main-contain'
import ProductAdvantage from '@/features/middle-desk/components/product-advantage'
import TradingDeskSystem from '@/features/middle-desk/components/trading-desk-system'
import Risk from '@/features/middle-desk/components/risk'
import Atm from '@/features/middle-desk/components/atm'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import { NewBanner as Banner } from '@/features/product/Banner'

export const MiddleDeskContain = () => {
  const i18n = useTranslation('common')

  const banner_props = {
    title: i18n.t('src_pages_atm_deposit_add_single_index_8632'),
    desc: [
      i18n.t('src_pages_atm_deposit_add_single_index_8633'),
      i18n.t('src_pages_atm_deposit_add_single_index_8633-1'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/6c17f0d9-1d8e-4745-9060-163c104b5f0e/gui-center-en.webp',
      'zh-CN': 'https://assets.lbctrl.com/uploads/16c0d8ae-bcaa-4846-960d-5e3d5e054790/gui-center-cn.webp',
      'zh-HK': 'https://assets.lbctrl.com/uploads/a6add74f-47f2-480f-9df6-662d5e9fb0fe/gui-center-hk.webp',
    },
  }

  return (
    <div>
      <Banner {...banner_props}></Banner>
      <ProductAdvantage />
      <TradingDeskSystem />
      <Risk />
      <Atm />
      <WhaleOfficialFooter />
    </div>
  )
}
