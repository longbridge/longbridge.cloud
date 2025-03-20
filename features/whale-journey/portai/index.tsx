import { Block, Header } from '../block'
import { HighlightText } from '../title'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'

const FeatureList = ({ features }: { features: { text: string }[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-5">
          <div className="w-2 h-2 bg-[#FFCC8D]" />
          <span className="text-base font-light">{feature.text}</span>
        </div>
      ))}
    </div>
  )
}

export const PortAI = () => {
  const { t } = useTranslation('common')

  const individualInvestorFeatures = [
    {
      text: t('whale-journey.port-ai.individual-investor.features.data-source'),
    },
    {
      text: t('whale-journey.port-ai.individual-investor.features.info-quality'),
    },
  ]

  const brokerFeatures = [
    {
      text: t('whale-journey.port-ai.broker.features.kyc'),
    },
    {
      text: t('whale-journey.port-ai.broker.features.deposit'),
    },
    {
      text: t('whale-journey.port-ai.broker.features.service'),
    },
  ]

  const tabList = [
    {
      label: t('whale-journey.port-ai.individual-investor.title'),
      features: individualInvestorFeatures,
    },
    {
      label: t('whale-journey.port-ai.broker.title'),
      features: brokerFeatures,
    },
  ]

  return (
    <Block className={classNames(styles['port-ai'], 'text-[#FFCC8D]')}>
      <div className="relative">
        <Header title={t('whale-journey.port-ai.title')} description={t('whale-journey.port-ai.description')} />

        <div className="mt-12">
          <div className="mb-16">
            <div className="text-3xl">{t('whale-journey.port-ai.service-count.description')}</div>
            <div className="text-[180px] leading-none font-bold italic">
              {t('whale-journey.port-ai.service-count.number')}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 justify-center">
            {tabList.map(tab => (
              <div className="flex-1" key={tab.label}>
                <HighlightText className="px-3 mx-0 py-1 font-medium text-xl text-[#0A044E]">{tab.label}</HighlightText>
                <div className="mt-6">
                  <div className="text-xl mb-4">{t('whale-journey.port-ai.individual-investor.subtitle')}</div>
                  <FeatureList features={tab.features} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  )
}
