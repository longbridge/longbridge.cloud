import React from 'react'
import { TopBlock } from '@/components/block'
import { useTranslation, Trans } from 'next-i18next'
import { Button } from 'antd'
import classNames from 'classnames'
import styles from './index.module.scss'
import { LocaleLink } from '@/components/locale-link'

export const WhaleAmbassadorTopBanner = () => {
  const { t } = useTranslation('common')
  return (
    <TopBlock className={classNames('min-h-[960px] sm:min-h-[825px] md:min-h-[530px] h-1 flex items-center')}>
      <div className={classNames('xl:px-[100px] flex-1 py-10 md:py-20 h-full', styles['home-top-banner'])}>
        <div className={classNames('h-full max-w-[1232px] mx-auto')}>
          <div className={classNames('h-full flex md:justify-start items-start md:items-center max-w-[1200px] mx-4')}>
            <div className="main-content-width w-full">
              <div className={classNames('w-full flex flex-col')}>
                <div className="flex ">
                  <div className="flex flex-col">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <img
                          src="https://assets.lbctrl.com/uploads/ce4cb91a-f3d3-4198-b256-9cabe9aafccd/dea0134030e1c5c6f0b2dda9256c64cf.svg"
                          alt="whale-ambassador-logo"
                        />

                        <h1 className="font-cera-pro text-[#7B50FF] text-xl font-bold">
                          <Trans
                            i18nKey="whale-ambassador.home-banner.title"
                            components={{
                              highlight: <span className="text-[26px]" />,
                            }}
                          />
                        </h1>
                      </div>
                      <p className="font-cera-pro en:text-[#F7F7FF]  text-[#7B50FF]  mt-2 text-3xl font-bold en:font-normal">
                        <Trans
                          i18nKey="whale-ambassador.home-banner.subtitle"
                          components={{
                            highlight: <span className="text-[#F7F7FF]" />,
                          }}
                        />
                      </p>
                    </div>

                    <div className="font-cera-pro mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 flex-wrap">
                      <div>
                        <div className="flex w-full gap-4 items-center">
                          <p className=" text-white text-lg font-bold">
                            {t('whale-ambassador.home-banner.signing-reward')}
                          </p>
                          <div className="hidden sm:block  h-[1px] bg-[#7B50FF] flex-1"></div>
                        </div>
                        <div className="flex items-baseline mt-3 bg-clip-text bg-gradient-to-b from-[#7B50FF] to-[#E0C7FF] [-webkit-text-fill-color:transparent]">
                          <span className="text-8xl font-bold leading-none">
                            {t('whale-ambassador.home-banner.reward-value')}
                          </span>
                          <span className="text-white text-xl ml-2">{t('whale-ambassador.home-banner.currency')}</span>
                        </div>
                      </div>

                      <div>
                        <div>
                          <p className="text-white text-lg font-bold">
                            {t('whale-ambassador.home-banner.referral-reward')}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-baseline  mt-3 bg-clip-text bg-gradient-to-b from-[#7B50FF] to-[#E0C7FF] [-webkit-text-fill-color:transparent] ">
                            <span className=" text-4xl font-bold leading-none font-cera-pro">
                              {t('whale-ambassador.home-banner.lead-value')}
                            </span>
                            <span>
                              <span className="text-xl ml-1">{t('whale-ambassador.home-banner.currency')}</span>
                              <span className="text-xl hidden en:inline">
                                {t('whale-ambassador.home-banner.per-lead')}
                              </span>
                            </span>
                          </div>
                          <div className="bg-[rgba(111,78,210,0.25)] rounded-full px-5 py-2 inline-block mt-3">
                            <span className="text-[#A481FF] text-sm  font-black">
                              <Trans
                                i18nKey="whale-ambassador.home-banner.double-rewards"
                                components={{
                                  highlight: <span className="text-white" />,
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 md:mt-10 space-y-5">
                      <div className="flex gap-4">
                        <LocaleLink to="/whale-ambassador">
                          <Button
                            type="primary"
                            className="min-w-[130px] h-[42px] text-sm font-medium bg-[#635BFF] border-none hover:bg-[#635BFF] hover:opacity-90"
                          >
                            {t('whale-ambassador.home-banner.learn-more')}
                          </Button>
                        </LocaleLink>
                        <LocaleLink to="/whale-ambassador" state={{ autoOpen: true }}>
                          <Button
                            type="primary"
                            className="min-w-[130px] h-[42px] text-sm font-medium bg-[#635BFF] border-none hover:bg-[#635BFF] hover:opacity-90"
                          >
                            {t('whale-ambassador.home-banner.sign-up')}
                          </Button>
                        </LocaleLink>
                      </div>
                      <p className="text-white text-xs opacity-60">{t('whale-ambassador.home-banner.terms')}</p>
                    </div>
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
