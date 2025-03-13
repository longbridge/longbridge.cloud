import React from 'react'
import { useTranslation } from 'next-i18next'

export const RecommendRewardList = () => {
  const { t } = useTranslation('common')
  const list = [
    {
      label: t('whale-ambassador.one-recommend'),
      value: (
        <span>
          {'300x1 ='}
          <span className="font-semibold">{`${(300).toLocaleString()} HKD`}</span>
        </span>
      ),
    },
    {
      label: t('whale-ambassador.two-recommend'),
      value: (
        <span>
          {'300x2 ='}
          <span className="font-semibold">{`${(600).toLocaleString()} HKD`}</span>
        </span>
      ),
    },
    {
      label: t('whale-ambassador.three-recommend'),
      value: (
        <span>
          {'300x3x2 ='}
          <span className="font-semibold">{`${(1800).toLocaleString()} HKD`}</span>
        </span>
      ),
    },
    {
      label: t('whale-ambassador.more-than-three-recommend'),
      value: <span className="text-[rgba(28,31,35,0.45)]">{t('whale-ambassador.unlimited')}</span>,
    },
  ]
  return (
    <div className="text-text-color-1-supplement md:w-1/2">
      <div className="flex justify-between text-sm  pb-2  md:pb-1.5 border-b border-border_color">
        <div>{t('whale-ambassador.valid-recommend-number')}</div>
        <div>{t('whale-ambassador.reward-value')}</div>
      </div>
      <div className=" space-y-2 mt-3">
        {list.map(item => (
          <div key={item.label} className="flex justify-between">
            <div>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
