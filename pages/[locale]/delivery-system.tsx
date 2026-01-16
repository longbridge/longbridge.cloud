// 投放系统
import ImageIcon from '@/components/image-icon'
import { Layout } from '@/features/common/page-layout'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import React, { useMemo, useRef } from 'react'
import { keepSiblingsHeight } from '@/hooks/use-resize'
import { SEOMeta } from '@/utils/seo'
import { useDebounceEffect, useSize } from 'ahooks'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NewBanner as Banner } from '@/features/product/Banner'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const DeliverySystem: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  const marketSceneRef = useRef(null)
  const marketSceneSize = useSize(marketSceneRef)
  /** 数据化运营方案 */
  const marketingList = useMemo(() => {
    return [
      {
        title: i18n.t('whale-delivery-system-006'),
        titleTips: i18n.t('whale-delivery-system-007'),
        question: i18n.t('whale-delivery-system-016'),
        questionList: [
          i18n.t('whale-delivery-system-009'),
          i18n.t('whale-delivery-system-010'),
          i18n.t('whale-delivery-system-011'),
        ],
        resolveTitle: i18n.t('whale-delivery-system-012'),
        resolve: i18n.t('whale-delivery-system-013'),
      },
      {
        title: i18n.t('whale-delivery-system-014'),
        titleTips: i18n.t('whale-delivery-system-015'),
        question: i18n.t('whale-delivery-system-016'),
        questionList: [
          i18n.t('whale-delivery-system-017'),
          i18n.t('whale-delivery-system-018'),
          i18n.t('whale-delivery-system-019'),
        ],
        resolveTitle: i18n.t('whale-delivery-system-020'),
        resolve: i18n.t('whale-delivery-system-021'),
      },
      {
        title: i18n.t('whale-delivery-system-022'),
        titleTips: i18n.t('whale-delivery-system-023'),
        question: i18n.t('whale-delivery-system-016'),
        questionList: [
          i18n.t('whale-delivery-system-025'),
          i18n.t('whale-delivery-system-026'),
          i18n.t('whale-delivery-system-027'),
        ],
        resolveTitle: i18n.t('whale-delivery-system-012'),
        resolve: i18n.t('whale-delivery-system-029'),
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useDebounceEffect(
    () => {
      keepSiblingsHeight('.marketing-scene-plans', 'scene-first')
      keepSiblingsHeight('.marketing-scene-plans', 'scene-second')
      keepSiblingsHeight('.marketing-scene-plans', 'scene-third')

      keepSiblingsHeight('.marketing-scene-version', 'version-first')
      keepSiblingsHeight('.marketing-scene-version', 'version-second')
    },
    [marketSceneSize?.width],
    { wait: 300 }
  )

  const banner_props = {
    title: i18n.t('whale-delivery-system-001'),
    desc: [
      i18n.t('whale-delivery-system-002'),
      i18n.t('whale-delivery-system-002-1'),
      i18n.t('whale-delivery-system-003'),
    ],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/db0b63dc-8cef-493b-a758-a2989db606b4/tou-en.webp',
      'zh-CN': 'https://assets.lbctrl.com/uploads/c87043f4-8351-42f0-abe2-2f469d2c6b68/tou-cn.webp',
      'zh-HK': 'https://assets.lbctrl.com/uploads/d1026b7f-05c5-4a16-91c2-bff91c8794a7/tou-hk.webp',
    },
  }

  const trigger_type_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/c0aef081-380a-46d4-856f-3b7ff3b01c9c/trigger_type_en.svg',
    'zh-CN': 'https://assets.lbctrl.com/uploads/2bc3caca-2a84-45a0-99b3-0b60179d57fc/trigger_type_cn.svg',
    'zh-HK': 'https://assets.lbctrl.com/uploads/2bc3caca-2a84-45a0-99b3-0b60179d57fc/trigger_type_cn.svg',
  }
  return (
    <Layout>
      <SEOMeta
        indexTitle={false}
        title={seoI18n.t('delivery-system.title')}
        description={seoI18n.t('delivery-system.description')}
      />
      <div>
        <Banner {...banner_props}></Banner>
        <div className="py-10 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-delivery-system-004')}</div>
              <div className="text-2xl font-medium xl:text-4xl">{i18n.t('whale-delivery-system-005')}</div>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row marketing-scene-plans" ref={marketSceneRef}>
              {marketingList.map((item, index) => (
                <div className="flex flex-col flex-1 overflow-hidden border rounded-lg border-border_color" key={index}>
                  <div className="flex flex-col scene-first">
                    <div className="text-[22px] p-8 pb-0 font-medium mb-2">{item.title}</div>
                    <div className="flex-1 pb-5 mx-8 text-sm font-normal border-b border-dashed border-tag_border_color text-text_color_2">
                      {item.titleTips}
                    </div>
                  </div>
                  <div className="flex-1 px-8 pb-5 scene-second">
                    <div className="text-base font-medium mt-[30px] mb-[10px]">{item.question}</div>
                    <ul className="flex flex-col gap-y-4">
                      {item.questionList.map((listItem, listIndex) => (
                        <li className="list-dot" key={listIndex}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 py-5 text-white bg-brand_color scene-third">
                    <div className="text-base font-medium mb-[10px]">{item.resolveTitle}</div>
                    <div className="text-sm font-normal">{item.resolve}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src={
                  isEN
                    ? 'https://assets.lbctrl.com/uploads/df08f364-ed9e-4654-a77d-315299ccfce5/Group 427319219.svg'
                    : 'https://assets.lbctrl.com/uploads/da3cbba8-81e1-4b30-a148-facfd1ec5c07/Group 427319219 (1).svg'
                }
                alt=""
              />
            </div>
            <div className="bg-[#fff] flex flex-col lg:flex-row overflow-hidden border border-border_color marketing-scene-version">
              <div className="flex-1 p-10">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] font-semibold mb-2">{i18n.t('whale-delivery-system-036')}</div>
                  <div className="text-base font-normal pb-7 text-text_color_1_supplement">
                    <div>{i18n.t('whale-delivery-system-031')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-delivery-system-032')}</div>
                  <ul className="flex flex-col gap-y-4 ">
                    <li className="list-dot">{i18n.t('whale-delivery-system-076')}</li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-077')}</li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-078')}</li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-079')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 border-l bg-bg_color_2 border-border_color">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] font-semibold mb-2">{i18n.t('whale-delivery-system-042')}</div>
                  <div className="text-base font-normal pb-7 text-text_color_1_supplement">
                    <div>{i18n.t('whale-delivery-system-037')}</div>
                    <div>{i18n.t('whale-delivery-system-080')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-delivery-system-032')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="flex items-center list-dot">
                      {i18n.t('whale-delivery-system-081')}
                      <span className="text-base font-semibold bg-white px-1 py-[2px] mx-2">
                        {i18n.t('whale-delivery-system-036')}
                      </span>
                      {i18n.t('whale-delivery-system-082')}
                    </li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-083')}</li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-084')}</li>
                    <li className="list-dot">{i18n.t('whale-delivery-system-085')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-10 bg-brand_color text-[#fff]">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] font-semibold mb-2 flex items-center">
                    {i18n.t('pages_locale_solutions_securities_market_8783')}
                    <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                      HOT
                    </span>
                  </div>
                  <div className="text-base font-normal pb-7 opacity-80">
                    <div>{i18n.t('whale-delivery-system-043')}</div>
                    <div>{i18n.t('whale-delivery-system-086')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="text-xl font-medium mt-[30px] mb-[10px]">{i18n.t('whale-delivery-system-032')}</div>
                  <ul className="flex flex-col gap-y-4">
                    <li className="flex items-center list-dot white">
                      {i18n.t('whale-delivery-system-081')}
                      <span className="text-base font-semibold bg-[#7947FF] px-1 py-[2px] mx-2">
                        {i18n.t('whale-delivery-system-036')}
                      </span>
                      <span className="text-base font-semibold bg-[#7947FF] px-1 py-[2px] mr-2">
                        {i18n.t('whale-delivery-system-042')}
                      </span>
                      {i18n.t('whale-delivery-system-082')}
                    </li>
                    <li className="list-dot white">{i18n.t('whale-delivery-system-087')}</li>
                    <li className="list-dot white">{i18n.t('whale-delivery-system-088')}</li>
                    <li className="list-dot white">{i18n.t('whale-delivery-system-089')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container">
          <div className="flex flex-col gap-8 main-content-width ">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-delivery-system-048')}</div>
              <div className="text-2xl font-medium xl:text-4xl">{i18n.t('whale-delivery-system-049')}</div>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:gap-36 lg:flex-row">
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-delivery-system-050')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-delivery-system-051')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-delivery-system-052')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-delivery-system-053')}</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-xl font-medium">{i18n.t('whale-delivery-system-054')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-delivery-system-055')}</div>
              </div>
            </div>
            <div>
              <img
                src={
                  isEN
                    ? 'https://assets.lbctrl.com/uploads/53f0c1e6-f4eb-483e-a2f0-fc44ffde55d6/Group 427319377.svg'
                    : 'https://assets.lbctrl.com/uploads/6ae41b4b-bed2-448f-806c-17bd46d9e6ad/pic.svg'
                }
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-delivery-system-056')}</div>
              <div className="text-2xl font-medium xl:text-4xl">{i18n.t('whale-delivery-system-057')}</div>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:items-center lg:flex-row">
              <div className="flex-1">
                <img src={trigger_type_img[i18n.i18n.language]} alt="" className="lg:w-[530px] lg:h-[320px]" />
              </div>
              <div className="flex flex-col flex-1 gap-5 max-w-[580px]">
                <div className="text-2xl lg:text-[28px] font-medium">{i18n.t('whale-delivery-system-058')}</div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-5 ">
                    <div className="text-base font-medium w-[103px] leading-[22px]">
                      {i18n.t('whale-delivery-system-059')}
                    </div>
                    <div className="flex-1 text-base font-normal text-text_color_3 leading-[22px]">
                      {i18n.t('whale-delivery-system-060')}
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ">
                    <div className="text-base font-medium w-[103px] leading-[22px]">
                      {i18n.t('whale-delivery-system-061')}
                    </div>
                    <div className="flex-1 text-base font-normal text-text_color_3 leading-[22px]">
                      {i18n.t('whale-delivery-system-062')}
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ">
                    <div className="text-base font-medium w-[103px] leading-[22px]">
                      {i18n.t('whale-delivery-system-063')}
                    </div>
                    <div className="flex-1 text-base font-normal text-text_color_3 leading-[22px]">
                      {i18n.t('whale-delivery-system-064')}
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ">
                    <div className="text-base font-medium w-[103px] leading-[22px]">
                      {i18n.t('whale-delivery-system-065')}
                    </div>
                    <div className="flex-1 text-base font-normal text-text_color_3 leading-[22px]">
                      {i18n.t('whale-delivery-system-066')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3 text-sm text-brand_color">{i18n.t('whale-delivery-system-067')}</div>
              <div className="p-8 rounded-lg bg-bg_color_2">
                <div className="flex flex-col justify-between gap-3 xl:flex-row">
                  <div className="flex flex-col justify-between flex-1 w-full gap-12 md:flex-row">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.pbkrs.com/files/202212/zFeewQW7ZHsHffbz/circle_time.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-delivery-system-068')}</div>
                      <div className="text-base font-normal text-text_color_3">
                        {i18n.t('whale-delivery-system-069')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.pbkrs.com/files/202212/3P85SNLi9ddXX921/me.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-delivery-system-070')}</div>
                      <div className="text-base font-normal text-text_color_3">
                        {i18n.t('whale-delivery-system-071')}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1 w-full gap-12 md:flex-row">
                    <div className="flex-1">
                      <ImageIcon url="https://pub.pbkrs.com/files/202212/qYTkUnDVQamgWQVm/position.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-delivery-system-072')}</div>
                      <div className="text-base font-normal text-text_color_3">
                        {i18n.t('whale-delivery-system-073')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <ImageIcon url="https://pub.pbkrs.com/files/202212/bRjNqPJ7wb6faVwb/aim.png" />
                      <div className="my-3 text-xl font-medium">{i18n.t('whale-delivery-system-074')}</div>
                      <div className="text-base font-normal text-text_color_3">
                        {i18n.t('whale-delivery-system-075')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default DeliverySystem
