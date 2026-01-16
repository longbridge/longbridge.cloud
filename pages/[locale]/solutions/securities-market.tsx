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
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import InfoIntroduce, { ImageAndText } from '@/features/solutions/info-introduce'
import Table from '@/components/table'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})
const SecuritiesMarket: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const banner_props = {
    title: i18n.t('pages_locale_solutions_securities_market_8769'),
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8770'),
      i18n.t('pages_locale_solutions_securities_market_8770-1'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/397d2db1-3a6a-4092-bd0b-03dbf6dc7e6e/gui-en.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/dad46b40-d456-44a9-9404-ecb2be03f6ea/gui-cn.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/674592d1-f750-4b9c-8fac-12393d2e2ccc/gui-hk.png',
    },
  }

  const content_banner_props = {
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8771'),
      i18n.t('pages_locale_solutions_securities_market_8772'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/78af0dc4-64af-4ed9-87b7-836c2968aac3/1.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/78af0dc4-64af-4ed9-87b7-836c2968aac3/1.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/78af0dc4-64af-4ed9-87b7-836c2968aac3/1.png',
    },
    localLink: '/front-desk',
  }
  const content_banner_props_2 = {
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8773'),
      i18n.t('pages_locale_solutions_securities_market_8774'),
      i18n.t('pages_locale_solutions_securities_market_8775'),
      i18n.t('pages_locale_solutions_securities_market_8776'),
      i18n.t('pages_locale_solutions_securities_market_8777'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/d2aefe30-2812-4475-92b6-462da5e7c85c/2.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/d2aefe30-2812-4475-92b6-462da5e7c85c/2.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/d2aefe30-2812-4475-92b6-462da5e7c85c/2.png',
    },
    reverse: false,
    localLink: '/front-desk',
  }
  const content_banner_props_3 = {
    desc: [
      i18n.t('pages_locale_solutions_securities_market_8778'),
      i18n.t('pages_locale_solutions_securities_market_8779'),
      i18n.t('pages_locale_solutions_securities_market_8780'),
      i18n.t('pages_locale_solutions_securities_market_8781'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/f259549c-8d6b-4707-9c36-76254d787f15/3.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/f259549c-8d6b-4707-9c36-76254d787f15/3.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/f259549c-8d6b-4707-9c36-76254d787f15/3.png',
    },
    localLink: '/backoffice',
  }

  const table_1 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('pages_locale_solutions_securities_market_8783'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8784'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8785'), true],
          [i18n.t('pages_locale_solutions_securities_market_8786'), true],
          [i18n.t('pages_locale_solutions_securities_market_8787'), true],
          [i18n.t('pages_locale_solutions_securities_market_8788'), true],
          [i18n.t('pages_locale_solutions_securities_market_8789'), true],
          [i18n.t('pages_locale_solutions_securities_market_8790'), true],
          [i18n.t('pages_locale_solutions_securities_market_8791'), true],
          [i18n.t('pages_locale_solutions_securities_market_8792'), true],
          [i18n.t('pages_locale_solutions_securities_market_8793'), true],
          [i18n.t('pages_locale_solutions_securities_market_8794'), true],
          [i18n.t('pages_locale_solutions_securities_market_8795'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8796'),
        value: [
          [
            <div key="hk-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_1')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_2')}
              </div>
            </div>,
            true,
          ],
          [
            <div key="cn-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_3')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_4')}
              </div>
            </div>,
            true,
          ],
          [
            <div key="us-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_5')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_6')}
              </div>
            </div>,
            true,
          ],
          [
            <div key="sg-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_7')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_4')}
              </div>
            </div>,
            true,
          ],
          [
            <div key="long-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_8')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_9')}
              </div>
            </div>,
            true,
          ],
          [
            <div key="long-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_10')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_11')}
              </div>
            </div>,
            true,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8797'), true],
          [i18n.t('pages_locale_solutions_securities_market_8798'), true],
          [
            <div key="long-shares">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_12')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_13')}
              </div>
            </div>,
            true,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8799'),
        value: [[i18n.t('pages_locale_solutions_securities_market_8800'), true]],
      },
    ],
    colRatio: [14, 44, 14, 14, 14],
  }

  const table_2 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('whale-delivery-system-036'), light: true },
      { title: i18n.t('whale-delivery-system-042'), light: true },
      { title: i18n.t('pages_locale_solutions_securities_market_8783'), light: true },
    ],

    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8801'),
        value: [
          [
            <div key="base">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_14')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_15')}
              </div>
            </div>,
            true,
            true,
            true,
          ],
          [
            <div key="special">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_16')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_17')}
              </div>
            </div>,
            true,
            true,
            true,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8802'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8803'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8804'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8805'), true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8806'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8807'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8808'), false, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8809'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8810'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8811'), true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8812'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8813'), true, true, true],
          ['Margin Call', true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8814'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8815'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8816'), true, true, true],
        ],
      },
    ],
    colRatio: [14, 44, 14, 14, 14],
  }
  const table_3 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('whale-delivery-system-036'), light: true },
      { title: i18n.t('whale-delivery-system-042'), light: true },
      { title: i18n.t('pages_locale_solutions_securities_market_8783'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8817'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8818'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8819'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8820'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8821'), false, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8822'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8823'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8824'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8825'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8826'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8827'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8828'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8829'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8830'), false, false, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8831'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8832'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8833'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8834'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8835'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8836'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8837'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8838'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8839'), true, true, true],
          // autocorrect: false
          [
            'eDDA、sDDA',
            false,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_18')}
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_19')}
            </span>,
          ],
          // autocorrect: true
          [
            i18n.t('pages_locale_solutions_securities_market_8840'),
            false,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_20')}
            </span>,
            <span key="line-2" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_securities_market_8910_21')}
            </span>,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8841'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8842'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8843'), false, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8844'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8845'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8846'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8847'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8848'), false, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8849'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8850'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8846'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8847'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8851'), false, true, true],
        ],
      },
      {
        label: i18n.t('src_pages_atm_deposit_add_single_index_8657'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8852'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8853'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8854'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8855'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8856'), true, true, true],
          [
            <div key="base">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_22')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_23')}
              </div>
            </div>,
            true,
            true,
            true,
          ],
          [
            <div key="base">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_24')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_25')}
              </div>
            </div>,
            true,
            true,
            true,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8857'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8858'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8859'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8860'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8861'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8862'), false, false, true],
          [i18n.t('pages_locale_solutions_securities_market_8863'), false, false, true],
        ],
      },
    ],
    colRatio: [14, 44, 14, 14, 14],
  }

  const table_4 = {
    heads: [
      { title: i18n.t('pages_locale_solutions_securities_market_8782') },
      { title: i18n.t('whale-delivery-system-036'), light: true },
      { title: i18n.t('whale-delivery-system-042'), light: true },
      { title: i18n.t('pages_locale_solutions_securities_market_8783'), light: true },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_securities_market_8864'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8865'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8866'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8867'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8868'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8869'), false, true, true],
          [
            <div key="base">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_26')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_27')}
              </div>
            </div>,
            false,
            true,
            true,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8870'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8871'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8872'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8873'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8874'), true, true, true],
          [
            <div key="base">
              <div>{i18n.t('pages_locale_solutions_securities_market_8910_28')}</div>
              <div className="mt-1 text-xs text-text_color_2 lg:max-w-[484px]">
                {i18n.t('pages_locale_solutions_securities_market_8910_29')}
              </div>
            </div>,
            true,
            true,
            true,
          ],
          [i18n.t('pages_locale_solutions_securities_market_8875'), false, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8876'), true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8877'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8878'), true, true, true],
          [i18n.t('crm_page_007'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8879'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8880'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8881'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8882'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8883'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8884'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8885'), false, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8886'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8887'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8888'), true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8889'),
        value: [
          [i18n.t('pages_locale_solutions_securities_market_8890'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8891'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8892'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8893'), true, true, true],
          [i18n.t('pages_locale_solutions_securities_market_8894'), true, true, true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_securities_market_8895'),
        value: [[i18n.t('pages_locale_solutions_securities_market_8896'), true, true, true]],
      },
    ],
    colRatio: [14, 44, 14, 14, 14],
  }

  return (
    <Layout>
      <SEOMeta
        indexTitle={false}
        title={seoI18n.t('securities-market.title')}
        description={seoI18n.t('securities-market.description')}
      />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_securities_market_8897')}
              title={i18n.t('pages_locale_solutions_securities_market_8898')}
            />
            <InfoIntroduce
              className="!items-start my-8"
              descClass="text-sm text-text_color_1_supplement"
              data={[
                {
                  icon: 'https://assets.lbctrl.com/uploads/8ef8a9ee-5f88-4025-b6d0-6585dbd1cc10/browser.png',
                  title: i18n.t('pages_locale_solutions_securities_market_8899'),
                  description: i18n.t('pages_locale_solutions_securities_market_8900'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/02bf51db-ed1b-4201-a67c-7c7fbac8697b/article.png',
                  iconClass: 'w-9 h-auto',
                  title: i18n.t('pages_locale_solutions_securities_market_8901'),
                  description: i18n.t('pages_locale_solutions_securities_market_8902'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/23731609-98d9-4e87-8d9f-ae7d685c2414/check.png',
                  iconClass: 'w-9 h-auto',
                  title: i18n.t('pages_locale_solutions_securities_market_8903'),
                  description: i18n.t('pages_locale_solutions_securities_market_8904'),
                },
              ]}
            />
            <Table data={table_1} thColSpan={1} />
            <div className="flex pt-4 text-text_color_2 gap-x-1">
              <span>*</span>
              <div className="max-w-[780px] text-xs">
                <div className="font-medium">{i18n.t('pages_locale_solutions_securities_market_8910_30')}</div>
              </div>
            </div>
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_securities_market_8905')}
              title={i18n.t('pages_locale_solutions_securities_market_8906')}
            />
            <ImageAndText {...content_banner_props} />
            <Table data={table_2} thColSpan={1} />
          </>
        </Box>
        <Box>
          <>
            <Title
              label={i18n.t('pages_locale_solutions_securities_market_8907')}
              title={i18n.t('pages_locale_solutions_securities_market_8908')}
            />
            <ImageAndText {...content_banner_props_2} />
            <Table data={table_3} thColSpan={1} />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              label={i18n.t('pages_locale_solutions_securities_market_8909')}
              title={i18n.t('pages_locale_solutions_securities_market_8910')}
            />
            <ImageAndText {...content_banner_props_3} />
            <Table data={table_4} thColSpan={1} />
          </>
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default SecuritiesMarket
