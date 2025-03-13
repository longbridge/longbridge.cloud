import React from 'react'
import { Card } from './Card'
import { RecommendRewardList } from './RecommendRewardList'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'

export const RecommendCard = () => {
  const { t } = useTranslation('common')
  return (
    <Card
      className={classNames('flex-[2_1_0%] bg-bg_color_2 pb-[87px] md:pb-8', styles['recommend-card'])}
      title={t('whale-ambassador.recommend-reward')}
      icon={
        <img
          src="https://assets.lbctrl.com/uploads/c80231fc-d76a-4fdc-9de2-ef4779672982/recommend-icon.svg"
          alt={t('whale-ambassador.recommend-reward')}
        />
      }
    >
      <p>
        <span className="text-5xl font-bold text-brand_color">{(300).toLocaleString()}</span>
        <span className="text-3xl font-bold text-brand_color ml-2">{`HKD`}</span>
        <span className="text-text-color-1 text-base font-medium ml-2 md:ml-3">
          {t('whale-ambassador.starting-more-referrals')}
        </span>
      </p>
      <p className="text-sm md:text-base  text-text-color-1-supplement whitespace-pre-wrap">
        {t('whale-ambassador.recommend-reward-desc', { amount: '300 HKD', amount2: '50 SGD' })}
      </p>
      <RecommendRewardList />
    </Card>
  )
}
