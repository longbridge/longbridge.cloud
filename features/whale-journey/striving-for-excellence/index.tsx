import { Block } from '../block'
import classNames from 'classnames'
import styles from './index.module.scss'
import { PurpleGradientTitle } from '../title'
import { useTranslation, Trans } from 'next-i18next'

export const StrivingForExcellence = () => {
  const { t } = useTranslation('common')

  return (
    <Block
      className={classNames(styles['striving-for-excellence'], 'h-[780px]  md:h-[537px]')}
      containerClassName={'h-full'}
    >
      <div className="flex flex-col md:flex-row items-center h-full">
        <div className="flex-1  flex flex-col   text-[#FFC977] leading-tight md:justify-center">
          <div className="w-full">
            <p>{t('whale-journey.striving-for-excellence.title')}</p>
            <div className=" font-medium  text-4xl leading-normal">
              <Trans
                i18nKey="whale-journey.striving-for-excellence.description"
                components={{ h: <PurpleGradientTitle className="max-w-[450px]" /> }}
              />
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}
