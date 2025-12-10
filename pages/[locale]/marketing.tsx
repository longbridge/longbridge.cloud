// 营销系统
import ImageIcon from '@/components/image-icon'
import { Layout } from '@/features/common/page-layout'
import WhaleOfficialFooter from '@/features/whale-official/footer'
import i18nextConfig from '@/next-i18next.config'
import { i18nPaths } from '@/utils/i18n-paths'
import { Carousel } from 'antd'
import React, { useMemo, useRef } from 'react'
import { Block, BlockBetween } from '@/components/block'
import { keepSiblingsHeight } from '@/hooks/use-resize'
import { SEOMeta } from '@/utils/seo'
import { useDebounceEffect, useSize } from 'ahooks'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NewBanner as Banner } from '@/features/product/Banner'
import Title from '@/features/product/title'
import Box from '@/features/product/Box'

export const getStaticPaths = () => ({
  fallback: false,
  paths: i18nPaths(),
})

export const getStaticProps = async (ctx: any) => ({
  props: {
    ...(await serverSideTranslations(ctx?.params?.locale, ['common', 'seo'], i18nextConfig as unknown as any)),
  },
})

const Marketing: React.FC = () => {
  const seoI18n = useTranslation(['seo'])
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  const marketSceneRef = useRef(null)
  const marketSceneSize = useSize(marketSceneRef)

  const CarouselRef = useRef(null)

  useDebounceEffect(
    () => {
      keepSiblingsHeight('.marketing-version-list', 'version-first')
    },
    [marketSceneSize?.width],
    { wait: 300 }
  )

  const marketingBanners = useMemo(
    () => [
      {
        img: 'https://assets.lbctrl.com/uploads/b919d13c-5a71-4e79-aaa0-5c70b0ca9210/Group 427319264.png',
        title: [i18n.t('whale-marketing-049'), i18n.t('whale-marketing-061')],
        tips: i18n.t('whale-marketing-050'),
        data: [
          {
            num: 20,
            tips: i18n.t('whale-marketing-051'),
            unit: '%',
          },
          {
            num: 30,
            tips: i18n.t('whale-marketing-052'),
            unit: '%',
          },
        ],
      },
      {
        img: 'https://assets.lbctrl.com/uploads/93e4695d-6c96-4e67-b024-3168010ad783/Group 427319373.png',
        title: [i18n.t('whale-marketing-053'), i18n.t('whale-marketing-062')],
        tips: i18n.t('whale-marketing-054'),
        data: [
          {
            num: 60,
            tips: i18n.t('whale-marketing-055'),
            unit: '%',
          },
          {
            num: 90,
            tips: i18n.t('whale-marketing-056'),
            unit: '%',
          },
        ],
      },
      {
        img: 'https://assets.lbkrs.com/uploads/e4d22741-ffeb-4111-892a-e78cbeae2cee/7df6ab20faf88c280d688b1d93d0ce3b.png',
        title: [i18n.t('whale-marketing-057'), i18n.t('whale-marketing-063')],
        tips: i18n.t('whale-marketing-058'),
        data: [
          {
            num: 2,
            tips: i18n.t('whale-marketing-059'),
            unit: i18n.t('whale-marketing-060'),
          },
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  function CarouselNext() {
    const carouse = CarouselRef.current as unknown as { next: () => void }
    carouse?.next()
  }

  function CarouselPrev() {
    const carouse = CarouselRef.current as unknown as { prev: () => void }
    carouse?.prev()
  }

  const banner_props = {
    title: i18n.t('whale-marketing-001'),
    desc: [i18n.t('whale-marketing-002')],
    img: {
      'en': 'https://assets.lbctrl.com/uploads/d8571f11-c55d-4f4e-afee-3ce8daf2f606/market-en.png',
      'zh-CN': 'https://assets.lbctrl.com/uploads/ec0dec43-1234-474d-b117-a201ed1db401/market-cn.png',
      'zh-HK': 'https://assets.lbctrl.com/uploads/82124c04-ff1d-4a8f-abe5-9365688b5b59/market-hk.png',
    },
  }

  const benefit_platform_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/49bcf33b-35ec-4b27-899d-229556bd6e59/benefit_platform_en.png',
    'zh-CN': 'https://assets.lbctrl.com/uploads/76321e0d-f4f7-4a42-83b5-8ee8563e54ac/Frame 427319001.png',
    'zh-HK': 'https://assets.lbctrl.com/uploads/76321e0d-f4f7-4a42-83b5-8ee8563e54ac/Frame 427319001.png',
  }

  const pagehub_img: Record<string, string> = {
    'en': 'https://assets.lbctrl.com/uploads/4c1b9963-cb0d-47aa-a829-c8975a0bb589/pagehub_en.png',
    'zh-CN': 'https://assets.lbctrl.com/uploads/a525e048-16ab-4881-84b3-4105fd9e6c95/Group 427319262.png',
    'zh-HK': 'https://assets.lbctrl.com/uploads/a525e048-16ab-4881-84b3-4105fd9e6c95/Group 427319262.png',
  }
  return (
    <Layout>
      <SEOMeta
        indexTitle={false}
        title={seoI18n.t('marketing.title')}
        description={seoI18n.t('marketing.description')}
      />
      <div>
        <Banner {...banner_props}></Banner>
        <div className="py-10 main-container">
          <div className="flex flex-col gap-3 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-003')}</div>
              <div className="mb-10 text-xl font-medium xl:text-4xl">{i18n.t('whale-marketing-004')}</div>
            </div>
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:item-center">
              <div className="w-[270px]">
                <ImageIcon url="https://pub.pbkrs.com/files/202212/txiQsfkn5VULhvmi/cash_plus.png" />
                <div className="mt-3 mb-[10px]  text-xl font-medium">{i18n.t('whale-marketing-005')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-006')}</div>
              </div>
              <div className="w-[270px]">
                <ImageIcon url="https://pub.pbkrs.com/files/202212/i9JLwB1X14rHsAeH/circle_time.png" />
                <div className="mt-3 mb-[10px]  text-xl font-medium">{i18n.t('whale-marketing-007')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-008')}</div>
              </div>
              <div className="w-[270px]">
                <ImageIcon url="https://pub.pbkrs.com/files/202212/queci6LCEx5pyxAx/customer_inquiry.png" />
                <div className="mt-3 mb-[10px]  text-xl font-medium">{i18n.t('whale-marketing-009')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-010')}</div>
              </div>
              <div className="w-[270px]">
                <ImageIcon url="https://pub.pbkrs.com/files/202212/SBeHqd6MygAG4ihj/conversion.png" />
                <div className="mt-3 mb-[10px] text-xl font-medium">{i18n.t('whale-marketing-011')}</div>
                <div className="text-base font-normal text-text_color_3">{i18n.t('whale-marketing-012')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-bg_color_2 main-container">
          <div className="flex flex-col gap-10 main-content-width">
            <div>
              <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-013')}</div>
              <div className="text-xl font-medium xl:text-4xl">{i18n.t('whale-marketing-014')}</div>
            </div>
            <div>
              <img
                src={
                  isEN
                    ? 'https://assets.lbctrl.com/uploads/aef37557-38f1-4c25-b6da-c6ebc973ed5b/Group 427319048.svg'
                    : 'https://assets.lbctrl.com/uploads/longbridge-whale/29c433e9-de02-4232-b1b2-6b57dc18e59c/b1.svg'
                }
                alt=""
              />
            </div>
            <div
              className="flex flex-col overflow-hidden bg-white rounded-lg xl:flex-row marketing-version-list"
              ref={marketSceneRef}
            >
              <div className="flex-1 p-8 left">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] leading-[42px] font-semibold mb-3">{i18n.t('whale-marketing-015')}</div>
                  <div className="text-[16px] leading-[22px] font-normal mb-5">
                    <div>{i18n.t('whale-marketing-016')}</div>
                    <div>{i18n.t('whale-marketing-017')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="mt-5 mb-3 text-xl font-medium">{i18n.t('whale-marketing-018')}</div>
                  <ul className="flex flex-col text-base gap-y-2">
                    <li className="list-dot">{i18n.t('whale-marketing-019')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-020')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-021')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-022')}</li>
                    <li className="list-dot">{i18n.t('whale-marketing-023')}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 p-8 bg-brand_color text-[#fff]">
                <div className="border-b border-dashed version-first border-tag_border_color">
                  <div className="text-[30px] leading-[42px] font-semibold mb-3 flex items-center">
                    {i18n.t('whale-marketing-024')}
                    <span className="text-xl text-white font-semibold px-2 py-[2px] rounded rounded-bl-none bg-[#7947FF] ml-4">
                      HOT
                    </span>
                  </div>
                  <div className="text-[16px] leading-[22px] font-normal mb-5">
                    <div>{i18n.t('whale-marketing-025')}</div>
                    <div>{i18n.t('whale-marketing-026')}</div>
                  </div>
                </div>
                <div className="version-second">
                  <div className="mt-5 mb-3 text-xl font-medium">{i18n.t('whale-marketing-018')}</div>
                  <ul className="flex flex-col text-base gap-y-2">
                    <li className="list-dot white">{i18n.t('whale-marketing-019')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-020')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-027')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-028')}</li>
                    <li className="list-dot white">{i18n.t('whale-marketing-029')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Box>
          <>
            <div className="flex flex-col gap-8">
              <Title label={i18n.t('whale-marketing-030')} title={i18n.t('whale-marketing-031')}></Title>
              <div>
                {/* 权益平台 */}
                <div className="flex flex-col-reverse items-start justify-between lg:flex-row">
                  <div className="flex-1">
                    <img src={benefit_platform_img[i18n.i18n.language]} alt="" className="lg:w-[558px]" />
                  </div>
                  <div>
                    <div className="mb-10 text-[28px] leading-10 font-medium  lg:max-w-[510px]">
                      {i18n.t('whale-marketing-032')}
                    </div>
                    <ul className="flex flex-col gap-6 lg:max-w-[510px]">
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/jrd4MwQBxQbkuoay/copy.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 leading-7 lg:max-w-[438px]">
                          {i18n.t('whale-marketing-033')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/FvC4YU2unWnUkViy/group.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 leading-7 lg:max-w-[438px]">
                          {i18n.t('whale-marketing-034')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/M2m5UXvQmU45xHip/task_center.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 leading-7 lg:max-w-[438px]">
                          {i18n.t('whale-marketing-035')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/jJruyCm1HZzpRQ6u/portfolo_settiongs.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 leading-7 lg:max-w-[438px]">
                          {i18n.t('whale-marketing-036')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="my-10"></hr>
                {/* 活动平台 */}
                <div className="flex flex-col justify-between lg:items-center lg:flex-row">
                  <div className="flex-1">
                    <div className="mb-10 text-[28px] leading-10 font-medium lg:max-w-[510px]">
                      {i18n.t('whale-marketing-037')}
                    </div>
                    <ul className="flex flex-col gap-6 lg:max-w-[510px]">
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/1jphbciCdpEftiBF/treeview.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                          {i18n.t('whale-marketing-038')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/z4whtrr6ABmv5bNv/translate_to_en.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                          {i18n.t('whale-marketing-039')}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <img
                      src="https://assets.lbkrs.com/uploads/abe4e36f-9a52-4378-addc-f0a3a6404800/7d4193aae841563c719a60e1a705d4ef.png"
                      alt=""
                      className="lg:w-[558px]"
                    />
                  </div>
                </div>
                <hr className="my-10"></hr>
                {/* pagehub */}
                <div className="flex flex-col-reverse justify-between lg:items-center lg:flex-row">
                  <div className="flex-1">
                    <img src={pagehub_img[i18n.i18n.language]} alt="" className="lg:w-[558px]" />
                  </div>
                  <div>
                    <div className="mb-10 text-[28px] leading-10 font-medium lg:max-w-[510px]">
                      {i18n.t('whale-marketing-040')}
                    </div>
                    <ul className="flex flex-col gap-6 lg:max-w-[510px]">
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/P6JcUv69nJFnTx3b/list.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                          {i18n.t('whale-marketing-041')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/4zxY387JjpngG9F3/code.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                          {i18n.t('whale-marketing-042')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <ImageIcon
                          url="https://pub.pbkrs.com/files/202212/fU72Gy3aB5WdFU77/translation_EN-CN.png"
                          className="mr-8"
                        />
                        <span className="text-base font-normal text-text_color_3 lg:max-w-[438px] leading-7">
                          {i18n.t('whale-marketing-043')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Box>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 main-container main-content-width">
            <div
              onClick={CarouselNext}
              className="absolute right-0 z-10 hidden transform -translate-y-1/2 cursor-pointer md:block top-1/2"
            >
              <img
                src="https://assets.lbctrl.com/uploads/4b9c7528-e536-4679-8ae1-e399540e5028/Group 427319056.svg"
                alt=""
              />
            </div>
            <div
              onClick={CarouselPrev}
              className="absolute left-0 z-10 hidden transform -translate-y-1/2 cursor-pointer md:block top-1/2"
            >
              <img
                src="https://assets.lbctrl.com/uploads/dc9cb6e2-df38-44e5-9d2a-9f4b6c2c70e3/Group 427319372.svg"
                alt=""
              />
            </div>
          </div>
          <Carousel autoplay effect="fade" className="bg-bg_color_2" ref={CarouselRef}>
            {marketingBanners.map((banner, index) => (
              <Block key={index}>
                <BlockBetween
                  reverse
                  left={<img src={banner.img} alt="" className="mx-auto" />}
                  right={
                    <div>
                      <div>
                        <div className="mb-2 text-base text-brand_color">{i18n.t('whale-marketing-044')}</div>
                        <div className="mb-10">
                          {banner.title?.map(t => (
                            <div className="text-xl font-medium xl:text-4xl" key={t}>
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-base font-normal leading-7 text-text_color_3 lg:w-[480px]">
                        {banner.tips}
                      </div>
                      <div className="flex items-center justify-center pt-10 lg:justify-start">
                        {banner.data.map((d, _i) => (
                          <div
                            className={`${_i !== 0 ? 'border-l border-dashed border-border_color pl-14' : 'pr-14'}`}
                            key={_i}
                          >
                            <div className="text-brand_color">
                              <span className="text-xl font-medium xl:text-4xl">{d.num}</span>
                              {d.unit}
                            </div>
                            <div className="text-base font-normal">{d.tips}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              </Block>
            ))}
          </Carousel>
        </div>
        <WhaleOfficialFooter />
      </div>
    </Layout>
  )
}

export default Marketing
