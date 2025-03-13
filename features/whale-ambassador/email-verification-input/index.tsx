import React, { useState, useCallback, useEffect } from 'react'
import { Input, Button } from 'antd'
import type { InputProps } from 'antd/lib/input'
import { useTranslation } from 'react-i18next'

interface EmailVerificationInputProps extends Omit<InputProps, 'suffix'> {
  onSendCode?: () => Promise<void>
  countdownDuration?: number // 倒计时时长，单位秒
}

export const EmailVerificationInput: React.FC<EmailVerificationInputProps> = ({
  onSendCode,
  countdownDuration = 60,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const { t } = useTranslation('common')

  // 处理倒计时
  useEffect(() => {
    if (countdown <= 0) return

    const timer = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  // 发送验证码
  const handleSendCode = useCallback(async () => {
    if (countdown > 0) return

    setLoading(true)
    try {
      await onSendCode?.()
      setCountdown(countdownDuration)
    } catch (error) {
      console.error('Failed to send verification code:', error)
    } finally {
      setLoading(false)
    }
  }, [countdown, countdownDuration, onSendCode])

  // 验证码按钮
  const suffixButton = (
    <Button
      type="link"
      size="small"
      loading={loading}
      disabled={countdown > 0}
      className="border-none p-0 h-5"
      onClick={handleSendCode}
    >
      {countdown > 0 ? `${countdown}s ${t('whale-ambassador.retry')}` : t('whale-ambassador.send-verification-code')}
    </Button>
  )

  return <Input {...props} suffix={suffixButton} />
}
