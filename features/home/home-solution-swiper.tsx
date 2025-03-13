import Box from '@/features/product/Box'
import Title from '@/features/product/title'
import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Tabs } from 'antd'
import { ContactUsBorder } from '../talk-to-us'
import { ImageAndText } from '../solutions/info-introduce'
import { useHover, useInterval } from 'ahooks'
import classNames from 'classnames'

interface HomeSolutionSwiperProps {
  className?: string
  showLabel?: boolean
  title?: string
}

const HomeSolutionSwiper = ({ className, showLabel = true, title }: HomeSolutionSwiperProps) => {
  const i18n = useTranslation('common')
  const dataSource = useMemo(() => {
    return [
      {
        contentInfo: {
          title: i18n.t('features_header_index_4'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('features_home_home_solution_swiper_891113')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/433cd5a0-1c29-485b-b0f5-83eeffa7826e/index-app-en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/f39c82d2-7399-4cd8-8068-b32fe3995f16/index-app-cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/60a2d7b5-21df-4a30-9d4a-96649ee7afdb/index-app-hk.png',
          },
          localLink: '/solutions/app-plus',
        },
        title: i18n.t('features_header_index_4_1'),
      },
      {
        contentInfo: {
          title: i18n.t('pages_locale_solutions_securities_market_8769'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('features_home_home_solution_swiper_891152')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/e9516d56-9061-41af-8e5c-472ac3d542c0/counter-solution-en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/dc64d811-35ef-4dbf-bc0d-5e63b1d0be1a/counter-solution-cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/9b132d84-4dc5-49f1-8026-53b461d4fdf7/counter-solution-hk.png',
          },
          localLink: '/solutions/securities-market',
        },
        title: i18n.t('pages_locale_solutions_virtual_assets_891133'),
      },
      {
        contentInfo: {
          title: i18n.t('pages_virtual_assets37'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('pages_us_stock2')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/7731d8d7-f128-48d8-b611-1c61e7756241/option_en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/ccf3862a-6e06-4a48-94e0-c27fc200c23b/option_cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/1c0d69d2-8caf-40ea-83d6-03c57c3aa468/option_hk.png',
          },
          localLink: '/solutions/us-stock',
        },
        title: i18n.t('pages_virtual_assets37_1'),
      },
      {
        contentInfo: {
          title: i18n.t('pages_virtual_assets36'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('pages_wm1')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/259f1573-bfca-4e61-b056-3b39a10a45b6/wm.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/259f1573-bfca-4e61-b056-3b39a10a45b6/wm.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/259f1573-bfca-4e61-b056-3b39a10a45b6/wm.png',
          },
          localLink: '/solutions/wealth-management',
        },
        title: i18n.t('pages_virtual_assets36_1'),
      },
      {
        contentInfo: {
          title: i18n.t('features_home_home_solution_swiper_891156'),
          titleClassName: '!text-[28px]',
          imgClassName: '!sm:w-[530px]',
          desc: [i18n.t('pages_virtual_assets2')],
          img: {
            'en': 'https://assets.lbctrl.com/uploads/a968e994-5361-4f5f-a5d5-b530358a877c/index-vm-en.png',
            'zh-CN': 'https://assets.lbctrl.com/uploads/b708ac39-814b-422e-9dbe-28c2ea702b25/index-vm-cn.png',
            'zh-HK': 'https://assets.lbctrl.com/uploads/a7160398-c431-42e8-b122-edefb33a96e1/index-vm-hk.png',
          },
          localLink: '/solutions/virtual-assets',
        },
        title: i18n.t('pages_locale_solutions_virtual_assets_891141'),
      },
    ]
  }, [])
  const [activeIndex, setActiveIndex] = useState(0)
  const onTabChange = (key: string) => {
    setActiveIndex(dataSource.findIndex(item => item.title === key))
  }
  const domRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(domRef)
  useInterval(() => {
    if (isHovering) {
      return
    }
    setActiveIndex(activeIndex === dataSource.length - 1 ? 0 : activeIndex + 1)
  }, 5000)

  return (
    <Box className={classNames('lg:pt-20 !pb-10 bg-bg_color_2 cloud-tabs-wrapper tabs-wrapper-only-header', className)}>
      <div ref={domRef}>
        <Title
          className="mb-10"
          label={showLabel ? i18n.t('whale-delivery-system-028') : undefined}
          title={title ?? i18n.t('pages_locale_index_891113')}
        ></Title>
        <Tabs
          activeKey={dataSource[activeIndex].title}
          onChange={onTabChange}
          items={dataSource.map((tab, index) => {
            return {
              label: tab.title,
              key: tab.title,
              children: (
                <div key={index}>
                  <ImageAndText
                    {...tab.contentInfo}
                    needContact={
                      <div className="mt-10">
                        <ContactUsBorder />
                      </div>
                    }
                  />
                </div>
              ),
            }
          })}
        ></Tabs>
      </div>
    </Box>
  )
}

export default HomeSolutionSwiper
