import { useMemo } from 'react'
import RouteList from '@/routes'
import { getBasenameLocale, getLocaleHref, isServer } from '@/utils/common'
import { useMount } from 'ahooks'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { ToastContainer } from 'react-toastify'
import 'antd/dist/antd.variable.min.css'
import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import zhHK from 'antd/lib/locale/zh_HK'
import 'moment/locale/zh-cn'
import 'moment/locale/zh-hk'

import Script from 'next/script'
import { useRouter } from 'next/router'

const server_url =
  process.env.PROXY === 'prod'
    ? 'https://event-tracking.lbkrs.com/sa?project=whale_pro'
    : 'https://event-forward.longbridge.xyz/sa?project=whale_test'

const AppWithTranslation = appWithTranslation(({ Component, pageProps, router }: AppProps) => {
  const nextRouter = (
    <StaticRouter location={router.asPath}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </StaticRouter>
  )
  const feRouter = (
    <BrowserRouter>
      <RouteList pageProps={pageProps} />
    </BrowserRouter>
  )

  const locale = useMemo(() => {
    const pathLocale = getBasenameLocale()
    const locale_map: any = {
      'zh': 'zh-CN',
      'zh-CN': 'zh-CN',
      'en': 'en',
      'en-US': 'en',
      'zh-HK': 'zh-HK',
      'zh-TW': 'zh-HK',
    }
    return locale_map[pathLocale] || 'zh-HK'
  }, [])

  const antdLocale = useMemo(() => {
    const locale_map: any = {
      'zh-CN': zhCN,
      'zh-HK': zhHK,
      'en': enUS,
    }
    return locale_map[locale] || zhHK
  }, [locale])

  useMount(() => {
    const pathLocale = getBasenameLocale()
    moment.locale(locale)
    const html = document.querySelector('html')
    if (html) {
      html.setAttribute('lang', locale)
      html.classList.add(locale)
    }
    if (pathLocale) {
      // if (pathLocale !== cookieLocale) {
      //   Cookies.set('locale', pathLocale, {
      //     domain: getRootDomain(location.hostname),
      //     expires: 7,
      //   })
      // }
      return
    }
    if (locale) {
      location.href = getLocaleHref(pathLocale, locale)
    }
  })

  useMount(() => {
    const bindEventListener = function (type: string) {
      const historyEvent = (history as any)[type]
      return function (this: any) {
        const e: any = new Event(type)
        // eslint-disable-next-line prefer-rest-params
        e.arguments = arguments
        window.dispatchEvent(e)
        // eslint-disable-next-line prefer-rest-params
        const newEvent = historyEvent.apply(this, arguments)
        return newEvent
      }
    }
    history.pushState = bindEventListener('pushState')
    history.replaceState = bindEventListener('replaceState')
    const resetTop = () => {
      window.document.scrollingElement!.scrollTop = 0
    }
    window.addEventListener('popstate', resetTop)
    window.addEventListener('pushState', resetTop)
    window.addEventListener('replaceState', resetTop)
  })

  return (
    <ConfigProvider locale={antdLocale}>
      <div className="app" key={locale}>
        <Head>
          <script src={'https://assets.lbctrl.com/pkg/sensorsdata/1.21.13.min.js'} defer />
          <link rel="icon" type="image/x-icon" href="https://pub.pbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png" />
        </Head>
        <Script
          id="sensors-inject"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            const sensors = window['sensorsDataAnalytic201505'];
            sensors.init({
              server_url: '${server_url}',
              heatmap:{scroll_notice_map:'not_collect'},
              is_track_single_page:true,
              use_client_time:true,
              send_type:'beacon',
              show_log:false,
            });
            sensors.quick('autoTrack');
            window['sensors'] = sensors;
          `,
          }}
        ></Script>
        <Script id="google-source" src="https://www.googletagmanager.com/gtag/js?id=G-K537QXZ7MV" async></Script>
        <Script
          id="google-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google tag (gtag.js) -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-K537QXZ7MV');
          `,
          }}
        ></Script>
        <ToastContainer autoClose={1800} position="top-center" theme="colored" hideProgressBar />
        {isServer() ? nextRouter : feRouter}
      </div>
    </ConfigProvider>
  )
})

export default function LBApp(props: any) {
  const router = useRouter()

  // 自动重定向逻辑
  if (router.pathname === '/' && typeof window !== 'undefined') {
    router.replace('/[lang]', `/${router.locale || 'zh-HK'}`)
  }
  props.router.locale = props.router.query.locale
  return <AppWithTranslation {...props} />
}
