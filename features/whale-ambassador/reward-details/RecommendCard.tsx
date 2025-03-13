import React from 'react'
import { Card } from './Card'
import { RecommendRewardList } from './RecommendRewardList'
import { Trans, useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'

export const RecommendCard = () => {
  const { t } = useTranslation('common')
  return (
    <Card
      className={classNames('flex-[2_1_0%] pb-4 md:pb-8')}
      title={t('whale-ambassador.recommend-reward')}
      icon={
        <img
          src="https://assets.lbctrl.com/uploads/c80231fc-d76a-4fdc-9de2-ef4779672982/recommend-icon.svg"
          alt={t('whale-ambassador.recommend-reward')}
        />
      }
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 h-full flex flex-col justify-between">
          <div className="mb-7">
            <div className="text-sm mb-7 font-semibold">{t('whale-ambassador.starting-more-referrals-sub')}</div>
            <div className="-ml-[1px] md:-ml-[3px]">
              <Trans
                i18nKey="whale-ambassador.starting-more-referrals"
                components={{
                  amount: <span className={classNames('text-5xl md:text-[54px] -tracking-[4px]', styles.amount)} />,
                  currency: <span className="text-xl font-bold ml-2" />,
                }}
              />
            </div>
          </div>

          <div className="text-sm md:text-base  text-text-color-1-supplement whitespace-pre-wrap">
            <p className="whitespace-pre-wrap">
              <Trans
                i18nKey="whale-ambassador.recommend-reward-desc"
                components={{
                  b: <span className="font-semibold text-[#1C1F23]" />,
                  h: <span className="text-brand_color font-semibold" />,
                }}
              />
            </p>
          </div>
        </div>
        <div className="px-4 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="256" viewBox="0 0 2 256" fill="none">
            <path d="M1 0L1.00001 256" stroke="black" strokeOpacity="0.3" strokeDasharray="6 6" />
          </svg>
        </div>
        <div className="py-7 block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="344" height="2" viewBox="0 0 344 2" fill="none">
            <path d="M0 1L344 1" stroke="black" strokeOpacity="0.3" strokeDasharray="6 6" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl mb-2 md:mb-8 font-semibold">{t('whale-ambassador.recommend-reward-table-title')}</h3>
          <RecommendRewardList />
        </div>
      </div>
    </Card>
  )
}
