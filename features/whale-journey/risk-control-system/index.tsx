import { Block, Header } from '../block'
import { HighlightText } from '../title'
import classNames from 'classnames'
import { useTranslation, Trans } from 'next-i18next'
import styles from './index.module.scss'

const Card = ({
  time,
  unit,
  description,
  number,
  suffix,
}: {
  time: string
  unit?: string
  description: string
  number: string
  suffix?: string
}) => {
  return (
    <div className={classNames(styles.card, 'flex-1 bg-gradient-to-b from-[#150568_0%] to-[#09034B_100%] p-9')}>
      <div className="flex  items-baseline gap-1 mb-4  text-[22px]  leading-[1.85em]">
        <span className=" text-[44px] font-semibold">{time}</span>
        <span className="text-3xl">{unit}</span>
        <div className=" translate-y-[0.5em]">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="48" viewBox="0 0 26 48" fill="none">
            <path
              d="M0.703125 29.5303L21.5636 0.035075L15.4039 19.6795L25.2264 18.4307L4.74881 47.9817L10.243 27.8372L0.703125 29.5303Z"
              fill="#FFCC8D"
            />
          </svg>
        </div>

        <span className="text-xl">{description}</span>
      </div>
      <div className="flex items-baseline text-[120px] font-bold">
        <span>{number}</span>
        <span className=" text-4xl ml-1">{suffix}</span>
      </div>
    </div>
  )
}

export const RiskControlSystem = () => {
  const { t } = useTranslation('common')

  const cards = [
    {
      time: '5',
      unit: '分钟',
      description: '可处理快速压测用户数',
      number: '100,000+',
    },
    {
      time: '10',
      unit: '分钟',
      description: '可处理客户 Margin Call',
      number: '1,000',
      suffix: '条',
    },
  ]

  return (
    <Block className={classNames('bg-[#09034B] text-[#FFC977]')}>
      <div>
        <Header
          title={t('whale-journey.risk-control-system.title')}
          description={t('whale-journey.risk-control-system.description')}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-14 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="mt-8 text-base  leading-loose">
        <Trans
          i18nKey="whale-journey.risk-control-system.features.description"
          components={{
            h: <HighlightText />,
          }}
        />
      </div>
    </Block>
  )
}
