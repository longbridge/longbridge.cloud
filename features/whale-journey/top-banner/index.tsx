import { TopBlock } from '@/components/block'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'
import { LocaleLink } from '@/components/locale-link'

export const GrowTogetherTopBanner = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <TopBlock className={classNames(styles['top-banner'], 'h-[780px]  lg:h-[530px]')}>
      <div className={classNames('main-container', 'h-full', styles['top-banner-container'])}>
        <div className={classNames('py-10 h-full')}>
          <div className="main-content-width h-full">
            <div className="flex gap-10 md:gap-0 flex-col md:flex-row h-full md:items-center">
              <div className={classNames('flex-1  w-full hidden md:block shrink-0', styles['top-banner-image'])}>
                <div className="h-[370px]"></div>
              </div>
              <div className="flex-1  flex flex-col justify-end  text-[#FFC977] leading-tight md:justify-center">
                {/* 斜体 */}
                <div
                  className={classNames(
                    'text-3xl md:text-6xl italic',
                    i18n.language === 'en' ? 'md:text-[48px]' : 'md:text-6xl'
                  )}
                >
                  {t('whale-journey.banner.title1')}
                </div>
                <div
                  className={classNames(
                    'text-[48px]   md:leading-tight italic font-bold',
                    i18n.language === 'en' ? 'md:text-[64px] leading-none ' : 'md:text-[80px]'
                  )}
                >
                  {t('whale-journey.banner.title2')}
                </div>
                <div
                  className={classNames(
                    'text-xl md:text-2xl mt-4 md:mt-5 max-w-[450px]',
                    i18n.language === 'en' ? ' leading-6 md:leading-7 ' : ''
                  )}
                >
                  <span className="whitespace-pre-wrap break-words">{t('whale-journey.banner.description')}</span>
                </div>
                <div className="mt-12 mb-9 flex justify-center md:justify-start">
                  <LocaleLink to={`/whale-journey`}>
                    <button className=" text-2xl  font-bold text-[#FFD89E] border-[#FFD89E] hover:border-front-bg-color1  hover:text-front-bg-color1  border bg-transparent py-1 px-11">
                      {t('whale-journey.banner.button')}
                    </button>
                  </LocaleLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
