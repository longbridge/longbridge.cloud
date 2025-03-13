import React from 'react'
import { Card } from './Card'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'

export const SignCard = () => {
  const { t, i18n } = useTranslation('common')
  return (
    <Card
      className={classNames('flex-1 bg-[#FEFAEE] min-h-[228px] pb-[60px] md:pb-8', styles['sign-card'])}
      title={t('whale-ambassador.sign-reward')}
      icon={
        <img
          src="https://assets.lbctrl.com/uploads/8e9e1dbf-c3a8-4707-83aa-d741c1b79c29/sign-icon.svg"
          alt={t('whale-ambassador.sign-reward')}
        />
      }
    >
      <p className="md:mt-7">
        <div className=" font-bold text-brand_color text-[#ED9912]">
          <span className="text-5xl md:text-6xl">{`${(i18n.language === 'en' ? 1800 : 10000).toLocaleString()}`}</span>
          <span className="text-2xl md:text-3xl ml-2">{i18n.language === 'en' ? 'SGD' : 'HKD'}</span>
        </div>
      </p>
      <p className="text-sm md:text-base  text-text-color-1-supplement">
        {t('whale-ambassador.sign-reward-desc', {
          amount: i18n.language === 'en' ? '1,800 SGD' : '10,000 HKD',
          amount2: i18n.language === 'en' ? '10,000 HKD' : '1,800 SGD',
        })}
      </p>
    </Card>
  )
}
