import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { useSearchParams } from 'react-router-dom'
import { InvitedSuccessTopBanner } from '@/features/whale-ambassador/top-banner/invited-success'
import { Declaration } from '@/features/whale-ambassador/declaration'
import { InvitedRewardDetails } from '@/features/whale-ambassador/reward-details'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const WhaleAmbassadorInvited = () => {
  const seoI18n = useTranslation(['seo'])
  const [searchParams] = useSearchParams()

  return (
    <Layout>
      <SEOMeta
        title={seoI18n.t('whale-ambassador-invited.title')}
        description={seoI18n.t('whale-ambassador-invited.description')}
      />
      <div className="space-y-16 md:space-y-20 pb-16 md:pb-20">
        <InvitedSuccessTopBanner name={searchParams.get('name')!} code={searchParams.get('code')!} />
        <InvitedRewardDetails />

        <Declaration />
      </div>
    </Layout>
  )
}

export default WhaleAmbassadorInvited
