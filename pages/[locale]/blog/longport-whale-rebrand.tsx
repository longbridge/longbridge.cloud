import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/features/common/page-layout'
import { SEOMeta } from '@/utils/seo'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo', 'rebrand'], i18nextConfig)),
  },
})

const RebrandBlogPage = () => {
  const { t } = useTranslation('rebrand')

  return (
    <Layout>
      <SEOMeta
        indexTitle={true}
        title={t('meta_title') || 'Longbridge Whale Rebrand'}
        description={t('meta_description')}
      />
      <div className="bg-white min-h-screen">
        <article className="max-w-[720px] mx-auto px-6 py-12 md:py-24 safe-area">
          <header className="mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-6 text-[#1a1a1a] tracking-tight font-sans">
              {t('title')}
            </h1>
            <div className="flex items-center text-[#757575] font-sans text-base">
              <span>{t('meta_info.date')}</span>
              <span className="mx-2">·</span>
              <span>{t('meta_info.category')}</span>
            </div>
          </header>

          <div className="text-[18px] md:text-[20px] leading-[1.8] md:leading-[1.9] text-[#292929] font-serif antialiased">
            {['p1', 'p2', 'p3', 'p4', 'p5', 'p6'].map((key) => {
              const text = t(`body.${key}`)
              if (!text || text === `body.${key}`) return null
              // Check if text is short enough to be a subheading or introductory line, though standard Medium is all uniform.
              // We'll keep it standard but add slightly more bottom margin for flow.
              return <p key={key} className="mb-8">{text}</p>
            })}

            <ul className="list-none mb-10 pl-2 space-y-4">
              <li className="font-medium text-[#1a1a1a]">{t('list.item1')}</li>
              <li className="font-medium text-[#1a1a1a]">{t('list.item2')}</li>
              <li className="font-medium text-[#1a1a1a]">{t('list.item3')}</li>
            </ul>

            <p className="mb-6 font-medium text-[#1a1a1a]">{t('office_caption')}</p>

            <figure className="mt-2 mb-14">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <img src="https://assets.lbctrl.com/uploads/6f6ee4be-921c-46c4-85ae-6ee7264825a9/activity.png" alt={t('image_caption') || 'Longport Whale Rebrand'} className="w-full h-auto block" />
              </div>
              {t('image_caption') && <figcaption className="text-sm text-[#757575] mt-3 text-center font-sans">{t('image_caption')}</figcaption>}
            </figure>

            <div className="my-14 pl-6 md:pl-8 border-l-[3px] border-[#292929]">
              <blockquote className="italic text-xl md:text-2xl text-[#1a1a1a] leading-relaxed">
                {t('quote')}
              </blockquote>
            </div>
          </div>

        </article>
      </div>
    </Layout>
  )
}

export default RebrandBlogPage
