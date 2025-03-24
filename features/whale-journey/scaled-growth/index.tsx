import { Block, Header } from '../block'
import { Trans, useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './index.module.scss'
import { HighlightText } from '../title'
import { DownArrow, UpArrow } from './arrow'

const Percentage = ({ value }: { value: number }) => {
  return (
    <div className="font-bold leading-none">
      <span className="text-[114px]">{value}</span>
      <span className="text-[64px]">%</span>
      <span className="text-[36px]">+</span>
    </div>
  )
}

export const ScaledGrowth = () => {
  const { t } = useTranslation('common')

  return (
    <Block className={classNames(styles['scaled-growth'], 'text-[#FFCC8D]')}>
      <div className="relative">
        <Header
          title={t('whale-journey.scaled-growth.title')}
          description={t('whale-journey.scaled-growth.description')}
        />

        <div className="mt-12">
          <div className="text-2xl flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
              <path d="M22 15H13.3526V6.9079L22 0V15ZM8.58381 15H0V6.9079L8.58381 0V15Z" fill="#FFC977" />
            </svg>
            <div>{t('whale-journey.scaled-growth.team-description.1')}</div>
            <div>
              <Trans
                i18nKey="whale-journey.scaled-growth.team-description.2"
                components={{
                  h: <HighlightText />,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 justify-between mb-5 py-7">
            <div className="flex-1 flex flex-col text-4xl relative mt-4">
              <div className="flex items-center gap-1">
                <span className="translate-y-3">{t('whale-journey.scaled-growth.metric-1.title')}</span>
                <Percentage value={60} />
              </div>
              <div>{t('whale-journey.scaled-growth.metric-1.description')}</div>
              <div className="absolute -bottom-[36px] left-[265px]">
                <DownArrow />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-end text-4xl relative">
              <div>
                <div className="flex items-center gap-1">
                  <span className="translate-y-3">{t('whale-journey.scaled-growth.metric-2.title')}</span>
                  <Percentage value={50} />
                </div>
                <div>{t('whale-journey.scaled-growth.metric-2.description')}</div>
                <div className="absolute top-[30px] right-[285px]">
                  <UpArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}
