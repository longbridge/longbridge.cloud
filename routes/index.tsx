import { Fragment } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/[locale]/index'
import MarketPage from '@/pages/[locale]/market'
import BssPage from '@/pages/[locale]/bss'
import CrmPage from '@/pages/[locale]/crm'
import TradingPage from '@/pages/[locale]/trading'
// import SolutionsPage from '@/pages/[locale]/solutions'
import AboutPage from '@/pages/[locale]/about'
// import AppSolutionPage from '@/pages/[locale]/solutions/app'
import LivePage from '@/pages/[locale]/live'
import IntroducingBroker from '@/pages/[locale]/solutions/introducing-broker'
import Longport from '@/pages/[locale]/solutions/longport'
import WhiteLabel from '@/pages/[locale]/solutions/white-label'
import AppPlus from '@/pages/[locale]/solutions/app-plus'
import SecuritiesMarket from '@/pages/[locale]/solutions/securities-market'
import VirtualAssets from '@/pages/[locale]/solutions/virtual-assets'
import WhaleReports from '@/pages/[locale]/reports'
import BackOffice from '@/pages/[locale]/backoffice'
import Marketing from '@/pages/[locale]/marketing'
import WhaleLongport from '@/pages/[locale]/longport'
import DeliverySystem from '@/pages/[locale]/delivery-system'
import Retail from '@/pages/[locale]/retail'
import FrontDesk from '@/pages/[locale]/front-desk'
import VirtualAssetTradingSystem from '@/pages/[locale]/virtual-asset-trading-system'
import PortAI from '@/pages/[locale]/portai'
import Account from '@/pages/[locale]/account'
import Jobs from '@/pages/[locale]/jobs'
import Brokerages from '@/pages/[locale]/solutions/brokerages'
import SmallBrokeragesPage from '@/pages/[locale]/solutions/small-brokerages'
import UsStock from '@/pages/[locale]/solutions/us-stock'
import SolutionWealthManagement from '@/pages/[locale]/solutions/wealth-management'
import WealthManagement from '@/pages/[locale]/wealth-management'
import WhaleJourney from '@/pages/[locale]/whale-journey'
import WhaleAmbassador from '@/pages/[locale]/whale-ambassador'
import WhaleAmbassadorInvited from '@/pages/[locale]/whale-ambassador/invited'
import WhaleAmbassadorInvitedSuccess from '@/pages/[locale]/whale-ambassador/invited-success'
import WhaleAmbassadorPoster from '@/pages/[locale]/whale-ambassador/poster'
import WhaleAmbassadorForm from '@/pages/[locale]/whale-ambassador/form'

export const RouteList = ({ pageProps }: { pageProps: any }) => {
  return (
    <Routes>
      {['', 'zh-CN', 'en', 'zh-HK'].map((locale: string, index) => {
        return (
          <Fragment key={`${locale}${index}`}>
            <Route path={`/${locale}`} element={<Outlet />}>
              <Route index element={<IndexPage {...pageProps} />} />
              <Route path="market" element={<MarketPage {...pageProps} />} />
              <Route path="bss" element={<BssPage {...pageProps} />} />
              <Route path="trading" element={<TradingPage {...pageProps} />} />
              <Route path="crm" element={<CrmPage {...pageProps} />} />
              {/* <Route path="solutions" element={<SolutionsPage {...pageProps} />} /> */}
              {/* <Route path="solutions/app" element={<AppSolutionPage {...pageProps} />} /> */}
              <Route path="solutions" element={<IntroducingBroker {...pageProps} />} />
              <Route path="solutions/introducing-broker" element={<IntroducingBroker {...pageProps} />} />
              <Route path="solutions/longport" element={<Longport {...pageProps} />} />
              <Route path="solutions/white-label" element={<WhiteLabel {...pageProps} />} />
              <Route path="solutions/app-plus" element={<AppPlus {...pageProps} />} />
              <Route path="solutions/securities-market" element={<SecuritiesMarket {...pageProps} />} />
              <Route path="solutions/virtual-assets" element={<VirtualAssets {...pageProps} />} />
              <Route path="about" element={<AboutPage {...pageProps} />} />
              <Route path="live" element={<LivePage {...pageProps} />} />
              <Route path="whale-reports" element={<WhaleReports {...pageProps} />} />
              <Route path="reports" element={<WhaleReports {...pageProps} />} />
              <Route path="backoffice" element={<BackOffice {...pageProps} />} />
              <Route path="marketing" element={<Marketing {...pageProps} />} />
              <Route path="longport" element={<WhaleLongport {...pageProps} />} />
              <Route path="portai" element={<PortAI {...pageProps} />} />
              <Route path="delivery-system" element={<DeliverySystem {...pageProps} />} />
              <Route path="retail" element={<Retail {...pageProps} />} />
              <Route path="front-desk" element={<FrontDesk {...pageProps} />} />
              <Route path="virtual-asset-trading-system" element={<VirtualAssetTradingSystem {...pageProps} />} />
              <Route path="account" element={<Account {...pageProps} />} />
              <Route path="solutions/brokerages" element={<Brokerages {...pageProps} />} />
              <Route path="solutions/small-brokerages" element={<SmallBrokeragesPage {...pageProps} />} />
              <Route path="solutions/us-stock" element={<UsStock {...pageProps} />} />
              <Route path="solutions/wealth-management" element={<SolutionWealthManagement {...pageProps} />} />
              <Route path="wealth-management" element={<WealthManagement {...pageProps} />} />
              <Route path="jobs" element={<Jobs {...pageProps} />} />
              <Route path="whale-journey" element={<WhaleJourney {...pageProps} />} />
              <Route path="whale-ambassador" element={<WhaleAmbassador {...pageProps} />} />
              <Route path="whale-ambassador/poster" element={<WhaleAmbassadorPoster {...pageProps} />} />
              <Route path="whale-ambassador/invited" element={<WhaleAmbassadorInvited {...pageProps} />} />
              <Route
                path="whale-ambassador/invited-success"
                element={<WhaleAmbassadorInvitedSuccess {...pageProps} />}
              />
              <Route path="whale-ambassador/form" element={<WhaleAmbassadorForm {...pageProps} />} />
            </Route>
          </Fragment>
        )
      })}
    </Routes>
  )
}

export default RouteList
