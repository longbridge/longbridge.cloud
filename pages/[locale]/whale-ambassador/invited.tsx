import React, { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { useSearchParams } from 'react-router-dom'
import { WhaleReferrerService } from '@/services/whale-ambassador'
import { InvitedTopBanner } from '@/features/whale-ambassador/top-banner/invited'
import HomeTeamsInfo from '@/features/home/home-teams-info'
import HomeSolutionSwiper from '@/features/home/home-solution-swiper'
import { InvitedFooter } from '@/features/whale-ambassador/invited-footer'
import HomeNewExamples from '@/features/home/home-examples'

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
  const [name, setName] = useState<string>()
  const { t } = useTranslation('common')
  const code = searchParams.get('code')!

  useEffect(() => {
    WhaleReferrerService.getNameByCode({ code }).then(res => {
      setName(res.data.name)
    })
  }, [code])

  return (
    <Layout>
      <SEOMeta
        title={seoI18n.t('whale-ambassador-invited.title')}
        description={seoI18n.t('whale-ambassador-invited.description')}
      />
      <div className="space-y-16 md:space-y-20 pb-16 md:pb-20">
        <InvitedTopBanner name={name} code={code} />
        <HomeTeamsInfo itemStyle={{ backgroundColor: '#fff' }} className="bg-[#F7F6F9] py-16 md:py-20" />
        <HomeSolutionSwiper
          className="py-0 bg-white"
          showLabel={false}
          title={t('whale-ambassador.top-banner.invited.title-2')}
          needContact={false}
        />
        <HomeNewExamples />
        <InvitedFooter referCode={code} name={name} />
      </div>
    </Layout>
  )
}

export default WhaleAmbassadorInvited
