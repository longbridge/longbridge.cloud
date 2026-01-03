import React, { useState, useMemo, useEffect, useRef } from 'react'
import Button from '@/components/button'
import { useTranslation } from 'react-i18next'
import { CDN_IMAGES } from '@/constants'
import { TalkToUs, ContactUs } from '../talk-to-us'
import ExperienceDemo from '../experience-demo'
import classNames from 'classnames'
import { i18n } from 'next-i18next'
import styles from './portai.module.scss'
import cn from 'classnames'

interface Props {
  title: string
  subtitle?: string
  desc: string[]
  img: Record<string, string>
  imgClassName?: string
}

interface Banner {
  bgImage: string
  pcImage: string
  mImage: string
  popImage: string
  inpPcImage: string
  inpMImage: string
}

const SwiperImage = ({ bgImage, pcImage, mImage, popImage, inpPcImage, inpMImage }: Banner) => {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '49.3%',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {pcImage && (
          <div
            className="absolute overflow-hidden"
            style={{
              top: '14%',
              left: '30%',
              width: '48%',
              height: '62.5%',
            }}
            key={pcImage}
          >
            <div className={cn('w-full h-full relative')}>
              <img className="absolute top-0 left-0 banner-animate" src={pcImage} alt="" />
            </div>
          </div>
        )}
        {mImage && (
          <div
            className="absolute overflow-hidden"
            style={{
              top: '31%',
              right: '1.5%',
              width: '16%',
              height: '45%',
            }}
            key={mImage}
          >
            <div className={cn('w-full h-full relative')}>
              <img className="absolute top-0 left-0 banner-animate" src={mImage} alt="" />
            </div>
          </div>
        )}
        {popImage && (
          <div
            className="absolute opacity-1 animate__animated animate__fadeIn"
            style={{
              bottom: '28%',
              left: '11%',
              width: '40%',
              height: '10%',
            }}
            key={popImage}
          >
            <img className="absolute top-0 left-0 h-full" src={popImage} alt="" />
          </div>
        )}
        {inpPcImage && (
          <div
            className="absolute opacity-1 animate__animated animate__fadeIn"
            style={{
              bottom: '8%',
              left: '26%',
              width: '56%',
              height: '18%',
            }}
            key={inpPcImage}
          >
            <img className="absolute top-0 left-0 h-full" src={inpPcImage} alt="" />
          </div>
        )}
        {inpMImage && (
          <div
            className="absolute opacity-1 animate__animated animate__fadeIn"
            style={{
              bottom: '11%',
              right: '1%',
              width: '17%',
              height: '13%',
            }}
            key={inpMImage}
          >
            <img className="absolute top-0 left-0 h-full" src={inpMImage} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

const data: { [key: string]: Banner[] } = {
  'zh-CN': [
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/2d46185f-922d-4ee1-a19f-1425a9ae8f38/shishi-cn-2.png',
      mImage: 'https://assets.lbkrs.com/uploads/6226ec03-08c8-4f9d-9037-aef4cf2c7797/shishi-cn-1.png',
      popImage: 'https://assets.lbkrs.com/uploads/08e529be-9979-41e0-9c7e-1921304d0d1b/shishi-cn-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/98b26208-a7e5-454a-9e7b-7cd1f8c7360e/i-cn-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/c65c0a5b-640d-435c-9cc2-e6f6f557f18d/i-cn-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/89f57f34-e030-4817-9e3e-82566e4df72f/buzhuo-cn-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/39544069-94a3-4564-8559-1ce7b9324f1a/buzhuo-cn-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/04eefe12-6b63-41b9-b59f-0675a8c070f3/buzhuo-cn-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/98b26208-a7e5-454a-9e7b-7cd1f8c7360e/i-cn-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/c65c0a5b-640d-435c-9cc2-e6f6f557f18d/i-cn-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/d73b702b-2b8d-402a-9e2a-e98598ad04ad/muhu-cn-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/fbfd1bd3-2591-4d9a-b6cc-d4f63705443c/muhu-cn-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/274cc092-0b83-4a04-9033-bb98f7c2e274/mohu-cn-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/98b26208-a7e5-454a-9e7b-7cd1f8c7360e/i-cn-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/c65c0a5b-640d-435c-9cc2-e6f6f557f18d/i-cn-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/a56acbe4-bd97-4864-9ac1-778efb1b9179/zhineng-cn-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/8f95f825-362c-4bb7-a147-cb565bddafce/zhineng-cn-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/cbafea18-3f29-4dcf-a143-eea84bacf5c2/zhineng-cn-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/98b26208-a7e5-454a-9e7b-7cd1f8c7360e/i-cn-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/c65c0a5b-640d-435c-9cc2-e6f6f557f18d/i-cn-2.png',
    },
  ],
  'zh-HK': [
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/8acaea24-49c6-4c79-8112-a8103da7c31a/shishi-hk-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/83ebac22-f7be-4609-8975-88ed939fcc3f/shishi-hk-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/1a72de11-2a1f-48d2-80a7-674b639431e4/shishi-hk-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/238db0a1-5c94-4425-b323-2ed92b71db41/i-hk-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/3da87349-ff19-4202-b07e-114fe842d194/i-hk-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/41308e1c-ffc5-4fdc-8aab-a5ab72471d39/buzhuo-hk-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/601e0391-dce5-456a-9ebc-08641e1835b4/buzhuo-hk-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/49f81b3c-f47a-4352-a29f-4ec9bcc2c7d2/buzhuo-hk-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/238db0a1-5c94-4425-b323-2ed92b71db41/i-hk-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/3da87349-ff19-4202-b07e-114fe842d194/i-hk-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/3c9aadae-ddb5-464c-b6f3-1b5df078ca1c/mohu-hk-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/8604c8a5-c903-4213-98b7-be81c2d55c47/mohu-hk-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/54f814aa-ef13-4488-b53f-f190bc7aa324/mohu-hk-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/238db0a1-5c94-4425-b323-2ed92b71db41/i-hk-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/3da87349-ff19-4202-b07e-114fe842d194/i-hk-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/0bf88a2b-531d-4427-94c2-becf83721825/cn.png',
      pcImage: 'https://assets.lbkrs.com/uploads/76c3b79f-fd7e-421d-ae75-01c0b36d50fe/zhineng-hk-1.png',
      mImage: 'https://assets.lbkrs.com/uploads/3c849c81-411d-486f-a001-fd01ee55a0c9/zhineng-hk-2.png',
      popImage: 'https://assets.lbkrs.com/uploads/960eb921-2254-447c-8d28-6f6f5ea315fe/zhineng-hk-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/238db0a1-5c94-4425-b323-2ed92b71db41/i-hk-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/3da87349-ff19-4202-b07e-114fe842d194/i-hk-2.png',
    },
  ],
  'en': [
    {
      bgImage: 'https://assets.lbkrs.com/uploads/506293aa-8d21-4856-a3c7-83814b62e545/en.png',
      pcImage: 'https://assets.lbkrs.com/uploads/3476e688-0681-42e1-ba36-ae7b1762c350/shishi-en-2.png',
      mImage: 'https://assets.lbkrs.com/uploads/c386d47f-c6f0-4866-a367-641638045b27/shishi-en-1.png',
      popImage: 'https://assets.lbkrs.com/uploads/32e52848-50f1-41f5-b336-178c18d7b545/shishi-en-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/4ce8252b-1926-4742-a849-9e6bfbe7abe9/i-en-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/a0ee45b5-145c-41f6-8ec4-1fe3d145050e/i-en-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/506293aa-8d21-4856-a3c7-83814b62e545/en.png',
      pcImage: 'https://assets.lbkrs.com/uploads/3623f1ff-1d77-4b44-8b16-8ea04a785230/buzhuo-en-2.png',
      mImage: 'https://assets.lbkrs.com/uploads/387c45c1-cb43-4999-b593-f523a15440f8/buzhuo-en-1.png',
      popImage: 'https://assets.lbkrs.com/uploads/c9fd06db-56c5-412c-bdc5-e1e0c4742680/buzhuo-en-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/4ce8252b-1926-4742-a849-9e6bfbe7abe9/i-en-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/a0ee45b5-145c-41f6-8ec4-1fe3d145050e/i-en-2.png',
    },

    {
      bgImage: 'https://assets.lbkrs.com/uploads/506293aa-8d21-4856-a3c7-83814b62e545/en.png',
      pcImage: 'https://assets.lbkrs.com/uploads/2d02b61e-c974-4f4b-98bf-ca37c51017df/mohu-en-2.png',
      mImage: 'https://assets.lbkrs.com/uploads/838fcfcf-1678-430a-b692-5610729c5100/mohu-en-1.png',
      popImage: 'https://assets.lbkrs.com/uploads/2b63009e-75c4-42ef-89b9-45c8b9780389/mohu-en-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/4ce8252b-1926-4742-a849-9e6bfbe7abe9/i-en-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/a0ee45b5-145c-41f6-8ec4-1fe3d145050e/i-en-2.png',
    },
    {
      bgImage: 'https://assets.lbkrs.com/uploads/506293aa-8d21-4856-a3c7-83814b62e545/en.png',
      pcImage: 'https://assets.lbkrs.com/uploads/5b2c86b0-9779-4519-96c8-c8b3db5093c0/zhineng-en-2.png',
      mImage: 'https://assets.lbkrs.com/uploads/58039486-5d92-404c-a207-3095a5fa4b59/zhineng-en-1.png',
      popImage: 'https://assets.lbkrs.com/uploads/c7afc22d-bb7d-4e59-bb6e-22b74d064507/zhineng-en-3.png',
      inpPcImage: 'https://assets.lbctrl.com/uploads/4ce8252b-1926-4742-a849-9e6bfbe7abe9/i-en-1.png',
      inpMImage: 'https://assets.lbctrl.com/uploads/a0ee45b5-145c-41f6-8ec4-1fe3d145050e/i-en-2.png',
    },
  ],
}

let timer: NodeJS.Timeout | null = null

export const PortaiTopBanner: React.FC<Props> = props => {
  const { t, i18n } = useTranslation('common')

  const [current, setCurrent] = useState(0)
  const indexRef = useRef<number>(0)

  const banner: Banner | undefined = useMemo(() => {
    return data[i18n.language][current]
  }, [current])

  useEffect(() => {
    // 提前加载 data 中的图片
    data[i18n.language].forEach(item => {
      const img = new Image()
      img.src = item.pcImage
      img.src = item.mImage
      img.src = item.popImage
    })
  }, [])

  const goto = (index: number) => {
    if (timer) {
      clearInterval(timer)
    }
    setCurrent(index)
    indexRef.current = index
    console.log(index)
    timer = setInterval(() => {
      if (indexRef.current + 1 >= data[i18n.language].length) {
        goto(0)
        return
      }
      goto(indexRef.current + 1)
    }, 3000)
  }

  useEffect(() => {
    goto(0)
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])

  return (
    <div className={classNames('py-5 bg-cover main-container lg:pb-[90px]', styles.portaiTopBanner)}>
      <div className="flex flex-col items-center justify-between main-content-width">
        {/* 文字 */}
        <div className="flex flex-col text-center">
          <h1
            className="font-semibold text-brand_color mb-2"
            style={{
              fontSize: '42px',
            }}
          >
            {t('portai.topbanner.title')}
          </h1>
          <h1 className="font-semibold text-3xl mb-2">{t('portai.topbanner.subtitle')}</h1>
          <p className="text-base">{t('portai.topbanner.description')}</p>
          <p className="text-base">{t('portai.topbanner.description2')}</p>
          <div className="flex justify-center space-x-5">
            <a href="https://longbridge.com/ai" target="_blank">
              <Button size="medium" className="my-4">
                {t('portai.topbanner.button')}
              </Button>
            </a>
          </div>
        </div>
        {banner && <SwiperImage {...banner} />}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((_, index) => {
            return (
              <Button
                key={index}
                className={cn('rounded-full')}
                style={{
                  width: 14,
                  height: 14,
                  padding: 0,
                  background: index === current ? '#37A0FF' : '#D9D9D9',
                }}
                onClick={() => goto(index)}
              ></Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
