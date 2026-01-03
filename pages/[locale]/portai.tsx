// 营销系统
import ImageIcon from '@/components/image-icon'
import { Layout } from '@/features/common/page-layout'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo, useRef } from 'react'
import { SEOMeta } from '@/utils/seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Title from '@/features/product/title'
import Box from '@/features/product/Box'
import { ImageAndText } from '@/features/solutions/info-introduce'
import CardSwiper from '@/features/common/card-swiper'
import { PortaiTopBanner } from '@/features/portai/TopBanner'

const product_advantage_img: Record<string, string> = {
  'en': 'https://pub.pbkrs.com/files/202307/wpQUnihfi1t94wFt/portai-table-en.svg',
  'zh-CN': 'https://pub.pbkrs.com/files/202307/CGPSYMsG9vE6RETk/portai-table-cn.svg',
  'zh-HK': 'https://pub.pbkrs.com/files/202307/YJsaFtN8LCkaRSFb/portai-table-hk.svg',
}
export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const PortAI: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'

  const banner_props = useMemo(() => {
    return {
      title: 'PortAI',
      subtitle: i18n.t('pages_locale_product_port_ai_891113'),
      // imgClassName: 'flex flex-row items-center border-box pl-12',
      desc: [i18n.t('pages_locale_product_port_ai_891114'), i18n.t('pages_locale_product_port_ai_891115')],
      img: {
        'en': 'https://assets.lbctrl.com/uploads/0cd583d7-315a-4f4a-99b2-dbfbfd0315e9/portai-en.png',
        'zh-CN': 'https://assets.lbctrl.com/uploads/0dc4246c-53ab-4d09-8cc9-0c144bfbc530/portai-cn.png',
        'zh-HK': 'https://assets.lbctrl.com/uploads/0de904d4-924f-4203-a9b3-fd3203aded2b/portai-hk.png',
      },
    }
  }, [])

  const marketPainPoints = useMemo(() => {
    return [
      {
        img: 'https://pub.pbkrs.com/files/202307/KyhPqkDbbdt4x9an/high-cost.png',
        title: i18n.t('whale-community-006'),
        desc: i18n.t('pages_locale_product_port_ai_891116'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/omS3ouK5RUFPkYGU/weak-competitiveness.png',
        title: i18n.t('whale-community-008'),
        desc: i18n.t('pages_locale_product_port_ai_891117'),
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/nHpWmeRrpFivnGR7/.png',
        title: i18n.t('whale-community-012'),
        desc: i18n.t('pages_locale_product_port_ai_891118'),
      },
    ]
  }, [])

  const advantageList = useMemo(() => {
    return [
      {
        img: 'https://pub.pbkrs.com/files/202307/iWH4QZnXe4TRYnaM/product-desigin-1.png',
        rightImg: 'https://pub.pbkrs.com/files/202307/konaXHRhgiZPEuuV/product-desigin-2.png',
        title: i18n.t('pages_locale_product_port_ai_891119'),
        desc: [
          i18n.t('pages_locale_product_portai_891117'),
          i18n.t('pages_locale_product_portai_891118'),
          i18n.t('pages_locale_product_portai_891119'),
          i18n.t('pages_locale_product_portai_891120'),
        ],
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/oKZwiwD9H6Wm1i2d/out-of-the-box-1.png',
        title: i18n.t('whale-community-024'),
        rightImg: 'https://pub.pbkrs.com/files/202307/SPWJPf5aSKUSvLAP/out-of-the-box-2.png',
        desc: [
          i18n.t('pages_locale_product_port_ai_891124'),
          i18n.t('pages_locale_product_port_ai_891125'),
          i18n.t('pages_locale_product_portai_891121'),
          i18n.t('pages_locale_product_portai_891122'),
        ],
      },
    ]
  }, [])

  const dataSource = useMemo(() => {
    return [
      {
        contentInfo: {
          title: i18n.t('pages_locale_product_port_ai_891127'),
          subTitle: i18n.t('pages_locale_product_portai_891123'),
          titleClassName: '!text-[28px]',
          imgClassName: '!w-[530px]',
          needTalk: false,
          showDot: true,
          tips: i18n.t('pages_locale_product_port_ai_891128'),
          desc: [
            i18n.t('pages_locale_product_portai_891124'),
            i18n.t('pages_locale_product_portai_891125'),
            i18n.t('pages_locale_product_portai_891126'),
          ],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/ae3d6a4b-abde-47ee-bb1a-ba610a9764c1/1-portai-im-en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/2451f75c-0a84-40a2-a0fc-115c6e529337/1-portai-im-cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/b0dd4e67-76ab-4971-97e6-dd9df29949b7/1-portai-im-hk.png',
          },
        },
      },
      {
        contentInfo: {
          title: i18n.t('pages_locale_product_port_ai_891130'),
          titleClassName: '!text-[28px]',
          imgClassName: '!w-[530px]',
          needTalk: false,
          showDot: true,
          tips: i18n.t('pages_locale_product_port_ai_891128'),
          desc: [
            i18n.t('pages_locale_product_portai_891127'),
            i18n.t('pages_locale_product_portai_891128'),
            i18n.t('pages_locale_product_portai_891129'),
          ],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/bbcc742b-580f-4e20-b8b0-6682d9c55258/2en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/e050c533-d82e-400e-8d2a-f210f089ab4d/2cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/bda8507f-e54b-4f44-9ab9-cf9792e302b3/2hk.png',
          },
        },
      },
      {
        contentInfo: {
          title: i18n.t('pages_locale_product_port_ai_891133'),
          subTitle: i18n.t('pages_locale_product_portai_891130'),
          titleClassName: '!text-[28px]',
          imgClassName: '!w-[530px]',
          needTalk: false,
          showDot: true,
          tips: i18n.t('pages_locale_product_port_ai_891128'),
          desc: [i18n.t('pages_locale_product_portai_891131'), i18n.t('pages_locale_product_portai_891132')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/82d8aace-7a07-420f-8527-f3a46722561d/3en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/01f1e9c9-53f5-46ef-b17d-72215e02a790/3cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/9f40a494-7d90-48e5-8eeb-2ff7461a6e66/3hk.png',
          },
        },
      },
      {
        contentInfo: {
          title: i18n.t('pages_locale_product_port_ai_891135'),
          subTitle: i18n.t('pages_locale_product_portai_891133'),
          titleClassName: '!text-[28px]',
          imgClassName: '!w-[530px]',
          needTalk: false,
          showDot: true,
          tips: i18n.t('pages_locale_product_port_ai_891128'),
          desc: [
            i18n.t('pages_locale_product_portai_891134'),
            i18n.t('pages_locale_product_portai_891135'),
            i18n.t('pages_locale_product_portai_891136'),
          ],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/6d9cc7f1-f186-402c-b332-f12aeb81f475/4en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/74de6dba-f611-4f87-a8aa-afc8faebb5a0/4cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/121d7e25-f8ce-4f6c-a918-834e9b0dc9a2/4hk.png',
          },
        },
      },
    ]
  }, [])

  const markeImgTextProps = useMemo(() => {
    return {
      title: i18n.t('pages_locale_product_portai_891137'),
      imgClassName: '!w-[530px]',
      needTalk: false,
      tips: i18n.t('pages_locale_product_portai_891138'),
      desc: [i18n.t('pages_locale_product_portai_891139'), i18n.t('pages_locale_product_portai_891140')],
      img: {
        'en': 'https://assets.lbctrl.com/uploads/a69620d5-621a-415f-b57a-e46f8fdb85c4/portai-cn.svg',
        'zh-CN': 'https://assets.lbctrl.com/uploads/a69620d5-621a-415f-b57a-e46f8fdb85c4/portai-cn.svg',
        'zh-HK': 'https://assets.lbctrl.com/uploads/9f4446cf-cf82-4b72-a775-bbc4caa261cd/portai-hk.svg',
      },
    }
  }, [])

  return (
    <Layout>
      <SEOMeta indexTitle={false} title={seoI18n.t('portai.title')} description={seoI18n.t('portai.description')} />
      <div>
        <PortaiTopBanner {...banner_props}></PortaiTopBanner>
        <div className="pb-10 main-container">
          <div className="flex flex-col gap-3 main-content-width">
            <ImageAndText {...markeImgTextProps} />
            <hr className="mt-10 mb-20 border-border_color" />
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-003')}</div>
              <div className="mb-10 text-4xl font-medium xl:text-4xl">
                {i18n.t('pages_locale_product_port_ai_891137')}
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-between gap-10 md:flex-row md:item-center">
              {marketPainPoints.map((item, index) => {
                return (
                  <div className="w-[100%] sm:w-[30%]" key={index}>
                    <ImageIcon url={item.img} />
                    <div className="mt-3 mb-[10px]  text-xl font-medium">{item.title}</div>
                    <div className="text-base font-normal text-text_color_3">{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <Title
              label={i18n.t('pages_locale_product_port_ai_891138')}
              title={i18n.t('pages_locale_product_port_ai_891139')}
            ></Title>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              {advantageList.map((item, index) => {
                return (
                  <div className="flex-1 p-8 bg-white rounded-lg" key={index}>
                    <div className="flex justify-between">
                      <ImageIcon url={item.img} className="!h-[56px] !w-auto" />
                      <ImageIcon url={item.rightImg} className="!h-[56px] !w-auto" />
                    </div>
                    <div className="mt-8 mb-4 text-xl font-medium">{item.title}</div>
                    <ul className="flex flex-col text-base gap-y-4 text-text_color_3">
                      {item?.desc?.length
                        ? item.desc.map(it => {
                            return (
                              <li className="list-dot" key={it}>
                                {it}
                              </li>
                            )
                          })
                        : null}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div>
              <img src={product_advantage_img[i18n.i18n.language]} className="w-full" alt="" />
            </div>
          </div>
        </div>
        <Box>
          <CardSwiper dataSource={dataSource} effect="fade" autoplaySpeed={4000} />
        </Box>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default PortAI
