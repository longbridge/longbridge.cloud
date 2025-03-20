import { Block, Header } from '../block'
import styles from './index.module.scss'
import classNames from 'classnames'
import { useTranslation, Trans } from 'next-i18next'

const Star = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path
        d="M6.91699 0.971924L8.48859 5.46331H13.5744L9.45989 8.23914L11.0315 12.7305L6.91699 9.9547L2.8025 12.7305L4.37409 8.23914L0.259596 5.46331H5.34539L6.91699 0.971924Z"
        fill="url(#paint0_linear_1_1711)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_1711"
          x1="-0.0830078"
          y1="7.47192"
          x2="13.917"
          y2="7.47192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC977" />
          <stop offset="1" stopColor="#FFC977" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AllInOnePartner = () => {
  const { t } = useTranslation('common')
  const features = [
    {
      description: t('whale-journey.unique-advantages.features.1.description'),
    },
    {
      description: t('whale-journey.unique-advantages.features.2.description'),
    },
    {
      description: t('whale-journey.unique-advantages.features.3.description'),
    },
    {
      description: t('whale-journey.unique-advantages.features.4.description'),
    },
    {
      description: t('whale-journey.unique-advantages.features.5.description'),
    },
  ]

  const advantages = [
    {
      title: t('whale-journey.unique-advantages.1.title'),
      description: t('whale-journey.unique-advantages.1.description'),
      subDescription: t('whale-journey.unique-advantages.1.subDescription'),
    },
    {
      title: t('whale-journey.unique-advantages.2.title'),
      description: t('whale-journey.unique-advantages.2.description'),
      subDescription: t('whale-journey.unique-advantages.2.subDescription'),
    },
  ]

  return (
    <Block className={classNames(styles['all-in-one-partner'], 'text-[#FFCC8D]')}>
      <div>
        <Header
          title={t('whale-journey.unique-advantages.title')}
          description={t('whale-journey.unique-advantages.description')}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-20">
        <div className="flex flex-col gap-8 flex-1">
          {features.map((feature, index) => (
            <div key={index}>
              <p className="flex gap-2 items-baseline text-sm md:text-base">
                <Trans
                  i18nKey={feature.description}
                  components={{
                    t: <p className="font-medium md:text-xl" />,
                    b: <p className="font-bold md:text-2xl" />,
                    s: <p className="font-bold md:text-4xl" />,
                  }}
                />
              </p>
              <svg
                className="mt-2"
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="2"
                viewBox="0 0 65 2"
                fill="none"
              >
                <path d="M65 0H0V2H65V0Z" fill="url(#paint0_linear_1_1174)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1174"
                    x1="0"
                    y1="1.00011"
                    x2="65.0029"
                    y2="1.00011"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4D00FF" />
                    <stop offset="0.745" stopColor="#5110E9" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#551FD2" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col  items-center">
          <div className="text-4xl font-semibold mb-8">
            <div className=" w-full md:w-[480px] md:h-[130px]">
              <img
                src="https://assets.lbctrl.com/uploads/1edfe2a8-6042-4168-aadb-a8db706483d5/27d471e55f4583dc853a6fbb664cedb4.png"
                alt="unique-advantages"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-5 md:mt-20">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex-1 rounded-2xl flex flex-col items-center justify-center">
                <div className="text-2xl font-normal flex gap-2 items-center mb-2">
                  <Star />
                  <span>{advantage.title}</span>
                  <Star />
                </div>
                <div className="text-base text-center">{advantage.description}</div>
                <div className="text-base">{advantage.subDescription}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  )
}
