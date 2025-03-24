import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { WhaleJourneyBanner } from '@/features/whale-journey/top-banner/journey'
// import { Testimonials } from '@/features/whale-journey/testimonials'
// import { StrivingForExcellence } from '@/features/whale-journey/striving-for-excellence/index'
// import { AllInOnePartner } from '@/features/whale-journey/all-in-one-partner/index'
// import { RiskControlSystem } from '@/features/whale-journey/risk-control-system/index'
// import { OptimizedAppSolutions } from '@/features/whale-journey/optimized-app-solutions/index'
// import { WealthManagement } from '@/features/whale-journey/wealth-management/index'
// import { PortAI } from '@/features/whale-journey/portai/index'
// import { ScaledGrowth } from '@/features/whale-journey/scaled-growth/index'
// import { IndustryLeadingServices } from '@/features/whale-journey/industry-leading-services/index'
import { WhaleOfficialFooterNew } from '@/features/whale-official/footer'
import { BlockListWithNoSSR } from '@/features/whale-journey/block-list'

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
      <SEOMeta title={seoI18n.t('whale-journey.title')} description={seoI18n.t('whale-journey.description')} />
      <div className="bg-[#09034B]">
        <WhaleJourneyBanner />
        {/* <Testimonials />
        <StrivingForExcellence />
        <AllInOnePartner />
        <RiskControlSystem />
        <OptimizedAppSolutions />
        <WealthManagement />
        <PortAI />
        <ScaledGrowth />
        <IndustryLeadingServices />
      */}
        <BlockListWithNoSSR />

        <WhaleOfficialFooterNew className=" bg-[#F8F9FF]" />
      </div>
    </Layout>
  )
}

export default WhaleAmbassador
