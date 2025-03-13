import Dropdown from '@/components/dropdown'
import Icon from '@/components/icon'
import { LocaleLink } from '@/components/locale-link'
import { useLocaleNavigate } from '@/hooks/use-locale-navigate'
import { usePurePathname } from '@/hooks/use-pure-pathname'
import { useReports } from '@/hooks/use-reports'
import { getContactFormUrl } from '@/utils/common'
import classNames from 'classnames'
import { FC, MouseEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { LocaleDropdown } from './locale-dropdown'

function useNavs() {
  const [reports] = useReports()

  const i18n = useTranslation('common')
  return useMemo(() => {
    return [
      // {
      //   value: '/',
      //   label: i18n.t('features_header_index_2'),
      //   children: [],
      // },
      {
        value: 'product',
        label: i18n.t('header_nav_001'),
        children: [
          // {
          //   value: '/bss',
          //   label: i18n.t('header_nav_003'),
          // },
          // {
          //   value: '/trading',
          //   label: i18n.t('header_nav_004'),
          // },
          // {
          //   value: '/market',
          //   label: i18n.t('header_nav_002'),
          // },
          // {
          //   value: '/crm',
          //   label: i18n.t('header_nav_005'),
          // },
          {
            value: '/front-desk',
            label: i18n.t('whale-middle-desk-001'),
          },
          {
            value: '/backoffice',
            label: i18n.t('whale-backoffice-001'),
          },
          {
            value: '/longport',
            label: i18n.t('whale-community-001'),
          },
          {
            value: '/portai',
            label: 'PortAI',
          },
          {
            value: '/delivery-system',
            label: i18n.t('whale-delivery-system-001'),
          },
          {
            value: '/marketing',
            label: i18n.t('whale-marketing-001'),
          },
          {
            value: '/retail',
            label: i18n.t('features_header_index_3'),
          },
          {
            value: '/account',
            label: i18n.t('pages_virtual_assets40'),
          },
          {
            value: '/wealth-management',
            label: i18n.t('features_wm_contact_us_index_891189'),
          },
        ],
      },
      {
        value: '/solutions/introducing-broker',
        label: i18n.t('header_nav_006'),
        children: [
          {
            value: '/solutions/app-plus',
            label: i18n.t('features_header_index_4'),
          },
          {
            value: '/solutions/securities-market',
            label: i18n.t('pages_locale_solutions_securities_market_8769'),
          },
          {
            value: '/solutions/virtual-assets',
            label: i18n.t('features_header_index_891113'),
          },
          {
            value: '/solutions/us-stock',
            label: i18n.t('pages_virtual_assets37_1'),
          },
          {
            value: '/solutions/wealth-management',
            label: i18n.t('pages_virtual_assets36_1'),
          },
        ],
      },
      {
        value: '/about',
        suffix: '',
        label: i18n.t('header_nav_007'),
        children: [],
      },
      {
        value: '/whale-reports',
        suffix: '',
        label: i18n.t('header_nav_009'),
        children: [],
      },
      {
        value: '/whale-ambassador',
        suffix: '',
        label: (
          <span className="inline-flex items-center">
            <span>{i18n.t('header_nav_010')}</span>
            <span className="text-[12px] leading-[18px] ml-2  text-[#CA8123] border border-[#FCF2D3] bg-[#FEFAEE] px-1">
              New
            </span>
          </span>
        ),
        children: [],
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reports])
}
const Navs = () => {
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const navs = useNavs()
  const pathname = usePurePathname()
  const navigate = useLocaleNavigate()
  const i18n = useTranslation('common')
  const selectedNav = useMemo(() => {
    return navs.find(nav => nav.value === pathname || nav.children.find(child => child.value === pathname))
  }, [navs, pathname])

  const expandChange = (key: string, e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    if (expandKeys.includes(key)) {
      setExpandKeys(expandKeys.filter(k => k !== key))
    } else {
      setExpandKeys([...expandKeys, key])
    }
  }

  return (
    <>
      <div className={classNames(styles.navs, 'items-center gap-8 lg:gap-14 xl:gap-20 hidden md:flex')}>
        {navs.map(nav => {
          return (
            <div
              key={nav.value}
              className={classNames('nav-item text-[16px] leading-5', {
                'nav-item__selected': nav.value === selectedNav?.value,
              })}
            >
              {nav.children.length > 0 && (
                <Dropdown
                  trigger="hover"
                  onChange={path => navigate(path)}
                  className="nav-item__dropdown"
                  alwaysChildren
                  value={pathname}
                  items={nav.children}
                  renderItem={item => {
                    return (
                      <LocaleLink
                        to={item.value as string}
                        // @ts-ignore
                        rawValue={item.rawValue as boolean}
                        className="hover:text-white"
                      >
                        {item.label}
                      </LocaleLink>
                    )
                  }}
                >
                  <div className="flex items-center">
                    <span>{nav.label}</span>
                    <div
                      className={classNames('text-[8px] ml-1')}
                      style={{
                        transform: `translateY(-${i18n.i18n.language === 'en' ? 1 : 2}px)`,
                      }}
                    >
                      <Icon type="cart-down" />
                    </div>
                  </div>
                </Dropdown>
              )}
              {nav.children.length === 0 && (
                // @ts-ignore
                <LocaleLink className="flex items-center hover:text-brand_color" to={nav.value} rawValue={nav.rawValue}>
                  <span>{nav.label}</span>
                  {nav.suffix && <span className="ml-2">{nav.suffix}</span>}
                </LocaleLink>
              )}
            </div>
          )
        })}
      </div>
      <div className="md:hidden">
        <Dropdown
          trigger="click"
          className="!bg-transparent !text-black"
          alwaysChildren
          value={pathname}
          items={navs}
          renderItem={item => {
            return item?.children?.length ? (
              <div className="flex flex-col">
                <div className="flex items-center" onClick={e => expandChange(String(item.value), e)}>
                  <span>{item.label}</span>
                  <div
                    className={classNames('text-[8px] ml-1')}
                    style={{
                      transform: `translateY(-${i18n.i18n.language === 'en' ? 1 : 2}px)`,
                    }}
                  >
                    <Icon type="cart-down" />
                  </div>
                </div>
                {expandKeys.includes(String(item.value)) && (
                  <div className="flex flex-col xl:pl-2">
                    {item?.children?.map((i: any) => (
                      // @ts-ignore
                      <LocaleLink to={i.value as string} rawValue={i.rawValue} key={i.label} className="py-3">
                        {i.label}
                      </LocaleLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // @ts-ignore
              <LocaleLink to={item.value as string} rawValue={item.rawValue} key={item.label}>
                {item.label}
              </LocaleLink>
            )
          }}
        >
          <img src="https://pub.pbkrs.com/static/offline/202111/oSbQhwMyjvFQzoHQ/menu.svg" alt="" />
        </Dropdown>
      </div>
    </>
  )
}

const Header: FC = () => {
  return (
    <div className={classNames(styles.header, 'flex px-6 xl:px-10 py-4 items-center')}>
      <div className="logo-wrap">
        <LocaleLink className="logo" to="/">
          <Icon type="cloud-logo" className="align-top" />
        </LocaleLink>
      </div>
      <div className="flex-1 main-content-width">
        <Navs />
      </div>
      <div className="w-[73px]">
        <LocaleDropdown />
      </div>
    </div>
  )
}

export default Header
