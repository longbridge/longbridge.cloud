import React from 'react'
import { TopBlock } from '@/components/block'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'
import { InvitedFormModal } from '../register/invited-form'

interface Feature {
  icon: string
  title: string
  description: string
}

interface InvitedTopBannerProps {
  name?: string
  code: string
}

export const InvitedTopBanner = ({ name, code }: InvitedTopBannerProps) => {
  const { t } = useTranslation('common')

  const features: Feature[] = [
    {
      icon: 'https://assets.lbctrl.com/uploads/6bc86fb5-ae8e-4baa-b1f8-7b3ee4503e40/activities.svg',
      title: t('whale-ambassador.top-banner.feature-1.title'),
      description: t('whale-ambassador.top-banner.feature-1.description'),
    },
    {
      icon: 'https://assets.lbctrl.com/uploads/fe45c87e-9c95-4d35-afb6-9b957335b895/camera.svg',
      title: t('whale-ambassador.top-banner.feature-2.title'),
      description: t('whale-ambassador.top-banner.feature-2.description'),
    },
    {
      icon: 'https://assets.lbctrl.com/uploads/3793834b-cf79-4170-8671-adbae397ccbc/596c24389a9867ad8a5f0250021443bd.svg',
      title: t('whale-ambassador.top-banner.feature-3.title'),
      description: t('whale-ambassador.top-banner.feature-3.description'),
    },
    {
      icon: 'https://assets.lbctrl.com/uploads/478f3d88-cd67-431f-bc66-6b17c701054d/circle_time.svg',
      title: t('whale-ambassador.top-banner.feature-4.title'),
      description: t('whale-ambassador.top-banner.feature-4.description'),
    },
    {
      icon: 'https://assets.lbctrl.com/uploads/0234c6fd-ad2f-4c8b-b6e2-5a26145fd164/8df91d65f5f53acbdc6d35018df2dfcb.svg',
      title: t('whale-ambassador.top-banner.feature-5.title'),
      description: t('whale-ambassador.top-banner.feature-5.description'),
    },
  ]

  return (
    <TopBlock className={classNames('flex md:items-center', styles['invited-top-banner'])}>
      <div className={classNames('xl:px-[100px] flex-1 py-16 pt-8 md:pb-4 h-full ')}>
        <div className="h-full max-w-[1232px] mx-auto">
          <div className={classNames('h-full flex justify-start md:items-center max-w-[1200px] mx-4')}>
            <div className="main-content-width w-full ">
              <div className={classNames('space-y-8 w-full px-4 md:px-0')}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-[120px]">
                  <div className="space-y-4 md:space-y-10 flex-1">
                    <div className={'space-y-3 md:space-y-4'}>
                      <h1 className="text-brand_color font-semibold text-xl md:text-2xl">
                        <span>{name}</span>
                        <span className="ml-3">{t('whale-ambassador.top-banner.invited.title')}</span>
                      </h1>
                      <p className="text-text-color-1 font-semibold text-4xl md:text-5xl leading-normal">
                        {t('whale-ambassador.top-banner.invited.description')}
                      </p>
                    </div>
                    <div>
                      <div className="space-y-4">
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 md:space-x-4">
                            <div className="text-brand_color text-xl font-semibold flex-shrink-0">
                              <img className="w-7 md:w-8 " src={feature.icon} alt={feature.title} />
                            </div>
                            <div className="space-y-1 md:space-y-2.5">
                              <h3 className="font-medium text-xl md:text-2xl text-text-color-1">{feature.title}</h3>
                              <p className="text-text-color-1-supplement text-sm md:text-base md:leading-7">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1">
                    <img
                      className=" w-[250px] md:w-full self-center"
                      src="https://assets.lbctrl.com/uploads/3c211acc-fc07-4026-9d79-a3c1fe297865/6c42a2379024ee94e2da635bc2f5498c.png"
                      alt="whale"
                    />
                  </div>
                </div>
                <InvitedFormModal referCode={code} name={name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
