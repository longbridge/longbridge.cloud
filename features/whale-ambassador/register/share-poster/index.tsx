import React, { useState, useMemo, useEffect } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import { QRCodeSVG } from 'qrcode.react'
import { getInviteLink } from '../utils'
import { Modal, ModalProps } from '../../modal'
import { domToBlob } from 'modern-screenshot'
import { toast } from 'react-toastify'
import { WhaleReferrerService } from '@/services/whale-ambassador/index'
import { useSearchParams } from 'react-router-dom'
import { isServer } from '@/utils/common'
import { useTranslation } from 'next-i18next'
import { useLocaleNavigate } from '@/hooks/use-locale-navigate'
import styles from './index.module.scss'
interface SharePosterProps {
  className?: string
  name: string
  code: string
  onClose?: () => void
  onSave?: () => void
}

const posterWidth = 320

export const SharePoster = ({ className, name, code }: SharePosterProps) => {
  const { t, i18n } = useTranslation('common')
  const [innerWidth, setInnerWidth] = useState(isServer() ? 375 : window.innerWidth)
  const [innerHeight, setInnerHeight] = useState(isServer() ? 667 + 150 : window.innerHeight)
  const isMobile = innerWidth < 768
  const posterHeight = useMemo(() => {
    if (i18n.language === 'en') {
      return 565
    }
    return 550
  }, [i18n.language])

  const scale = useMemo(() => {
    if (isMobile) {
      return Math.min(1, (innerHeight - 150) / posterHeight)
    }
    return 0.75
  }, [isMobile, innerHeight, posterHeight])

  const { width, height } = useMemo(() => {
    return {
      width: posterWidth * scale,
      height: posterHeight * scale,
    }
  }, [posterHeight, scale])

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
          className=" w-[320px] h-[371px]"
          src="https://assets.lbctrl.com/uploads/e9a6eec7-4ff8-4c2e-8bac-ad21ae1c418d/e3bcdad70992e734a8d1127d3965b805.png"
          alt="poster"
        />
        {/* 内容区域 */}
        <div className="relative p-4 text-front-bg-color1 h-[176px] en:h-[196px]">
          {/* 用户名称 */}
          <p className="text-sm  font-medium text-brand_color mb-1 min-h-5">{name}</p>
          {/* 标题 */}
          <h2 className="text-xl  font-medium">{t('whale-ambassador.invite-experience-service')}</h2>
          <p className="text-xs text-[rgba(28,31,35,0.60)] font-medium mb-1">
            {t('whale-ambassador.invite-experience-service-desc')}
          </p>
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
  const [isMobile, setMobile] = useState(isServer() ? false : window.innerWidth < 768)

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
      className={classNames('bg-[rgba(255,255,255,0.12)]  !pb-0', styles['poster-modal-content'])}
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
          <div className="px-6 py-5  bg-white">
            <Button type="primary" block className="py-2.5 h-auto" onClick={() => savePoster(t)}>
              {t('whale-ambassador.save-invite-poster')}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export const SharePosterPanel = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const [name, setName] = useState('')
  const { t } = useTranslation('common')

  useEffect(() => {
    if (code) {
      WhaleReferrerService.getNameByCode({ code: code }).then(res => {
        setName(res.data.name)
      })
    }
  }, [code])

  return (
    <div className={classNames('py-10 md:py-20 flex min-h-[600px] justify-center bg-[#eeeeee]')}>
      <div>
        {code && <SharePoster name={name} code={code!} />}
        <div className="pt-5 ">
          <Button type="primary" block className="py-2.5 h-auto" onClick={() => savePoster(t)}>
            {t('whale-ambassador.save-invite-poster')}
          </Button>
        </div>
      </div>
    </div>
  )
}
