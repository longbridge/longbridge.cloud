import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { GetStaticPropsContext } from 'next'
import { TopBanner } from '@/features/whale-ambassador/top-banner'
import { RewardDetails } from '@/features/whale-ambassador/reward-details'
import { Modal } from '@/features/whale-ambassador/modal'
import { RecommendForm } from '@/features/whale-ambassador/register/recommend-from'
import { useLocaleNavigate } from '@/hooks/use-locale-navigate'
import { useSearchParams } from 'react-router-dom'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale as string, ['common', 'seo'], i18nextConfig)),
  },
})

const WhaleAmbassadorForm = () => {
  const seoI18n = useTranslation(['seo'])
  const { t } = useTranslation('common')
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  const navigateToPoster = useLocaleNavigate()

  const handleClose = () => {
    navigateToPoster('/whale-ambassador')
  }

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('whale-ambassador.title')} description={seoI18n.t('whale-ambassador.description')} />
      <div className="space-y-16 md:space-y-20 pb-16 md:pb-20">
        <TopBanner />
        <RewardDetails />
        <Modal open title={t('whale-ambassador.fill-recommend-info')} onClose={handleClose}>
          <RecommendForm referCode={code!} onSuccess={handleClose} />
        </Modal>
      </div>
    </Layout>
  )
}

export default WhaleAmbassadorForm
