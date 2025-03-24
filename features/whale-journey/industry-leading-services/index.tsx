import { Block } from '../block'
import classNames from 'classnames'
import { Trans, useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import { PurpleGradientTitle } from '../title'

interface ServiceItemProps {
  title: string
  subtitle: string
  description: React.ReactNode
  reverse?: boolean
  subtitleStyle?: React.CSSProperties
}

const ServiceItem = ({ title, subtitle, description, reverse, subtitleStyle }: ServiceItemProps) => {
  return (
    <div className="flex justify-between items-end  w-[380px]">
      <div className={classNames('flex', reverse ? 'flex-col-reverse' : 'flex-col')}>
        <div className="text-base text-[#FFCC8D]" style={subtitleStyle}>
          {subtitle}
        </div>
        <div className="text-[#FFCC8D] text-3xl font-black">{title}</div>
      </div>
      <div>
        <div className="text-[#FFCC8D] mt-2  font-light  whitespace-pre-wrap text-right ">{description}</div>
        <div className="h-1 w-[290px]  bg-gradient-to-r to-[#FFC977] from-[rgba(255,_201,_119,_0.00)] mt-2 mb-1"></div>
      </div>
    </div>
  )
}

export const IndustryLeadingServices = () => {
  const { t } = useTranslation('common')

  const services = [
    {
      subtitle: t('whale-journey.industry-leading-services.response-speed.subtitle'),
      title: t('whale-journey.industry-leading-services.response-speed.title'),
      description: (
        <Trans
          i18nKey="whale-journey.industry-leading-services.response-speed.description"
          components={{ b: <span className="font-bold" /> }}
        />
      ),
    },
    {
      subtitle: t('whale-journey.industry-leading-services.resolution-rate.subtitle'),
      title: t('whale-journey.industry-leading-services.resolution-rate.title'),
      description: (
        <Trans
          i18nKey="whale-journey.industry-leading-services.resolution-rate.description"
          components={{ b: <span className="font-bold" /> }}
        />
      ),
    },
    {
      subtitle: t('whale-journey.industry-leading-services.multi-channel.subtitle'),
      title: t('whale-journey.industry-leading-services.multi-channel.title'),
      description: t('whale-journey.industry-leading-services.multi-channel.description'),
      reverse: true,
      subtitleStyle: {
        letterSpacing: '-0.1em',
      },
    },
    {
      subtitle: t('whale-journey.industry-leading-services.professional.subtitle'),
      title: t('whale-journey.industry-leading-services.professional.title'),
      description: t('whale-journey.industry-leading-services.professional.description'),
    },
  ]

  return (
    <Block className={classNames(styles['industry-leading-services'], 'text-[#FFCC8D]')}>
      <div className="relative">
        <div className="text-2xl  mb-4">{t('whale-journey.industry-leading-services.subtitle')}</div>
        <PurpleGradientTitle className="text-4xl max-w-[800px] py-1 font-medium mb-16">
          {t('whale-journey.industry-leading-services.title')}
        </PurpleGradientTitle>
        <div className="flex flex-wrap gap-10 justify-between">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </Block>
  )
}
