// 后台系统
import ImageIcon from '@/components/image-icon'
import { Layout } from '@/features/common/page-layout'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React from 'react'
import { SEOMeta } from '@/utils/seo'
// eslint-disable-next-line import/named
import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NewBanner as Banner } from '@/features/product/Banner'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as UserConfig)),
  },
})

const BackOffice: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'

  const banner_props = {
    title: i18n.t('whale-backoffice-001'),
    desc: [i18n.t('whale-backoffice-002'), i18n.t('whale-backoffice-003')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/4de0c574-d27f-4b29-b1a1-a203bad0e7f8/back-en.webp',
      'zh-CN': 'https://assets.lbctrl.com/uploads/8ae568cf-39b9-46ee-ba07-87478782f819/back-cn.webp',
      'zh-HK': 'https://assets.lbctrl.com/uploads/53d20523-54e7-46b0-bbb4-afde8dedc195/back-hk.webp',
    },
  }

  const bss_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/b33402d9-fae6-453f-b23d-a7445a81900d/Group 427319259.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/longbridge-whale/55f7fd97-0b35-49d0-b901-65e216407d8a/a1.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/longbridge-whale/55f7fd97-0b35-49d0-b901-65e216407d8a/a1.svg',
  }

  const asset_book_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/d6b8fee2-191a-4041-939e-7363b82248f8/Group 427319260.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/longbridge-whale/16f8fd13-6684-4096-a7e2-8db057a4e169/a2.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/longbridge-whale/16f8fd13-6684-4096-a7e2-8db057a4e169/a2.svg',
  }

  const settlement_system_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/c978b574-109e-441b-959f-9c46e4fd1405/settlement_system_en.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/00a0bc28-b362-459b-9fd6-7763ccc7de8e/settlement_system_cn.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/00a0bc28-b362-459b-9fd6-7763ccc7de8e/settlement_system_cn.svg',
  }

  const accounting_system_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/e5e3084f-ff8a-4735-b766-7b5162185237/account_system_en.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/cd481590-7003-4536-878e-f851e4a8aa0e/account_system_cn.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/cd481590-7003-4536-878e-f851e4a8aa0e/account_system_cn.svg',
  }

  const report_printing_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/8289fe94-d0a3-47d0-aca7-914fab85f9eb/Group 427319157.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/longbridge-whale/51175fd0-5e84-41a3-9fa0-0cc6985a726a/a7.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/longbridge-whale/51175fd0-5e84-41a3-9fa0-0cc6985a726a/a7.svg',
  }

  return (
    <Layout>
      <SEOMeta
        indexTitle={false}
        title={seoI18n.t('backoffice.title')}
        description={seoI18n.t('backoffice.description')}
      />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col items-start gap-10 lg:w-[510px]">
              <Title label={i18n.t('whale-backoffice-004')} title={i18n.t('whale-backoffice-005')}></Title>
              <div>
                <div className="mb-3 text-xl font-medium">{i18n.t('whale-backoffice-006')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-007')}</div>
              </div>
              <div>
                <div className="mb-3 text-xl font-medium">{i18n.t('whale-backoffice-008')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-009')} </div>
              </div>
              <div>
                <div className="mb-3 text-xl font-medium">{i18n.t('whale-backoffice-010')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-011')}</div>
              </div>
            </div>
            <div className="lg:w-[640px] lg:h[510px] mt-10 lg:mt-0">
              <img className="mx-auto" src={bss_img[i18n.i18n.language]} alt="" />
            </div>
          </div>
        </Box>
        {/* 资产账本 */}
        <Box className="bg-bg_color_2">
          <div className="flex flex-col gap-8">
            <Title title={i18n.t('whale-backoffice-012')}></Title>
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="flex-1 max-w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-013')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-014')}</div>
              </div>
              <div className="flex-1 max-w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-015')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-016')}</div>
              </div>
              <div className="flex-1 max-w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-017')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-018')}</div>
              </div>
            </div>
            <div className="h-[466px]">
              <img src={asset_book_img[i18n.i18n.language]} alt="" />
            </div>
          </div>
        </Box>
        {/* 结算系统 */}
        <Box>
          <div className="flex flex-col gap-10">
            <Title title={i18n.t('whale-backoffice-019')}></Title>
            <div className="flex flex-col justify-center gap-12 lg:justify-between lg:items-start lg:flex-row">
              <div className="lg:w-[510px]">
                <div className="mb-10 lg:text-[28px] left-10 font-medium">
                  <div>{i18n.t('whale-backoffice-020')}</div>
                  {isEN && <div>{i18n.t('whale-backoffice-021')}</div>}
                </div>
                <ul className="flex flex-col text-base text-text_color_3 gap-y-4">
                  <li className="list-dot">{i18n.t('whale-backoffice-022')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-023')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-024')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-025')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-026')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-027')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-028')}</li>
                  <li className="list-dot">{i18n.t('whale-backoffice-029')}</li>
                </ul>
              </div>
              <div>
                <img className="mx-auto" src={settlement_system_img[i18n.i18n.language]} alt="" />
              </div>
            </div>
          </div>
        </Box>
        {/* 公司行动 */}
        <Box className="bg-bg_color_2">
          <div className="flex flex-col gap-10">
            <Title title={i18n.t('whale-backoffice-030')}></Title>
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="flex-1 w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-031')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-032')}</div>
              </div>
              <div className="flex-1 w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-033')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-034')}</div>
              </div>
              <div className="flex-1 w-[373px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-035')}</div>
                <div className="text-base font-normal">{i18n.t('whale-backoffice-036')}</div>
              </div>
            </div>
            <div>
              <img
                src={
                  isEN
                    ? 'https://assets.lbctrl.com/uploads/5959c7de-44dd-4685-a3a9-57e5a7bdb2fd/Group 427319262.svg'
                    : 'https://assets.lbctrl.com/uploads/longbridge-whale/fc51dcaa-a5d4-446d-b83a-b539d272d4b3/a5.svg'
                }
                alt=""
              />
            </div>
          </div>
        </Box>
        {/* 会计系统 */}
        <Box>
          <div className="flex flex-col gap-y-10">
            <Title title={i18n.t('whale-backoffice-037')}></Title>
            <div className="flex flex-col justify-between lg:flex-row ">
              <div className="flex flex-col lg:w-[510px]">
                <div className="mb-10 text-[28px] leading-10 font-medium">{i18n.t('whale-backoffice-038')}</div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex items-center">
                    <ImageIcon url="https://pub.pbkrs.com/files/202212/Uoz4JvFGpFNxGF7f/pen.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 lg:w-[438px] ">
                      {i18n.t('whale-backoffice-039')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ImageIcon
                      url="https://pub.pbkrs.com/files/202212/xWEQJZ6PzZuHbnHc/treeview.png"
                      className="mr-8"
                    />
                    <span className="text-base font-normal text-text_color_3 lg:w-[438px]">
                      {i18n.t('whale-backoffice-040')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ImageIcon url="https://pub.pbkrs.com/files/202212/q2xDeZMTLrzfQuE6/unlock.png" className="mr-8" />
                    <span className="text-base font-normal text-text_color_3 lg:w-[438px]">
                      {i18n.t('whale-backoffice-041')}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={accounting_system_img[i18n.i18n.language]} alt="" />
              </div>
            </div>
          </div>
        </Box>
        {/* 报表打印 */}
        <Box className="bg-bg_color_2">
          <div className="flex flex-col gap-10">
            <Title title={i18n.t('whale-backoffice-042')}></Title>
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="flex-1 lg:w-[270px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-043')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-044')}</div>
              </div>
              <div className="flex-1 lg:w-[270px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-045')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-046')}</div>
              </div>
              <div className="flex-1 lg:w-[270px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-047')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-048')}</div>
              </div>
              <div className="flex-1 lg:w-[270px]">
                <div className="mb-[10px] text-xl font-medium">{i18n.t('whale-backoffice-049')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-backoffice-050')}</div>
              </div>
            </div>
            <div>
              <img src={report_printing_img[i18n.i18n.language]} alt="" />
            </div>
          </div>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default BackOffice
