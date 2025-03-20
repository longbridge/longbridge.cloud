import { TopBlock } from '@/components/block'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'

export const WhaleJourneyBanner = () => {
  const { t } = useTranslation('common')

  return (
    <TopBlock className={classNames('h-[530px]', styles['journey-banner-container'])}>
      <div className={classNames('main-container !px-11 md:!px-4', 'h-full', styles['journey-banner-container'])}>
        <div className={classNames('py-10 h-full')}>
          <div className="main-content-width h-full">
            <div className="flex items-start    md:justify-start h-full md:items-center">
              <div className="text-[#FFC977] mt-10 md:mt-0 flex flex-col md:justify-center   h-full">
                <div
                  className={classNames(
                    ' text-5xl en:ml-2 en:md:ml-0  font-bold italic md:font-[350]  leading-tight en:leading-none md:text-6xl  en:md:text-[80px]'
                  )}
                >
                  {t('whale-journey.top-banner.journey.title1')}
                </div>
                <div
                  className={classNames(
                    ' !text-left text-[36px] whitespace-pre-wrap font-medium md:leading-tight italic leading-tight md:text-[80px] en:bg-clip-text en:bg-gradient-to-r en:from-[#FFC977] en:to-[#FFAC2F] en:[-webkit-text-fill-color:transparent]'
                  )}
                >
                  {t('whale-journey.top-banner.journey.title2')}
                </div>
                <p className=" hidden en:block en:md:hidden mt-3 text-xs leading-normal">
                  {t('whale-journey.top-banner.journey.description')}
                </p>
                <div className="flex-1 md:flex-initial flex items-end pb-[110px] md:pb-0">
                  <img
                    className="mt-10 w-20 md:w-[100px]"
                    src="https://assets.lbctrl.com/uploads/74cc2950-74d4-42e6-b79c-6dcb5b7b8c2e/group.svg"
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
