import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { PictureTextCard } from '../common/picture-text-card'
import styles from './features.module.scss'

function useFeatures() {
  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      {
        title: i18n.t('trading_features_001'),
        desc: i18n.t('trading_features_002'),
        picture: 'https://pub.lbkrs.com/files/202205/Ls3uQ15At2UHs5k5/trading_platform_01.png',
      },
      {
        title: i18n.t('trading_features_003'),
        desc: i18n.t('trading_features_004'),
        picture: 'https://pub.lbkrs.com/files/202205/51i5U7W63hbXy6DY/trading_platform_02.png',
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const TradingFeatures = () => {
  const features = useFeatures()

  return (
    <div className="main-container">
      <div className={classNames(styles.features, 'main-content-width')}>
        <div className="flex justify-between">
          {features.map(({ title, desc, picture }) => {
            return <PictureTextCard desc={desc} picture={picture} key={title} title={title} />
          })}
        </div>
      </div>
    </div>
  )
}
