import React from 'react'
import { TopBlock } from '@/components/block'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface InvitedTopBannerProps {
  name?: string
  code?: string
}

export const InvitedSuccessTopBanner = ({ name, code }: InvitedTopBannerProps) => {
  const { t, i18n } = useTranslation('common')

  return (
    <TopBlock className={classNames('flex md:items-center', styles['invited-top-banner'])}>
      <div className={classNames('xl:px-[100px] flex-1 py-16 pt-8 md:pb-4 h-full ')}>
        <div className="h-full max-w-[1232px] mx-auto">
          <div className={classNames('h-full flex justify-start md:items-center max-w-[1200px] mx-4')}>
            <div className="main-content-width w-full h-full">
              <div className="flex flex-col md:flex-row  gap-16 md:gap-20">
                <div className="space-y-8 md:space-y-10 flex-1 flex flex-col justify-center">
                  <div className="space-y-3 md:space-y-4 ">
                    <h1 className="text-brand_color font-semibold text-2xl md:text-2xl">
                      <span>{name}</span>
                      <span className="ml-3">{t('whale-ambassador.top-banner.invited.title')}</span>
                    </h1>
                    <h2 className="text-4xl font-semibold text-text-color-1">
                      {t('whale-ambassador.top-banner.invited.success')}
                    </h2>
                    <p className="text-xl md:text-2xl text-[#1C1F23]">
                      {t('whale-ambassador.top-banner.invited.success-description')}
                    </p>
                  </div>
                  <Button className=" bg-white border-brand_color text-brand_color px-8 py-2.5 h-auto w-full md:w-max">
                    <Link to={`/${i18n.language}`}>{t('features_solutions_info_introduce_891112')}</Link>
                  </Button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img
                    className="w-[calc(100%-56px)] md:w-full self-center"
                    src="https://assets.lbctrl.com/uploads/cfd78c80-b033-4d36-977d-ac5a7d7812c8/9a52f3350b2b389bce2f0be72018754c.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
