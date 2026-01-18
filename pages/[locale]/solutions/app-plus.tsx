import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { i18nPaths } from '@/utils/i18n-paths'
import i18nextConfig from '@/next-i18next.config'
import { SEOMeta } from '@/utils/seo'
import { Layout } from '@/features/common/page-layout'
import { NewBanner as Banner } from '@/features/product/Banner'
import PageDivide from '@/features/solutions/page-divide'
import InfoIntroduce, { ImageAndText } from '@/features/solutions/info-introduce'
import Compare from '@/components/compare'
import Table from '@/components/table'
import RightIcon from '@/components/right-icon'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import WhaleOfficialFooter from '@/features/whale-official/footer'

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

const AppPlusPage = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'

  const banner_props = {
    title: i18n.t('features_header_index_4'),
    desc: [i18n.t('pages_locale_solutions_app_plus_8678'), i18n.t('pages_locale_solutions_app_plus_8678-1')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/925d4d7b-79cb-444b-822b-a6d22c6e3125/app-en.png',
      'zh-CN':
        'https://assets.lbkrs.com/uploads/710b3db7-cad0-46d4-b296-c74b1000cbd1/0fa581c14115d1da2a4c7633fb35a87a.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/2d3668e4-34ad-442c-90c5-b895249c7f6e/app-hk.png',
    },
  }
  const content_banner_props = {
    title: i18n.t('pages_locale_solutions_app_plus_8679'),
    desc: [i18n.t('pages_locale_solutions_app_plus_8680')],
    img: {
      'en': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-CN': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
      'zh-HK': 'https://assets.lbkrs.com/uploads/b5b87228-6917-455e-b44e-af25af5fed8f/1.png',
    },
    localLink: '/longport',
  }
  const content_banner_props_2 = {
    title: i18n.t('pages_locale_solutions_app_plus_8681'),
    desc: [i18n.t('pages_locale_solutions_app_plus_8682')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/36406d45-4586-49e2-92a8-31fce7d6618e/2.png',
    },
    localLink: '/marketing',
  }
  const content_banner_props_3 = {
    title: i18n.t('pages_locale_solutions_app_plus_8683'),
    desc: [i18n.t('pages_locale_solutions_app_plus_8684')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/df49d156-cbbe-4489-b77a-585ba7d763fe/content-img-3.png',
    },
    needTalk: false,
  }

  const compareList = [
    // {
    //   title: 'LongPort',
    //   description: i18n.t('pages_locale_solutions_app_plus_8685'),
    //   subTitle: i18n.t('pages_locale_solutions_app_plus_8686'),
    //   subList: [
    //     i18n.t('pages_locale_solutions_app_plus_8687'),
    //     i18n.t('pages_locale_solutions_app_plus_8688'),
    //     i18n.t('pages_locale_solutions_retail_12'),
    //   ],
    // },
    {
      title: 'White Label',
      description: i18n.t('pages_locale_solutions_app_plus_8689'),
      subTitle: i18n.t('pages_locale_solutions_app_plus_8686'),
      subList: [
        i18n.t('pages_locale_solutions_app_plus_8690'),
        i18n.t('pages_locale_solutions_app_plus_8691'),
        i18n.t('pages_locale_solutions_app_plus_8692'),
      ],
    },
  ]

  const table_1 = {
    heads: [
      // { title: 'LongPort', subTitle: i18n.t('pages_locale_solutions_app_plus_8693') },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8694'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8695'),
      //   light: true,
      // },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8696'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8697'),
      //   light: true,
      // },
      {
        title: i18n.t('pages_locale_solutions_app_plus_8698'),
        subTitle: i18n.t('pages_locale_solutions_app_plus_8693'),
        light: true,
      },
    ],
    body: [
      {
        label: i18n.t('features_header_index_retail_terminal'),
        value: [[i18n.t('pages_locale_solutions_app_plus_8699'), true]],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8700'),
        value: [
          [
            i18n.t('pages_locale_solutions_app_plus_8701'),

            <span key="line-1" className="text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8701_2')}
            </span>,
          ],
          [i18n.t('pages_locale_solutions_app_plus_8679'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8702'),
        value: [
          [i18n.t('one-stop.custom-manager.title'), true],
          [i18n.t('pages_locale_solutions_app_plus_8681'), true],
        ],
      },
    ],
    colRatio: isEn ? [15, 25, 15, 15, 15, 15] : [15, 17, 17, 17, 17, 17],
  }
  const table_2 = {
    heads: [
      // { title: 'LongPort', subTitle: i18n.t('pages_locale_solutions_app_plus_8693') },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8694'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8695'),
      //   light: true,
      // },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8696'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8697'),
      //   light: true,
      // },
      {
        title: i18n.t('pages_locale_solutions_app_plus_8698'),
        subTitle: i18n.t('pages_locale_solutions_app_plus_8693'),
        light: true,
      },
    ],
    body: [
      {
        label: i18n.t('features_header_index_retail_terminal'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8703'), true],
          [i18n.t('pages_locale_solutions_app_plus_8704'), true],
          [i18n.t('pages_locale_solutions_app_plus_8705'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8700'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8706'), false],
          [i18n.t('pages_locale_solutions_app_plus_8707'), true],
          [i18n.t('pages_locale_solutions_app_plus_8708'), true],
          [i18n.t('pages_locale_solutions_app_plus_8709'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_891149'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8710'), true],
          [i18n.t('pages_locale_solutions_app_plus_8710_1'), true],
          [i18n.t('pages_locale_solutions_app_plus_8711'), true],
          [i18n.t('pages_locale_solutions_app_plus_8712'), true],
          [i18n.t('pages_locale_solutions_app_plus_8712_1'), true],
          [
            i18n.t('pages_locale_solutions_app_plus_8713'),
            true,
          ],
          [
            i18n.t('pages_locale_solutions_app_plus_8714'),
            <span key="line-4" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8763_2')}
            </span>,
          ],
          [
            <div key="a-shares">
              <div>{i18n.t('pages_locale_solutions_app_plus_8763_3')}</div>
              <div className="mt-1 text-xs text-text_color_2">{i18n.t('pages_locale_solutions_app_plus_8763_4')}</div>
            </div>,
            true,
          ],
        ],
      },
    ],
    colRatio: isEn ? [14, 24, 15.5, 15.5, 15.5, 15.5] : [14, 18, 17, 17, 17, 17],
  }
  const table_3 = {
    heads: [
      // { title: 'LongPort', subTitle: i18n.t('pages_locale_solutions_app_plus_8693') },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8694'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8695'),
      //   light: true,
      // },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8696'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8697'),
      //   light: true,
      // },
      {
        title: i18n.t('pages_locale_solutions_app_plus_8698'),
        subTitle: i18n.t('pages_locale_solutions_app_plus_8693'),
        light: true,
      },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_app_plus_8715'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8716'), true],
          [i18n.t('pages_locale_solutions_app_plus_8717'), true],
          [i18n.t('trading_functions_020'), true],
          [
            i18n.t('pages_locale_solutions_app_plus_8718'),
            <span key="line-1" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8763_2')}
            </span>,
          ],
          [
            i18n.t('pages_locale_solutions_app_plus_8719'),
            <span key="line-1" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8763_2')}
            </span>,
          ],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8720'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8721'), true],
          [i18n.t('pages_locale_solutions_app_plus_8722'), true],
          [i18n.t('pages_locale_solutions_app_plus_8723'), true],
        ],
      },
    ],
    colRatio: isEn ? [14, 24, 15.5, 15.5, 15.5, 15.5] : [14, 18, 17, 17, 17, 17],
  }
  const table_4 = {
    heads: [
      // { title: 'LongPort', subTitle: i18n.t('pages_locale_solutions_app_plus_8693') },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8694'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8695'),
      //   light: true,
      // },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8696'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8697'),
      //   light: true,
      // },
      {
        title: i18n.t('pages_locale_solutions_app_plus_8698'),
        subTitle: i18n.t('pages_locale_solutions_app_plus_8693'),
        light: true,
      },
    ],
    body: [
      {
        label: i18n.t('one-stop.custom-manager.title'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8724'), true],
          [
            <div key="client">
              <div>{i18n.t('pages_locale_solutions_app_plus_8763_5')}</div>
              <div className="mt-1 text-xs text-text_color_2">{i18n.t('pages_locale_solutions_app_plus_8763_6')}</div>
            </div>,
            <span key="line-1" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8763_2')}
            </span>,
          ],
          [i18n.t('pages_locale_solutions_app_plus_8725'), true],
        ],
      },
    ],
    colRatio: isEn ? [14, 24, 15.5, 15.5, 15.5, 15.5] : [14, 18, 17, 17, 17, 17],
  }
  const table_5 = {
    heads: [
      // { title: 'LongPort', subTitle: i18n.t('pages_locale_solutions_app_plus_8693') },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8694'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8695'),
      //   light: true,
      // },
      // {
      //   title: i18n.t('pages_locale_solutions_app_plus_8696'),
      //   subTitle: i18n.t('pages_locale_solutions_app_plus_8697'),
      //   light: true,
      // },
      {
        title: i18n.t('pages_locale_solutions_app_plus_8698'),
        subTitle: i18n.t('pages_locale_solutions_app_plus_8693'),
        light: true,
      },
    ],
    body: [
      {
        label: i18n.t('pages_locale_solutions_app_plus_8726_1'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8726'), true],
          [i18n.t('pages_locale_solutions_app_plus_8727'), true],
          [i18n.t('pages_locale_solutions_app_plus_8728'), true],
          [i18n.t('pages_locale_solutions_app_plus_8729'), true],
          [i18n.t('pages_locale_solutions_app_plus_8730'), true],
          [i18n.t('pages_locale_solutions_app_plus_8731'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8732'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8733_1'), true],
          [i18n.t('pages_locale_solutions_app_plus_8733'), true],
          [i18n.t('pages_locale_solutions_app_plus_8734'), true],
          [i18n.t('pages_locale_solutions_app_plus_8735'), true],
          [i18n.t('pages_locale_solutions_app_plus_8736'), true],
        ],
      },
      {
        label: i18n.t('pages_locale_solutions_app_plus_8763_9_1'),
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8737'), true],
          [i18n.t('pages_locale_solutions_app_plus_8738'), true],
        ],
      },
      {
        label: 'PageHub',
        value: [
          [i18n.t('pages_locale_solutions_app_plus_8739'), true],
          [i18n.t('pages_locale_solutions_app_plus_8740'), true],
          [
            i18n.t('pages_locale_solutions_app_plus_8741'),
            <span key="line-4" className="text-sm text-text_color_1_supplement">
              {i18n.t('pages_locale_solutions_app_plus_8763_2')}
            </span>,
          ],
        ],
      },
    ],
    colRatio: isEn ? [14, 24, 15.5, 15.5, 15.5, 15.5] : [14, 18, 17, 17, 17, 17],
  }
  return (
    <Layout>
      <SEOMeta title={seoI18n.t('solutions-app.title')} description={seoI18n.t('solutions-app.description')} />
      <div>
        <Banner {...banner_props}></Banner>
        <Box>
          <>
            <Title
              label={i18n.t('features_header_index_4')}
              title={i18n.t('pages_locale_solutions_app_plus_8742')}
            ></Title>
            <Compare className="my-10" compareId="app-plus" list={compareList} />
            <Table data={table_1} />
            <div className="flex pt-4 text-text_color_2 gap-x-1">
              <span>*</span>
              <div className="max-w-[780px] text-xs">
                <div className="font-medium">{i18n.t('pages_locale_solutions_app_plus_8763_7')}</div>
              </div>
            </div>
          </>
        </Box>
        <PageDivide
          cover="https://assets.lbctrl.com/uploads/14a70dd4-5460-4fce-9011-8005e18f3127/content-service.png"
          subTitle={i18n.t('pages_locale_solutions_app_plus_8743')}
          title={i18n.t('pages_locale_solutions_app_plus_8700')}
        />
        <Box>
          <>
            <Title title={i18n.t('pages_locale_solutions_app_plus_8701_4')}></Title>
            <InfoIntroduce
              className="my-8"
              data={[
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8744'),
                  description: i18n.t('pages_locale_solutions_app_plus_8745'),
                },
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8746'),
                  description: i18n.t('pages_locale_solutions_app_plus_8747'),
                },
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8748'),
                  description: i18n.t('pages_locale_solutions_app_plus_8749'),
                  className: 'en:xl:-ml-10',
                },
              ]}
            />
            <Table data={table_2} />
            <div className="pt-10">
              <ImageAndText {...content_banner_props} />
            </div>
            <Table data={table_3} />
          </>
        </Box>
        <PageDivide
          cover="https://assets.lbctrl.com/uploads/7e4af769-fe55-44af-a67a-5b9470dba92d/sale-service.png"
          subTitle={i18n.t('pages_locale_solutions_app_plus_8750')}
          title={i18n.t('pages_locale_solutions_app_plus_8702')}
        />
        <Box>
          <>
            <Title title={i18n.t('pages_locale_solutions_app_plus_8763_9')}></Title>
            <InfoIntroduce
              className="my-8"
              data={[
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8751'),
                  description: i18n.t('pages_locale_solutions_app_plus_8752'),
                },
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8753'),
                  description: i18n.t('pages_locale_solutions_app_plus_8754'),
                },
                {
                  title: i18n.t('pages_locale_solutions_app_plus_8725'),
                  description: i18n.t('pages_locale_solutions_app_plus_8755'),
                },
              ]}
            />
            <Table data={table_4} />
            <div className="pt-10">
              <ImageAndText {...content_banner_props_2} />
            </div>
            <Table data={table_5} />
          </>
        </Box>
        <Box className="bg-bg_color_2">
          <>
            <Title
              title={i18n.t('pages_locale_solutions_app_plus_8756')}
              label={i18n.t('pages_locale_solutions_app_plus_8757')}
            ></Title>
            <InfoIntroduce
              className="mt-10"
              descClass="text-sm text-text_color_1_supplement"
              data={[
                {
                  icon: 'https://assets.lbctrl.com/uploads/8a5b1aab-d6e7-4f5a-8460-52e1e1a51494/vote.png',
                  title: i18n.t('pages_locale_solutions_app_plus_8758'),
                  description: i18n.t('pages_locale_solutions_app_plus_8759'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/edce61fc-26a5-4883-8e44-ed962d901c88/delay.png',
                  title: i18n.t('pages_locale_solutions_app_plus_8760'),
                  description: i18n.t('pages_locale_solutions_app_plus_8761'),
                },
                {
                  icon: 'https://assets.lbctrl.com/uploads/45105937-bc35-485f-ba65-e643946d6e63/circle_laugh.png',
                  title: i18n.t('pages_locale_solutions_app_plus_8762'),
                  description: i18n.t('pages_locale_solutions_app_plus_8763'),
                },
              ]}
            />
          </>
        </Box>
        <Box className="lg:py-10">
          <ImageAndText {...content_banner_props_3} />
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}
export default AppPlusPage
