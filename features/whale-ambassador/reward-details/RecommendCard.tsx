import React from 'react'
import { Card } from './Card'
import { RecommendRewardList } from './RecommendRewardList'
import { Trans, useTranslation } from 'next-i18next'
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
      <p className="text-text-color-1 text-base font-medium">
        <Trans
          i18nKey="whale-ambassador.starting-more-referrals"
          components={{
            amount: <span className="text-5xl font-bold text-brand_color" />,
            currency: <span className="text-3xl font-bold text-brand_color ml-2" />,
          }}
        />
      </p>
      <div className="text-sm md:text-base  text-text-color-1-supplement whitespace-pre-wrap">
        <p>
          <Trans
            i18nKey="whale-ambassador.recommend-reward-desc1"
            components={{
              s: <span className="font-semibold text-[#1C1F23]" />,
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey="whale-ambassador.recommend-reward-desc2"
            components={{
              s: <span className="font-semibold text-[#1C1F23]" />,
            }}
          />
        </p>
      </div>
      <RecommendRewardList />
    </Card>
  )
}
