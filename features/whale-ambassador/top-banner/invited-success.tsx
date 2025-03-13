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
    <TopBlock className={classNames('flex h-1 min-h-[786px] lg:min-h-[530px]')}>
      <div
        className={classNames('xl:px-[100px] flex-1 !py-20 pt-8 lg:pb-4 h-full', styles['invited-success-top-banner'])}
      >
        <div className="h-full max-w-[1232px] mx-auto">
          <div className={classNames('h-full flex justify-start lg:items-center max-w-[1200px] mx-4')}>
            <div className="main-content-width w-full h-full flex items-start  lg:items-center">
              <div className="space-y-8 lg:space-y-10 flex-1 flex flex-col justify-center">
                <div className="text-front-bg-color1 flex flex-col gap-4  items-center lg:items-start ">
                  <h1 className="text-front-bg-color1 font-semibold text-xl lg:text-2xl">
                    <span>{name}</span>
                    <span className="ml-3">{t('whale-ambassador.top-banner.invited.title')}</span>
                  </h1>
                  <h2 className="text-4xl lg:text-[54px] lg:max-w-[40%] text-center leading-[1.4] lg:text-left text-front-bg-color1 font-semibold ">
                    {t('whale-ambassador.top-banner.invited.success')}
                  </h2>
                  <p className="text-base lg:text-2xl] text-center lg:text-left lg:max-w-max">
                    {t('whale-ambassador.top-banner.invited.success-description')}
                  </p>
                </div>
                <div className="flex mt-6 lg:mt-10 justify-center lg:justify-start">
                  <Button ghost className=" bg-white border-brand_color text-brand_color px-8 py-2.5 h-auto">
                    <Link to={`/${i18n.language}`}>{t('features_solutions_info_introduce_891112')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
