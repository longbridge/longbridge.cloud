import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { TopBanner } from '@/features/whale-ambassador/top-banner'
import { RewardDetails } from '@/features/whale-ambassador/reward-details'
import { HowToParticipate } from '@/features/whale-ambassador/how-to-participate'
import { FAQ } from '@/features/whale-ambassador/faq'
import { Declaration } from '@/features/whale-ambassador/declaration'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const WhaleAmbassador = () => {
  const seoI18n = useTranslation(['seo'])

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('whale-ambassador.title')} description={seoI18n.t('whale-ambassador.description')} />
      <div className="space-y-16 md:space-y-20 pb-16 md:pb-20">
        <TopBanner />
        <RewardDetails />
        <HowToParticipate />
        <FAQ />
        <Declaration />
      </div>
    </Layout>
  )
}

export default WhaleAmbassador
