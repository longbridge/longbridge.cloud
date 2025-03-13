import React, { useState, useMemo, useEffect } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import { QRCodeSVG } from 'qrcode.react'
import { getInviteLink } from './utils'
import { Modal, ModalProps } from '../modal'
import { domToBlob } from 'modern-screenshot'
import { toast } from 'react-toastify'
import { WhaleReferrerService } from '@/services/whale-ambassador/index'
import { useSearchParams } from 'react-router-dom'
import { isServer } from '@/utils/common'
import { useTranslation } from 'next-i18next'

interface SharePosterProps {
  className?: string
  name: string
  code: string
  onClose?: () => void
  onSave?: () => void
}

const posterWidth = 320
const posterHeight = 555

export const SharePoster = ({ className, name, code }: SharePosterProps) => {
  const { t } = useTranslation('common')
  const [innerWidth, setInnerWidth] = useState(isServer() ? 375 : window.innerWidth)
  const [innerHeight, setInnerHeight] = useState(isServer() ? 667 + 150 : window.innerHeight)
  const isMobile = innerWidth < 768

  const scale = useMemo(() => {
    if (isMobile) {
      return Math.min(1, (innerHeight - 150) / posterHeight)
    }
    return 0.75
  }, [isMobile, innerHeight])

  const { width, height } = useMemo(() => {
    return {
      width: posterWidth * scale,
      height: posterHeight * scale,
    }
  }, [scale])

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className={classNames('flex flex-col flex-1 items-center justify-center mx-auto poster-container', className)}
      style={{ width, height }}
    >
      {/* 海报容器 */}
      <div
        className="relative w-[320px]  bg-front-bg-color1 md:-mt-10 "
        style={{
          transform: `scale(${scale}, ${scale})`,
          transformOrigin: 'center center',
          height: posterHeight,
          width: posterWidth,
        }}
      >
        <img
          className=" w-[320px] h-[392px]"
          src="https://assets.whalesit.xyz/uploads/4df171c2-8c0d-4995-9566-a2f02ae78030/poster.svg"
          alt="poster"
        />
        {/* 内容区域 */}
        <div className="relative p-4 text-front-bg-color1 h-[176px]">
          {/* 用户名称 */}
          <p className="text-sm  font-medium text-brand_color mb-1">{name}</p>

          {/* 标题 */}
          <h2 className="text-xl  font-medium">{t('whale-ambassador.invite-experience-service')}</h2>
          {/* 底部信息 */}
          <div className="flex items-end justify-between border-t pt-4 mt-4">
            <div>
              <img
                src="https://assets.whalesit.xyz/uploads/2557be21-f64d-4e0c-afc4-90a795563b2e/whale-logo.svg"
                alt="Whale Logo"
                className="h-6 mb-2"
              />
              <div className="  text-[10px] leading-normal text-[rgba(28,31,35,0.60)]">
                {t('whale-ambassador.scan-qr-understand-needs')}
              </div>
            </div>

            {/* 二维码占位 */}
            <QRCodeSVG
              size={48}
              level="M"
              imageSettings={{
                src: 'https://assets.whalesit.xyz/uploads/36892d9e-fdcb-4bcb-bc30-c7719c857997/logo.svg',
                x: undefined,
                y: undefined,
                height: 12,
                width: 12,
                excavate: true,
              }}
              value={getInviteLink(code)}
            ></QRCodeSVG>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SharePosterModalProps extends ModalProps {
  className?: string
  onClose?: () => void
  name: string
  code: string
}

export const savePoster = async (t: (key: string) => string) => {
  const poster = document.querySelector('.poster-container')
  if (poster) {
    const poster = document.querySelector('.poster-container')
    if (poster) {
      const toastId = toast(t('whale-ambassador.generating-poster'), { isLoading: true, autoClose: false })
      const blob = await domToBlob(poster, { scale: 3, features: { fixSvgXmlDecode: true } })
      toast.dismiss(toastId)

      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `whale-ambassador-poster.png`
      a.click()
    }
  }
}

export const SharePosterModal = ({ className, onClose, name, code, open }: SharePosterModalProps) => {
  const { t } = useTranslation('common')
  const [isMobile, setMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Modal
      open={open}
      onClose={onClose}
      enableHeader={!isMobile}
      className={classNames('bg-[rgba(255,255,255,0.12)] [backdrop-filter:blur(40px)]', { '!pb-0': isMobile })}
    >
      <div className={classNames(className, { 'h-screen flex flex-col  justify-end': isMobile })}>
        <SharePoster name={name} code={code} />
        {isMobile ? (
          <div className="flex bg-front-bg-color1 pb-safe-bottom">
            <div className="py-5 px-4 flex gap-3 w-full">
              <Button block className="py-2 text-brand_color border-brand_color h-auto flex-1" onClick={onClose}>
                {t('whale-ambassador.cancel')}
              </Button>
              <Button block className="py-2 h-auto flex-1" type="primary" onClick={() => savePoster(t)}>
                {t('whale-ambassador.save-invite-poster')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-6">
            <Button type="primary" block className="mt-4 py-2.5 h-auto" onClick={() => savePoster(t)}>
              {t('whale-ambassador.save-invite-poster')}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export const SharePosterPanel = () => {
  const { t } = useTranslation('common')
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const [name, setName] = useState('')

  useEffect(() => {
    if (code) {
      WhaleReferrerService.getNameByCode({ code: code }).then(res => {
        setName(res.data.name)
      })
    }
  }, [code])

  return (
    <div className="flex items-center justify-center my-4 px-4">
      <div className="bg-grey-1 [backdrop-filter:blur(40px)] p-6">
        <div className="flex flex-col flex-1 items-center justify-center mx-auto">
          <SharePoster name={name} code={code!} />
          <Button type="primary" block className="mt-4 py-2.5 h-auto" onClick={() => savePoster(t)}>
            {t('whale-ambassador.save-invite-poster')}
          </Button>
        </div>
      </div>
    </div>
  )
}
