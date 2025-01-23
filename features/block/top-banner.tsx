import { Block, BlockBetween, BlockHeader, TopBlock } from '@/components/block'
import DivideDot from '@/components/divide-dot'
import { TalkToUs, ContactUs } from '@/features/talk-to-us'
import { LocaleLink } from '@/components/locale-link'
import Button from '@/components/button'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import { getContactFormUrl } from '@/utils/common'

export const BG_BANNER = 'https://pub.pbkrs.com/files/202207/g1pGdC8PkwxTaqmw/trading_platform.png'
const IMAGE_URL = 'https://pub.pbkrs.com/files/202207/Ggr6CvK2f2jWASHe/Group_427318855.png'

export const BrokerBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('introducing-broker.page-title')}
                desc={i18n.t('top-banner.broker-desc')}
                slogn={i18n.t('top-banner.broker-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.broker-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const LongportBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('longport.page-title')}
                desc={i18n.t('top-banner.longport-desc')}
                slogn={i18n.t('top-banner.longport-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.longport-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const WhiteLabelBanner = ({ img }: { img: string }) => {
  const i18n = useTranslation('common')
  return (
    <TopBlock imageUrl={BG_BANNER}>
      <Block>
        <BlockBetween
          left={
            <>
              <BlockHeader
                title={i18n.t('white-label.page-title')}
                desc={i18n.t('top-banner.white-label-desc')}
                slogn={i18n.t('top-banner.white-label-slogn')}
              />
              <TalkToUs />
            </>
          }
          right={<img src={img || IMAGE_URL} className="mt-5 lg:mt-0" alt={i18n.t('top-banner.white-label-title')} />}
        />
      </Block>
    </TopBlock>
  )
}

export const IndexBanner = () => {
  const i18n = useTranslation('common')
  const isEn = i18n.i18n.language === 'en'
  const bannerMap: any = {
    'en': 'https://pub.pbkrs.com/files/202307/Nk95eVCroahcrRaP/HOME-BANNER-EN.png',
    'zh-CN': 'https://pub.pbkrs.com/files/202307/sJXSzDtouVe9vH3E/HOME-BANNER-CN.png',
    'zh-HK': 'https://pub.pbkrs.com/files/202307/9sSnVNABHuv6VARt/HOME-BANNER-HK.png',
  }
  const whaleLink: any = {
    'en': 'https://longbridge.feishu.cn/share/base/form/shrcnK8sJRAth64pgtY51fhafyd?lang=en',
    'zh-CN': 'https://longbridge.feishu.cn/share/base/form/shrcnnAhb5g9S5xhFdXQnqNwoqc',
    'zh-HK': 'https://longbridge.feishu.cn/share/base/form/shrcnj0fuzuoItVbdd6EBYRkyLg?lang=zh-HK',
  }
  const scImage: any = {
    'en': 'https://assets.lbctrl.com/uploads/66a81151-2e01-42ea-b63c-c014a464cae9/en.png',
    'zh-CN': 'https://assets.lbctrl.com/uploads/ca6da519-38f0-4291-89d7-79a76cef327c/sc_tc.png',
    'zh-HK': 'https://assets.lbctrl.com/uploads/ca6da519-38f0-4291-89d7-79a76cef327c/sc_tc.png',
  }
  return (
    <Carousel className="bg-cover" autoplay effect="fade">
      <TopBlock
        className="relative bg-center bg-no-repeat"
        imageUrl="https://assets.lbctrl.com/uploads/88cd3d2c-343f-49e1-a236-aa9ef8eecb96/zero.png"
      >
        <Block className={classNames('py-10 lg:max-h-[530px] px-6 md:px-0')}>
          <BlockBetween
            left={
              <>
                <div
                  className={classNames(
                    'flex flex-col items-center',
                    isEn ? 'xl:flex-row  xl:items-end' : 'md:flex-row  md:items-end'
                  )}
                >
                  <img
                    src="https://assets.lbctrl.com/uploads/deac44c1-b518-46ee-8b1c-8fb70d9ea2a3/zero.png"
                    alt="zero"
                    className="w-48 h-auto lg:w-52 xl:w-60"
                  />
                  <div
                    className={classNames('font-bold text-7xl text-brand_color', {
                      'relative xl:-left-6 text-6xl': isEn,
                    })}
                  >
                    {i18n.t('features_block_top_banner_891192')}
                  </div>
                </div>
                {isEn && (
                  <div className="mt-4 text-3xl font-medium text-front-bg-color-1">
                    to Expand Your Brokerage Business Online
                  </div>
                )}
              </>
            }
            right={
              <div className={classNames({ 'max-w-[570px]': isEn })}>
                <div className="text-3xl font-normal md:text-5xl text-front-bg-color-1">
                  {i18n.t('features_block_top_banner_891193')}
                  {isEn && (
                    <span>
                      <sup>*</sup>:
                    </span>
                  )}
                </div>
                {isEn ? (
                  <div className="mt-4">
                    <span className="mr-2 text-6xl font-extrabold text-brand_color">ZERO</span>
                    <span className="text-3xl font-normal text-front-bg-color-1 xl:whitespace-nowrap">
                      System Fees for HK Securities Trading
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col mt-4 mb-6 text-4xl font-bold md:text-6xl text-front-bg-color-1 xl:flex-row xl:space-x-4">
                    <span>{i18n.t('features_block_top_banner_891194')}</span>
                    <span>
                      <span>{i18n.t('features_block_top_banner_891192')}</span>
                      <span className="text-brand_color">
                        {i18n.t('features_block_top_banner_891195')}
                        <sup>*</sup>
                      </span>
                    </span>
                  </div>
                )}
                {isEn ? (
                  <div className="my-4 text-2xl font-normal xl:my-8 text-front-bg-color-1">
                    Flexible Platform Fees Based on Transaction Volume
                  </div>
                ) : (
                  <ul className="mb-6">
                    <li className="mb-4">
                      <div className="flex flex-col items-start xl:space-x-2 xl:items-center xl:flex-row">
                        <span className="text-xl font-bold text-brand_color">
                          {i18n.t('features_block_top_banner_891196')}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {i18n.t('features_block_top_banner_891197')}
                        </span>
                      </div>
                    </li>
                  </ul>
                )}

                <div
                  className={classNames(
                    'flex flex-col space-y-4 md:space-y-0 lg:space-x-12 lg:flex-row',
                    isEn ? 'items-center lg:items-start' : 'items-center'
                  )}
                >
                  <Button
                    link
                    url={getContactFormUrl(i18n.i18n.language)}
                    size="medium"
                    className="!bg-transparent border-2 border-front-bg-color-1 justify-self-start"
                  >
                    {i18n.t('talk-to-us')}
                  </Button>
                  {/* <ContactUs /> */}
                </div>
                <div className="absolute self-end text-sm font-thin text-front-bg-color-1 bottom-4 right-4 left-4 md:relative md:-bottom-10 xl:-bottom-20 md:left-0">
                  <sup>*</sup>
                  {i18n.t('features_block_top_banner_891201')}
                </div>
              </div>
            }
          ></BlockBetween>
        </Block>
      </TopBlock>
      <TopBlock className="bg-repeat-round bg-[#0B0550] relative">
        <Block>
          <BlockBetween
            left={
              <>
                <div className="mb-3 text-3xl text-left text-text_color_3_supplement">
                  {i18n.t('home_top_banner_text_1')}
                </div>
                <div className="text-white text-[54px] leading-[68px]text-left">
                  <div>{i18n.t('home_top_banner_text_2')}</div>
                </div>
                <div className="flex space-x-4">
                  <LocaleLink className="flex items-center mt-10" to={'/solutions/virtual-assets'}>
                    <Button size="medium">{i18n.t('features_solutions_info_introduce_891112')}</Button>
                  </LocaleLink>
                  <ContactUs />
                </div>
              </>
            }
            right={
              <div className="h-[430px] sm:w-[527px] flex flex-col justify-center">
                <img
                  src="https://assets.lbctrl.com/uploads/c8bc35cf-c93d-419f-a703-23e1d3cb52dc/va.png"
                  alt="va"
                  className="top-0 bottom-0 object-cover w-auto h-full lg:absolute"
                />
              </div>
            }
          ></BlockBetween>
        </Block>
      </TopBlock>
      {/* <TopBlock imageUrl={BG_BANNER}>
        <Block>
          <BlockBetween
            left={
              <>
                <div className="text-3xl font-medium xl:text-[43px] xl:leading-snug">
                  <div className="text-text_brand_color">{'Far Beyond'}</div>
                  <span>{i18n.t('features_block_top_banner_891147')}</span>
                </div>
                <p className="mt-4 text-lg xl:mt-6 xl:text-xl">{i18n.t('features_block_top_banner_891148')}</p>
                <div className="flex">
                  <ContactUs />
                </div>
              </>
            }
            right={
              <div className="h-[430px] sm:w-[527px] flex flex-col justify-center">
                <img
                  src={bannerMap[i18n.i18n.language]}
                  className="mt-5 lg:mt-0"
                  alt={i18n.t('top-banner.broker-title')}
                />
              </div>
            }
          />
        </Block>
      </TopBlock>
      <TopBlock
        className="relative bg-center bg-no-repeat"
        imageUrl="https://assets.lbctrl.com/uploads/785c8bd0-f6d4-4876-964c-dbae5fa95d61/whale_bg.jpg"
      >
        <Block className={classNames('py-10 md:lg-[72px] px-6 md:px-0')}>
          <BlockBetween
            left={
              <>
                <div className="mb-1 text-xl text-left text-text_color_3_supplement">
                  <div className="mb-2 text-brand_color_3">{i18n.t('features_block_top_banner_891190')}</div>
                  <div className="text-white text-3xl lg:text-[40px] lg:leading-[56px] en:lg:leading-[44px] text-left font-semibold">
                    <span className="xl:whitespace-nowrap xl:en:whitespace-normal">
                      {i18n.t('features_block_top_banner_891191')}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <ContactUs />
                </div>
              </>
            }
            right={
              <img
                src={scImage[i18n.i18n.language]}
                alt="sc_tc"
                className="right-0 object-cover w-1/2 mx-auto lg:w-[380px] xl:w-[428px]  mt-10 lg:mt-0  xl:ml-16"
              />
            }
          ></BlockBetween>
        </Block>
      </TopBlock> */}
    </Carousel>
  )
}
