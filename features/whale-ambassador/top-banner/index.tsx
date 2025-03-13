import React from 'react'
import { Block, TopBlock } from '@/components/block'
import { BecomeAmbassadorButton } from '../become-ambassador-button'
import { SendInviteLink } from '../register/send-invite-link'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'
export const TopBanner = () => {
  const { t } = useTranslation('common')
  return (
    <TopBlock className={classNames('bg-bg_color_2 min-h-[780px] md:min-h-[530px] h-1 flex md:items-center')}>
      <div className={classNames('xl:px-[100px] flex-1 mt-10 md:mt-0 h-full ')}>
        <div className="h-full max-w-[1232px] mx-auto">
          <div
            className={classNames(
              'h-full flex  justify-start md:items-center max-w-[1200px] mx-4',
              styles['top-banner-content']
            )}
          >
            <div className="main-content-width w-full ">
              <div className={classNames('space-y-10 w-full px-4 md:px-0')}>
                <div className={'space-y-3'}>
                  <h1 className="text-brand_color font-semibold text-base md:text-5xl">
                    {t('whale-ambassador.program-title')}
                  </h1>
                  <p className=" text-text-color-1 font-bold text-3xl md:text-[64px] md:leading-normal">
                    {t('whale-ambassador.program-subtitle')}
                  </p>
                </div>
                <div className="space-y-4">
                  <BecomeAmbassadorButton
                    form="推荐官计划主页"
                    className="px-4 py-2.5 h-auto font-medium  text-sm  md:text-xl"
                    type="primary"
                  />
                  <div className="flex items-baseline text-sm md:text-base">
                    <span className="text-text-color-1">{t('whale-ambassador.already-certified')}</span>
                    <SendInviteLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
