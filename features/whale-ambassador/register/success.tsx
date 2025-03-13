import { Button } from 'antd'
import { Referrer } from '@/services/whale-ambassador'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { getInviteLink } from './utils'
import { useTranslation } from 'next-i18next'

interface RegisterSuccessProps {
  referrer: Referrer
  className?: string
  /** 填写推荐信息 */
  onClickFillRecommendInfo?: () => void
  /** 分享邀请海报 */
  onClickShareInvitePoster?: () => void
}

export const RegisterSuccess = (props: RegisterSuccessProps) => {
  const { referrer, className, onClickFillRecommendInfo, onClickShareInvitePoster } = props
  const { t } = useTranslation('common')
  const inviteLink = getInviteLink(referrer.code)
  // 复制邀请链接
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(inviteLink)
    toast.success(t('whale-ambassador.copy-success'))
  }

  // 分享到 WhatsApp
  const handleShareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(getInviteLink(referrer.code))}`
    window.open(url, '_blank')
  }

  // 分享到 LinkedIn
  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      getInviteLink(referrer.code)
    )}`
    window.open(url, '_blank')
  }

  return (
    <div className={classNames('flex flex-col items-center text-center space-y-4 px-6', className)}>
      <div className="mt-12 md:mt-4">
        <img
          className="w-20 h-20 "
          src="https://assets.lbctrl.com/uploads/a08897ac-7ea6-483f-83ed-fc1e7ae32f35/success.svg"
          alt={t('whale-ambassador.success')}
        />
      </div>

      <h2 className="text-lg text-grey-9 font-semibold">{t('whale-ambassador.register-success')}</h2>
      <p className="text-text-color-2">
        <span>{t('whale-ambassador.register-success-email', { email: referrer.email })}</span>
      </p>

      {/* 主要按钮 */}
      <Button type="primary" className="py-2.5 h-auto" block onClick={onClickFillRecommendInfo}>
        {t('whale-ambassador.fill-recommend-info')}
      </Button>

      {/* 分割线 */}
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex-1 h-px bg-[rgba(18,16,20,0.08)]" />
        <div className="text-text-color-2">{t('whale-ambassador.or')}</div>
        <div className="flex-1 h-px bg-[rgba(18,16,20,0.08)]" />
      </div>

      {/* 分享按钮 */}
      <Button
        block
        className="py-2.5 h-auto font-medium border-brand_color text-brand_color"
        onClick={onClickShareInvitePoster}
      >
        {t('whale-ambassador.share-invite-poster')}
      </Button>

      {/* 复制链接区域 */}
      <div className="w-full flex items-center border border-brand_color">
        <div className="flex-1 truncate px-3 py-2">{inviteLink}</div>
        <Button
          className="h-auto px-3 py-2 flex items-center"
          type="primary"
          onClick={handleCopyLink}
          icon={
            <img
              className="w-4 h-4 mr-1"
              src="https://assets.lbctrl.com/uploads/ec9e700d-0ed2-4ad8-b52f-dab7e9e7b6f3/link.svg"
              alt="link"
            />
          }
        >
          <span className="text-sm">{t('whale-ambassador.copy-invite-link')}</span>
        </Button>
      </div>

      {/* 社交分享 */}
      <div className="flex items-center justify-center space-x-3">
        <span className="text-text-color-2">{t('whale-ambassador.share-to')}</span>
        <button onClick={handleShareWhatsApp}>
          <img
            src="https://assets.lbctrl.com/uploads/6c707c95-ff89-460e-86c7-10a18c2ed75b/whatsapp.svg"
            alt={'WhatsApp'}
            className="w-7 h-7"
          />
        </button>
        <button onClick={handleShareLinkedIn}>
          <img
            src="https://assets.lbctrl.com/uploads/ea49e61e-e2a8-4fa7-9307-a359afd78999/linkedin.svg"
            alt={'LinkedIn'}
            className="w-7 h-7"
          />
        </button>
      </div>
    </div>
  )
}
