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
  const { i18n: i18nInstance } = useTranslation()
  console.log('i18nInstance', i18nInstance)
  return (
    <PageLayout
      screenProps={{
        contentFLex: '10',
        backgroundImage: 'url(https://pub.pbkrs.com/files/202205/YU2Z37iWrsLLrxEc/.png)',
        title: '',
        desc: (
          i18nInstance.language === 'zh-HK' ? (
            <>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">關於 LONGPORT Whale</h3>
              <p>LONGPORT Whale 專注於為證券經紀公司、銀行、家族辦公室及各類金融機構，提供覆蓋多市場、多資產的交易解決方案。平台基於自研雲原生微服務架構打造，具備毫秒級響應能力，並經數千萬筆真實交易的持續驗證，兼顧高性能與金融級穩定性。目前，LONGPORT Whale 已為全球逾 100 家機構提供支援多市場、多資產交易的核心解決方案。</p>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">團隊與技術</h3>
              <p className='mb-4'>LONGPORT Whale 的穩定運行與持續演進，源於堅實的全球技術與團隊基礎。團隊匯聚來自新加坡、香港的資深金融管理者，以及多家全球 TOP 科技企業的技術專家，在證券交易系統與金融基礎設施領域擁有深厚積累。</p>
              <p>目前，LONGPORT Whale 在香港、新加坡、美國及泰國等地設有辦公室，全球員工近 400 人，其中金融科技研發人員佔比超過 70%。憑藉突出的自主研發能力，團隊多次獲得國際權威機構頒發的金融科技創新獎項。</p>
            </>
          ) : i18nInstance.language === 'zh-CN' ? (
            <>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">关于 LONGPORT Whale</h3>
              <p>LONGPORT Whale 专注于为证券经纪公司、银行、家族办公室及各类金融机构，提供覆盖多市场、多资产的交易解决方案。平台基于自研云原生微服务架构打造，具备毫秒级响应能力，并经数千万笔真实交易的持续验证，兼顾高性能与金融级稳定性。目前，LONGPORT Whale 已为全球逾 100 家机构提供支持多市场、多资产交易的核心解决方案。</p>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">团队与技术</h3>
              <p className='mb-4'>LONGPORT Whale 的稳定运行与持续演进，源于坚实的全球技术与团队基础。团队汇聚来自新加坡、香港的资深金融管理者，以及多家全球 TOP 科技企业的技术专家，在证券交易系统与金融基础设施领域拥有深厚积累。</p>
              <p>目前，LONGPORT Whale 在香港、新加坡、美国及泰国等地设有办公室，全球员工近 400 人，其中金融科技研发人员占比超过 70%。凭借突出的自主研发能力，团队多次获得国际权威机构颁发的金融科技创新奖项。</p>
            </>
          ) : (
            <>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">About LONGPORT Whale</h3>
              <p className='mb-4'>LONGPORT Whale provides institutional-grade trading solutions for brokers, banks, family offices, and other institutions with trading services. The platform delivers comprehensive access to multi-market, multi-asset trading through a single integrated system.</p>
              <p className='mb-4'>Built on a proprietary cloud-native microservices architecture and validated by tens of millions of live transactions, LONGPORT Whale delivers millisecond-level execution with exceptional stability and reliability. </p>
              <p className='mb-4'>Its modular, flexible deployment model allows each institution to tailor the system to its business scale and regulatory environment, enabling partners to rapidly build efficient, compliant, and globally scalable trading services.</p>
              <p className='mb-4'>Today, the platform serves as the core trading system for more than 100 institutions worldwide.</p>
              <h3 className="my-5 text-4xl font-medium text-text-color-1">Our Team & Technology</h3>
              <p className='mb-4'>The founding team of LONGPORT Whale brings together experienced financial professionals from Singapore and Hong Kong, alongside senior technology leaders from top global technology companies. With operations across Hong Kong, Singapore, the United States, and Thailand, the company has grown to nearly 400 employees, with over 70% focused on FinTech research and development.</p>
              <p>Driven by deep industry expertise and continuous technological innovation, LONGPORT Whale has established itself as a trusted industry leader and has been recognized with multiple prestigious FinTech awards from internationally respected institutions.</p>
            </>
          )
        ),
      }}
    >
      <SEOMeta title={seoI18n.t('about.title')} description={seoI18n.t('about.description')} />
      <AboutGallery />
    </PageLayout>
  )
}
export default AboutPage
