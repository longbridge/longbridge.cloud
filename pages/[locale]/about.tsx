import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { PageLayout } from '@/features/common/page-layout'
import { AboutGallery } from '@/features/about/gallery'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})
const AboutPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  return (
    <PageLayout
      screenProps={{
        contentFLex: '10',
        backgroundImage: 'url(https://pub.pbkrs.com/files/202205/YU2Z37iWrsLLrxEc/.png)',
        title: '',
        desc: (
          <>
            <h3 className="my-4 text-2xl font-medium text-text-color-1">{i18n.t('about_page_001')}</h3>
            <span className="block whitespace-pre-line">
              {i18n.t('pages_locale_about_891186')}
            </span>
            <h3 className="my-4 text-2xl font-medium text-text-color-1">{i18n.t('about_page_001')}</h3>
            <span className="block whitespace-pre-line">
              {i18n.t('pages_locale_about_891190')}
            </span>
          </>
        ),
      }}
    >
      <SEOMeta title={seoI18n.t('about.title')} description={seoI18n.t('about.description')} />
      <AboutGallery />
    </PageLayout>
  )
}
export default AboutPage
