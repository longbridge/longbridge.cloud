import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { SharePosterPanel } from '@/features/whale-ambassador/register/share-poster'
import { GetStaticPropsContext } from 'next'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale as string, ['common', 'seo'], i18nextConfig)),
  },
})

const WhaleAmbassadorPoster = () => {
  const seoI18n = useTranslation(['seo'])

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('whale-ambassador.title')} description={seoI18n.t('whale-ambassador.description')} />
      <div>
        <SharePosterPanel />
      </div>
    </Layout>
  )
}

export default WhaleAmbassadorPoster
