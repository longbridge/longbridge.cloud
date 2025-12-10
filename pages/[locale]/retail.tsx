// 零售终端
import { Layout } from '@/features/common/page-layout'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo, useRef } from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import { NewBanner as Banner } from '@/features/product/Banner'
import Comment from '@/features/product/Comment'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import InfoIntroduce, { ImageAndText, ImageAndList } from '@/features/solutions/info-introduce'
import Compare from '@/components/compare'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const Retail: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')

  const banner_props = {
    title: i18n.t('features_header_index_3'),
    desc: [i18n.t('pages_locale_solutions_retail_5')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/e9cf7765-4d78-4202-be70-4c5f8053fd0c/2f41eb5b3334500800e9730210763773.png',
      'zh-CN':
        'https://assets.lbkrs.com/uploads/8b8208ef-033e-4898-bd48-c04b0260680f/347c9c7d35679e99658f8820e9a07a00.png',
      'zh-HK':
        'https://assets.lbkrs.com/uploads/9af836e4-4739-4e3d-b848-58541af7bf26/3561ca3a33ef3658c0dc9eb5f70d46fb.png',
    },
  }

  const compareList = [
    // {
    //   title: 'LongPort',
    //   description: i18n.t('pages_locale_solutions_retail_6'),
    //   subTitle: i18n.t('pages_locale_solutions_retail_7'),
    //   subList: [
    //     i18n.t('pages_locale_solutions_retail_8'),
    //     i18n.t('pages_locale_solutions_retail_9'),
    //     i18n.t('pages_locale_solutions_retail_10'),
    //     i18n.t('pages_locale_solutions_retail_11'),
    //     i18n.t('pages_locale_solutions_retail_12'),
    //   ],
    //   thirdTitle: i18n.t('pages_locale_solutions_retail_13'),
    //   // autocorrect:false
    //   thirdDescription: i18n.i18n.language === 'en' ? 'Mobile, Pad, Web' : 'Mobile、Pad、Web',
    //   // autocorrect:true
    // },
    {
      title: 'White Label',
      description: i18n.t('pages_locale_solutions_retail_14'),
      subTitle: i18n.t('pages_locale_solutions_retail_7'),
      subList: [
        i18n.t('pages_locale_solutions_retail_15'),
        i18n.t('pages_locale_solutions_retail_16'),
        i18n.t('pages_locale_solutions_retail_17'),
        i18n.t('pages_locale_solutions_retail_18'),
        i18n.t('pages_locale_solutions_retail_19'),
      ],
      thirdTitle: i18n.t('pages_locale_solutions_retail_13'),
      // autocorrect:false
      thirdDescription: i18n.i18n.language === 'en' ? 'Mobile, Pad, Desktop, Web' : 'Mobile、Pad、Desktop、Web',
      // autocorrect:true
    },
  ]

  const content_banner_props = {
    title: i18n.t('pages_locale_solutions_retail_20'),
    subTitle: i18n.t('pages_locale_solutions_retail_21'),
    desc: [
      {
        icon: 'https://assets.lbctrl.com/uploads/c47a44d3-67c0-42e0-a001-d7ba66cdbd1e/activities.png',
        text: i18n.t('pages_locale_solutions_retail_22'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/3532eeb3-0628-446e-af01-a32e500fafdb/pl_analysis.png',
        text: i18n.t('pages_locale_solutions_retail_23'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/89701893-1bfd-4c8a-be9e-a6a35d59b229/treeview.png',
        text: i18n.t('pages_locale_solutions_retail_24'),
      },
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/890fd461-9fcd-43a1-831c-f66aa940cdc4/1.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/35359849-d787-4434-8dc1-beb9b465ebc5/1.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/35359849-d787-4434-8dc1-beb9b465ebc5/1.png',
    },
    needTalk: false,
  }
  const content_banner_props_2 = {
    title: i18n.t('pages_locale_solutions_retail_25'),
    subTitle: i18n.t('pages_locale_solutions_retail_26'),
    desc: [
      {
        icon: 'https://assets.lbctrl.com/uploads/9d219389-d790-4d3d-b910-74b8d55ec60a/broadcasting.png',
        text: i18n.t('pages_locale_solutions_retail_27'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/8d8724e7-26a5-4528-9f89-d59a4d193e35/aim.png',
        text: i18n.t('pages_locale_solutions_retail_28'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/c71ee5c1-41b1-4fea-b4ac-f75d9ee9502d/add_dividing_line.png',
        text: i18n.t('pages_locale_solutions_retail_29'),
      },
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/3137ee4b-3bb3-491c-a12d-f4447664632b/2.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/870101f1-7476-4d0d-bf01-3fe47de6e142/2.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/870101f1-7476-4d0d-bf01-3fe47de6e142/2.png',
    },
    needTalk: false,
    reverse: false,
  }
  const content_banner_props_3 = {
    title: i18n.t('pages_locale_solutions_retail_30'),
    subTitle: i18n.t('pages_locale_solutions_retail_31'),
    desc: [
      {
        icon: 'https://assets.lbctrl.com/uploads/0c34320c-c99c-434f-88a9-b9a7b80b721c/broker.png',
        text: i18n.t('pages_locale_solutions_retail_32'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/4863c2a8-9bbf-45ee-ac60-294f2461edec/report.png',
        text: i18n.t('pages_locale_solutions_retail_33'),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/b7ae1370-6d2c-4da3-bf6f-c311e36771cb/reading mode.png',
        text: i18n.t('pages_locale_solutions_retail_34'),
      },
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/0b9d4e21-be08-4ae8-a21d-2966cd652dc1/3.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/ab8df12e-17a1-48f5-a8e9-116c36716dfe/3.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/ab8df12e-17a1-48f5-a8e9-116c36716dfe/3.png',
    },
    needTalk: false,
  }
  const content_banner_props_4 = {
    title: i18n.t('pages_locale_solutions_retail_35'),
    subTitle: i18n.t('pages_locale_solutions_retail_36'),
    desc: [
      {
        icon: 'https://assets.lbctrl.com/uploads/d52d8671-c0c7-4e18-bcda-39a86962000a/VS.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_50')}</span>
            {i18n.t('pages_locale_solutions_retail_51')}
          </div>
        ),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/e4b7bd59-f3f2-494c-acff-a2d81cf9dced/stock.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_52')}</span>
            {i18n.t('pages_locale_solutions_retail_53')}
          </div>
        ),
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/3c484998-8108-4657-a5f0-0a456d1f63a9/condition_setting.png',
        text: (
          <div>
            <span className="font-medium">{i18n.t('pages_locale_solutions_retail_54')}</span>
            {i18n.t('pages_locale_solutions_retail_55')}
          </div>
        ),
      },
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/88be68de-728e-4827-80b0-6a1c93c8b679/4.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/4d8983ff-2c35-4e4a-81b1-bc4ed377697d/4.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/4d8983ff-2c35-4e4a-81b1-bc4ed377697d/4.png',
    },
    needTalk: false,
    reverse: false,
  }

  return (
    <Layout>
      <SEOMeta indexTitle={false} title={seoI18n.t('retail.title')} description={seoI18n.t('retail.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_37')}
              title={i18n.t('pages_locale_solutions_retail_38')}
            />
            <InfoIntroduce
              className="mt-8"
              descClass="text-sm text-text_color_1"
              data={[
                {
                  icon: 'https://assets.lbctrl.com/uploads/4473ab05-1c98-45c3-a458-177d18ecf2b4/phone.png',
                  iconClass: '!w-12 !h-auto',
                  title: 'Mobile',
                  description: i18n.t('pages_locale_solutions_retail_39'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/d6d9f7ef-beaf-4c81-929d-b431035e7c6e/phone-1.png',
                  iconClass: '!w-12 !h-auto',
                  title: 'Pad',
                  description: i18n.t('pages_locale_solutions_retail_40'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/dca5243b-1b57-4929-8c35-35b82cbb78a3/camera-1.png',
                  iconClass: '!w-12 !h-auto',
                  title: 'Web',
                  description: i18n.t('pages_locale_solutions_retail_41'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/32606e58-d50d-4a20-8aa3-0ce088eb0aa5/camera.png',
                  iconClass: '!w-12 !h-auto',
                  title: 'Desktop',
                  description: i18n.t('pages_locale_solutions_retail_42'),
                },
              ]}
            />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_37')}
              title={i18n.t('pages_locale_solutions_retail_43')}
            />
            <Compare className="my-10" compareId="app-plus" list={compareList} />
          </>
        </Box>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_44')}
              title={i18n.t('pages_locale_solutions_retail_45')}
            />
            <ImageAndList {...content_banner_props} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_2} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_3} />
            <div className="h-[1px] bg-border_color my-10"></div>
            <ImageAndList {...content_banner_props_4} />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_retail_46')}
              title={i18n.t('pages_locale_solutions_retail_47')}
            />
            <Comment
              className="mt-8"
              data={[
                {
                  avatar: 'https://assets.lbctrl.com/uploads/76d421f5-6408-403f-b2f1-c1b24dcb767f/avatar1.png',
                  name: 'luzhen 1982',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_solutions_retail_49'),
                },
                {
                  avatar: 'https://assets.lbctrl.com/uploads/2d7f91ea-3ba2-45f0-af8d-953dec51d8d5/avatar2.png',
                  name: '憋的慌不要见怪',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_58'),
                },
                {
                  avatar: 'https://assets.lbctrl.com/uploads/0fe3eb8b-d01e-44ef-86c1-4cb5d7d7b7b2/avatar3.png',
                  name: 'zhuyalu84',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_59'),
                },
                {
                  avatar: 'https://assets.lbctrl.com/uploads/b0e24d73-cd50-40ec-94d8-6e7775520924/avatar4.png',
                  name: 'GzxGisele',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_61'),
                },
                {
                  avatar: 'https://assets.lbctrl.com/uploads/4d9bdbba-0647-4d53-a5c0-8c5dd344f474/avatar5.png',
                  name: 'mj19940515',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_62'),
                },
                {
                  avatar: 'https://assets.lbctrl.com/uploads/725287ab-0761-42d1-b2ca-fd8e06bce10e/avatar6.png',
                  name: 'W20211101',
                  platform: i18n.t('pages_locale_product_retail_57'),
                  description: i18n.t('pages_locale_product_retail_63'),
                },
              ]}
            />
          </>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Retail
