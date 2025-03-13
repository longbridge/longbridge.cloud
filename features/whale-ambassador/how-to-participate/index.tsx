import { Fragment } from 'react'
import { Block } from '../block'
import { BecomeAmbassadorButton } from '../become-ambassador-button'
import { Trans, useTranslation } from 'next-i18next'
import styles from '../bg.module.scss'
import classNames from 'classnames'

interface StepProps {
  titleKey: string
  descriptionKey: string
  icon: string
}

const stepList = [
  {
    titleKey: 'whale-ambassador.step-provide-info-title',
    descriptionKey: 'whale-ambassador.step-provide-info-desc',
    icon: 'https://assets.lbctrl.com/uploads/6080d177-bad6-44a6-9d0e-ee1b0f694981/contact.svg',
  },
  {
    titleKey: 'whale-ambassador.step-verify-title',
    descriptionKey: 'whale-ambassador.step-verify-desc',
    icon: 'https://assets.lbctrl.com/uploads/3e705db1-6774-46b6-9585-9ef72fc645df/verify.svg',
  },
  {
    titleKey: 'whale-ambassador.step-lead-reward-title',
    descriptionKey: 'whale-ambassador.step-lead-reward-desc',
    icon: 'https://assets.lbctrl.com/uploads/12c5a6e4-1eb2-4148-b48e-c55d4e4f26b3/award.svg',
  },
  {
    titleKey: 'whale-ambassador.step-contract-reward-title',
    descriptionKey: 'whale-ambassador.step-contract-reward-desc',
    icon: 'https://assets.lbctrl.com/uploads/a9ce0503-c06b-4003-a8f2-38e124c36f57/final-award.svg',
  },
]

const Step = ({ titleKey, descriptionKey, icon }: StepProps) => {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-1 flex-col gap-5 md:gap-6">
      <div>
        <img className="md:h-[68px] h-12" src={icon} alt={t(titleKey)} />
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="font-medium text-front-bg-color text-xl">{t(titleKey)}</h3>
        <p className="text-sm md:text-base text-front-bg-color opacity-70">{t(descriptionKey)}</p>
      </div>
    </div>
  )
}

export const HowToParticipate = () => {
  const { t } = useTranslation('common')
  return (
    <Block className={classNames('bg-brand_color py-16', styles['with-bg'])}>
      <div className="flex flex-col items-start md:items-center">
        <h2 className="mb-[28px] md:mb-10 text-front-bg-color text-[28px]  md:text-4xl font-semibold">
          {t('whale-ambassador.how-to-participate')}
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          {stepList.map((step, index) => (
            <Fragment key={step.titleKey}>
              {index > 0 && (
                <img
                  className="w-12 md:-rotate-90 md:translate-y-4"
                  src="https://assets.lbctrl.com/uploads/cd90683a-ff07-4df9-b47b-9ebca124f431/arrow.svg"
                  alt="arrow"
                />
              )}

              <Step key={step.titleKey} {...step} />
            </Fragment>
          ))}
        </div>
        <div className="mt-10">
          <BecomeAmbassadorButton
            form="推荐官计划主页"
            className="px-6 md:px-8 text-brand_color bg-white border-none py-2.5 h-auto font-medium text-sm  md:text-lg"
          />
        </div>
      </div>
    </Block>
  )
}
