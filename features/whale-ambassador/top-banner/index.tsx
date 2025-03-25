import React from 'react'
import { TopBlock } from '@/components/block'
import { BecomeAmbassadorButton } from '../become-ambassador-button'
import { SendInviteLink } from '../register/send-invite-link'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'
export const TopBanner = () => {
  const { t } = useTranslation('common')
  return (
    <TopBlock className={classNames('min-h-[780px] md:min-h-[530px] h-1 flex md:items-center')}>
      <div className={classNames('xl:px-[100px] flex-1 py-20  h-full', styles['top-banner'])}>
        <div className={classNames('h-full max-w-[1232px] mx-auto')}>
          <div className={classNames('h-full flex  justify-start md:items-center max-w-[1200px] mx-4')}>
            <div className="main-content-width w-full ">
              <div className={classNames('space-y-10 w-full px-4 md:px-0 flex flex-col justify-between h-full')}>
                <div className={'space-y-3 text-center md:text-left'}>
                  <h1 className=" text-[#AFB3B6] font-semibold text-base md:text-5xl">
                    {t('whale-ambassador.program-title')}
                  </h1>
                  <p className=" text-front-bg-color1 font-bold text-3xl md:text-[64px] md:leading-normal">
                    {t('whale-ambassador.program-subtitle')}
                  </p>
                  <BecomeAmbassadorButton
                    form="推荐官计划主页"
                    className="px-4 py-2.5 h-auto font-medium  text-sm  md:text-xl mt-6 md:mt-10"
                    type="primary"
                  />
                </div>
                <div className="flex mt-4 items-baseline text-sm md:text-base justify-center md:justify-start">
                  <div>
                    <span className="text-[rgba(255,255,255,0.60)]">{t('whale-ambassador.already-certified')}</span>
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
