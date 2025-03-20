import { Block, Header } from '../block'
import classNames from 'classnames'
import { useTranslation, Trans } from 'next-i18next'
import { HighlightText } from '../title'

const features = [
  {
    i18nKey: 'whale-journey.wealth-management.features.1',
  },
  {
    i18nKey: 'whale-journey.wealth-management.features.2',
  },
  {
    i18nKey: 'whale-journey.wealth-management.features.3',
  },
  {
    i18nKey: 'whale-journey.wealth-management.features.4',
  },
  {
    i18nKey: 'whale-journey.wealth-management.features.5',
  },
]

const Feature = ({ i18nKey }: { i18nKey: string }) => {
  return (
    <div className="flex">
      <div className="flex  flex-col  text-base justify-center-center">
        <div>
          <Trans
            i18nKey={i18nKey}
            components={{
              h: <HighlightText />,
            }}
          />
        </div>

        <div
          className="h-1 w-[calc(100%_+_80px)] mt-2"
          style={{
            background: 'linear-gradient(90deg, #FFC977 0.01%, rgba(255, 201, 119, 0.00) 88.5%)',
          }}
        ></div>
      </div>
    </div>
  )
}

export const WealthManagement = () => {
  const { t } = useTranslation('common')

  return (
    <Block className={classNames('text-[#FFCC8D]')}>
      <div className="relative">
        <Header
          title={t('whale-journey.wealth-management.title')}
          description={t('whale-journey.wealth-management.description')}
        />

        <div className="flex flex-col gap-10 mt-16">
          <div className=" text-lg">{t('whale-journey.wealth-management.features.description')}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
            {features.map((feature, index) => (
              <Feature key={index} i18nKey={feature.i18nKey} />
            ))}
          </div>
        </div>
      </div>
    </Block>
  )
}
