import React from 'react'
import { useTranslation, Trans } from 'next-i18next'

export const RecommendRewardList = () => {
  const { t } = useTranslation('common')
  const list = [
    {
      label: t('whale-ambassador.one-recommend'),
      value: (
        <Trans
          i18nKey="whale-ambassador.reward-value-1"
          components={{ amount: <span className="text-[#1C1F23] text-xl" /> }}
        />
      ),
    },
    {
      label: t('whale-ambassador.two-recommend'),
      value: (
        <Trans
          i18nKey="whale-ambassador.reward-value-2"
          components={{ amount: <span className="text-[#1C1F23] text-xl" /> }}
        />
      ),
    },
    {
      label: t('whale-ambassador.three-recommend'),
      value: (
        <Trans
          i18nKey="whale-ambassador.reward-value-3"
          components={{ amount: <span className="text-[#1C1F23] text-xl" /> }}
        />
      ),
    },
    {
      label: t('whale-ambassador.more-than-three-recommend'),
      value: (
        <span className="text-brand_color text-base">
          <Trans i18nKey="whale-ambassador.unlimited" />
        </span>
      ),
    },
  ]
  return (
    <div className="text-text-color-1-supplement">
      <div className="flex justify-between text-sm  pb-2  md:pb-2 border-b border-[rgba(0,0,0,0.50)]">
        <div>{t('whale-ambassador.valid-recommend-number')}</div>
        <div>{t('whale-ambassador.reward-value')}</div>
      </div>
      <div className=" flex flex-col gap-3 mt-3">
        {list.map(item => (
          <div key={item.label} className="flex justify-between">
            <div className="text-xl font-semibold">{item.label}</div>
            <div className="text-sm font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
