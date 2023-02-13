import RouteList from '@/routes'
import {getBasenameLocale, getLocaleHref, getSystemLanguage, isServer} from '@/utils/common'
import {useMount} from 'ahooks'
import Cookies from 'js-cookie'
import {appWithTranslation} from 'next-i18next'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {BrowserRouter} from 'react-router-dom'
import {StaticRouter} from 'react-router-dom/server'
import {ToastContainer} from 'react-toastify'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import Script from "next/script";

const AppWithTranslation = appWithTranslation(({Component, pageProps, router}: AppProps) => {
  const nextRouter = (
    <StaticRouter location={router.asPath}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </StaticRouter>
  )
  const feRouter = (
    <BrowserRouter>
      <RouteList pageProps={pageProps}/>
    </BrowserRouter>
  )

  useMount(() => {
    const pathLocale = getBasenameLocale()
    const cookieLocale = Cookies.get('locale')
    const locale = getSystemLanguage()

    // Set <html lang="en" />
    document.querySelector('html')?.setAttribute('lang', cookieLocale || locale)

    if (pathLocale) {
      return
    }
    if (!cookieLocale && locale !== 'zh-HK') {
      location.href = getLocaleHref(pathLocale, locale)
    } else if (cookieLocale && cookieLocale !== 'zh-HK') {
      location.href = getLocaleHref(pathLocale, cookieLocale)
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
    <div className="app">
      <Head>
        <script src={'https://static.lbkrs.com/npm/sensorsdata@1.16.10.min.js'} defer/>
        <link rel="icon" type="image/x-icon" href="https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png"/>
      </Head>
      <Script id="sensors-inject" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
            const sensors = window['sensorsDataAnalytic201505'];
            sensors.init({
              server_url: 'https://event-tracking.lbkrs.com/sa?project=whale_pro',
              heatmap:{scroll_notice_map:'not_collect'},
              is_track_single_page:true,
              use_client_time:true,
              send_type:'beacon',
              show_log:false,
            });
            sensors.quick('autoTrack');
            window['sensors'] = sensors;
          `,
      }}>
      </Script>
      <ToastContainer position="top-center" theme="colored" hideProgressBar/>
      {isServer() ? nextRouter : feRouter}
    </div>
  )
})

export default function LBApp(props: any) {
  props.router.locale = props.router.query.locale
  return <AppWithTranslation {...props} />
}
