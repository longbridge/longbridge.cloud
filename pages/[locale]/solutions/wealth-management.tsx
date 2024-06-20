import React, { useMemo } from 'react'
import classNames from 'classnames'
import { TalkToUs, ContactUs, ContactUsBlack } from '@/features/talk-to-us'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import Banner from '@/features/product/Banner'
import { ImageAndText } from '@/features/solutions/info-introduce'
import Table from '@/components/table'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import TextPictureSecondary, { ITextPictureSecondary } from '@/features/common/text-picture-secondary'
import PictureTextBorderCard from '@/features/common/picture-text-bordercard'
import { SolutionBanner } from '@/features/solutions/brokerages'
import { Combine, ProductsTable } from '@/features/solutions/combine'
import { HorizontalAdvantage, IAdvantageProps } from '@/features/product/Advantage'
import DotList from '@/components/dot-list'
import { WealthManagementTabs } from '@/features/solutions/wealth-management'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})
export const getStaticProps = async (ctx: any) => ({
  props: {
    // @ts-ignore
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig)),
  },
})

const contentImgMap: any = {
  left: {
    'en': 'https://assets.lbkrs.com/uploads/07f79a53-6a99-4a7e-9704-f465af105ac5/va_trade_2_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/8d35f52e-5d73-4b47-b74a-0e41f1e6775b/va_trade_2_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/d93a0fac-0f4e-4e0b-8b82-c01ffdc46ddb/va_trade_2_hk.png',
  },
  right: {
    'en': 'https://assets.lbkrs.com/uploads/c8bad460-8818-4c32-995f-afc4ac3353eb/va_account_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/8fbdc86b-65e4-4366-98b8-5d6c7b6166ea/va_account_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/d5a5c257-c358-411a-b1bb-98ef1396ff1f/va_account_hk.png',
  },
}

const tradeServiceImgMap: any = {
  architecture: {
    'en': 'https://assets.lbkrs.com/uploads/b700c9ea-7862-446e-bc15-46ab08ce5b48/us_stock_architecture_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/a73b7d34-7661-4bd4-a848-521198c56003/us_stock_architecture_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/c3141781-ae69-44a7-89f5-732df94b9993/us_stock_architecture_hk.png',
  },
  backend: {
    'en': 'https://assets.lbkrs.com/uploads/f45ba9d3-ef22-4d24-bf02-b7c978c00bd1/backend_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/4c9c9e5c-9ca4-459b-8592-41a1a0d6b5ee/backend_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/6a5861b2-ba8d-4502-bd60-8b1434acaf9c/backend_hk.png',
  },
  trading_desk: {
    'en': 'https://assets.lbkrs.com/uploads/248eb5c7-5374-429c-9bc2-66a47195725b/trading_desk_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/1b2a0b29-5300-4082-8462-773b558af5a2/trading_desk_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/f8826e4e-017c-4c61-aa6b-9175d6e6c89a/trading_desk_hk.png',
  },
  overnight: {
    'en': 'https://assets.lbkrs.com/uploads/bd932422-ab1b-47a7-bdb0-7f034d1ce272/overnight_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/e1916628-3df7-4c95-b80d-3ad53b1f9ed6/overnight_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/93711dad-2564-4658-ae48-b4755ba224b7/overnight_hk.png',
  },
  order: {
    'en': 'https://assets.lbkrs.com/uploads/c09cec79-b633-46f6-915c-87868a0b33ec/order_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/086a72d9-2cf7-4b53-900a-093126125f5e/order_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/ceafbb0b-3d18-4feb-83e2-210c6c7e9d9b/order_hk.png',
  },
  option: {
    'en': 'https://assets.lbkrs.com/uploads/220770d6-6f5a-4e92-b7b0-dc390b1114cd/option_en.png',
    'zh-CN': 'https://assets.lbkrs.com/uploads/f0d13f53-6710-43a1-a4e7-261eb6847528/option_cn.png',
    'zh-HK': 'https://assets.lbkrs.com/uploads/2de7370b-79e3-4540-aa23-49bdcc520a4a/option_hk.png',
  },
}

function SolutionList({ list }: { list: string[] }) {
  return (
    <div>
      {list.map(item => {
        return (
          <div className="flex text-base leading-7 " key={item}>
            <div className="w-0.5 h-0.5 translate-y-3 rounded-full bg-text_color_1_supplement mr-2"></div>
            <div>{item}</div>
          </div>
        )
      })}
    </div>
  )
}

const WealthManagement = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const advantages: IAdvantageProps['data'] = [
    {
      icon: 'https://assets.lbkrs.com/uploads/90fb4d46-a837-476d-a1ab-0ad641bee500/solution_us_stock_advantage_1.png',
      title: i18n.t('pages_us_stock4'),
      list: [i18n.t('pages_us_stock5'), i18n.t('pages_us_stock6')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/e10e3eda-7327-47c0-82af-d7675fab8290/icon_3_gray.png',
      title: i18n.t('pages_us_stock7'),
      list: [i18n.t('pages_us_stock8'), i18n.t('pages_us_stock9'), i18n.t('trading_functions_007')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/6fd446d2-5beb-4c4f-be40-6e25bf773589/solution_us_stock_advantage_3.png',
      title: i18n.t('pages_us_stock11'),
      list: [i18n.t('pages_us_stock12'), i18n.t('pages_us_stock13')],
    },
    {
      icon: 'https://assets.lbkrs.com/uploads/957a3767-9b92-41ac-acf2-97bc5080be0b/solution_us_stock_advantage_4.png',
      title: i18n.t('pages_us_stock14'),
      list: [i18n.t('pages_us_stock15'), i18n.t('pages_us_stock16')],
    },
  ]
  const solutions = [
    {
      icon: 'https://assets.lbkrs.com/uploads/ace54dbf-d4d3-4530-9ae6-c1aeac861c4c/solution_us_stock_advantage_5.png',
      title: i18n.t('pages_us_stock19'),
      problems: [i18n.t('pages_us_stock21'), i18n.t('pages_us_stock22'), i18n.t('pages_us_stock23')],
      solutions: [i18n.t('pages_us_stock21'), i18n.t('pages_us_stock22'), i18n.t('pages_us_stock23')],
    },
  ]
  const tradeServiceList = [
    {
      img: 'https://assets.lbkrs.com/uploads/974fd067-5e4a-497d-b4bd-c85ef3b118f0/stock.png',
      desc: i18n.t('pages_us_stock37'),
      button: undefined,
      imgWidth: 530,
      className: '',
      list: [
        {
          text: i18n.t('pages_us_stock38'),
        },
        {
          text: i18n.t('pages_us_stock39'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.order[i18n.i18n.language],
      desc: i18n.t('pages_us_stock40'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('pages_us_stock41'),
        },
        {
          text: i18n.t('pages_us_stock42'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.option[i18n.i18n.language],
      desc: i18n.t('pages_locale_solutions_securities_market_8791'),
      button: undefined,
      imgWidth: 530,
      list: [
        {
          text: i18n.t('pages_us_stock44'),
        },
        {
          text: i18n.t('pages_us_stock45'),
        },
        {
          text: i18n.t('pages_us_stock46'),
        },
        {
          text: i18n.t('pages_us_stock47'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.overnight[i18n.i18n.language],
      desc: i18n.t('pages_us_stock48'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('pages_us_stock49'),
        },
        {
          text: i18n.t('pages_us_stock50'),
        },
        {
          text: i18n.t('pages_us_stock51'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.trading_desk[i18n.i18n.language],
      desc: i18n.t('pages_us_stock52'),
      button: undefined,
      imgWidth: 530,
      list: [
        {
          text: i18n.t('pages_us_stock53'),
        },
        {
          text: i18n.t('pages_us_stock54'),
        },
        {
          text: i18n.t('pages_us_stock55'),
        },
        {
          text: i18n.t('pages_us_stock56'),
        },
      ],
    },
    {
      img: tradeServiceImgMap.backend[i18n.i18n.language],
      desc: i18n.t('pages_us_stock57'),
      button: undefined,
      imgWidth: 530,
      className: 'lg:flex-row-reverse',
      list: [
        {
          text: i18n.t('whale-backoffice-024'),
        },
        {
          text: i18n.t('pages_us_stock59'),
        },
        {
          text: i18n.t('pages_us_stock60'),
        },
      ],
    },
  ]
  const f = '客户对线上化服务需求强劲，\n金融产品缺乏网上一体化服务'
  const dotNode = <div className="w-0.5 h-0.5 translate-y-3 rounded-full bg-text_color_1_supplement mr-2"></div>

  return (
    <Layout>
      <SEOMeta title={seoI18n.t('us-stock.title')} description={seoI18n.t('us-stock.description')} />
      <div>
        <SolutionBanner
          label={i18n.t('pages_us_stock0')}
          title={i18n.t('pages_us_stock1')}
          secondLineTitle=""
          desc={i18n.t('pages_us_stock2')}
        />
        <Box className="lg:py-20 ">
          <div className="lg:flex justify-between items-center">
            <div className="mb-10 lg:mb-0 lg:flex-1 whitespace-pre-line">
              <Title
                className="mb-5"
                title={f}
                desc="越来越多的客户倾向于使用网上金融服务，但目前市场上许多关键的线上服务需求尚未得到充分满足。"
              />
              <div className="text-xs text-text_color_2">* 数据来源：毕马威《2023 年香港私人财富管理报告》</div>
            </div>
            <div className="lg:flex-1 ml-10">收到了副驾驶</div>
          </div>
        </Box>

        <Box className="lg:py-20 bg-bg_color_2">
          <>
            <Title className="mb-10" title={i18n.t('pages_us_stock17')} />
            <div className="grid lg:grid-cols-3 gap-7">
              {solutions.map(solution => {
                return (
                  <div key={solution.title} className=" rounded-lg p-8 bg-front-bg-color-1 ">
                    <img src={solution.icon} className="w-10 h-10 mb-4" alt="" />
                    <div className="whitespace-pre-line font-medium text-xl mb-2">{solution.title}</div>
                    <div></div>
                    <SolutionList list={solution.problems} />
                    <div className="text-brand_color text-base leading-7 font-medium mt-4">{'Whale 如何解决：'}</div>
                    <SolutionList list={solution.solutions} />
                  </div>
                )
              })}
            </div>
          </>
        </Box>
        <Box className="lg:py-20">
          <>
            <WealthManagementTabs />
          </>
        </Box>
        <Box className="bg-bg_color_2 lg:py-20">
          <ProductsTable />
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}
export default WealthManagement
