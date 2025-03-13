import React from 'react'
import { Block } from '../block'
import { RecommendCard } from './RecommendCard'
import { SignCard } from './SignCard'
import { useTranslation } from 'next-i18next'
import { BecomeAmbassadorButton } from '../become-ambassador-button'

export const RewardDetails = () => {
  const { t } = useTranslation('common')
  return (
    <Block>
      <h2 className="mb-5 md:mb-10 text-text-color-1  text-[28px]  md:text-4xl font-semibold">
        {t('whale-ambassador.reward-details')}
      </h2>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5">
        <SignCard />
        <RecommendCard />
      </div>
    </Block>
  )
}

export const InvitedRewardDetails = () => {
  const { t } = useTranslation('common')
  return (
    <Block className="border-b border-border_color pb-16 md:pb-20">
      <h2 className="mb-5 md:mb-10 text-text-color-1  text-[28px]  md:text-4xl font-semibold">
        {t('whale-ambassador.invited-reward-details')}
      </h2>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5">
        <SignCard />
        <RecommendCard />
      </div>
      <div>
        <BecomeAmbassadorButton
          form="被推荐人-登记成功反馈页"
          type="primary"
          className="block w-full mt-5 md:mt-12 md:inline-block md:w-max"
        />
      </div>
    </Block>
  )
}
