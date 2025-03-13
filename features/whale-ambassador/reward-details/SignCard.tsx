import React from 'react'
import { Card } from './Card'
import { useTranslation, Trans } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'

export const SignCard = () => {
  const { t, i18n } = useTranslation('common')
  return (
    <Card
      className={classNames('flex-1 min-h-[228px] pb-4 md:pb-8')}
      title={t('whale-ambassador.sign-reward')}
      icon={
        <img
          src="https://assets.lbctrl.com/uploads/ae9b8197-bb2a-4ef0-a441-a14e423bb70e/c05b7a246eff917ade0d5d155052fb90.svg"
          alt={t('whale-ambassador.sign-reward')}
        />
      }
    >
      <div className="flex flex-col md:flex-row  lg:flex-col h-full justify-between  md:gap-x-20 md:items-center lg:items-start">
        <div>
          <div className="text-sm mb-4 font-semibold">{t('whale-ambassador.sign-reward-sub')}</div>
          <div className="text-brand_color flex-bold  mb-8 -ml-1 md:-ml-[10px]">
            <Trans
              i18nKey="whale-ambassador.sign-reward-amount"
              components={{
                amount: <span className={classNames('text-5xl md:text-7xl -tracking-[4px]', styles.amount)} />,
                currency: <span className="ml-2 text-xl font-semibold" />,
              }}
            />
          </div>
        </div>
        <p className="text-sm md:text-base  text-text-color-1-supplement">
          {t('whale-ambassador.sign-reward-desc', {
            amount: i18n.language === 'en' ? '1,800 SGD' : '10,000 HKD',
            amount2: i18n.language === 'en' ? '10,000 HKD' : '1,800 SGD',
          })}
        </p>
      </div>
    </Card>
  )
}
