import { useState, useEffect, useCallback } from 'react'
// eslint-disable-next-line import/named
import { Button, ButtonProps } from 'antd'
import { RegisterFormModal } from './register'
import { useTranslation } from 'next-i18next'
import { useLocation } from 'react-router-dom'
interface BecomeAmbassadorButtonProps extends ButtonProps {
  /** 来自页面，用于 */
  form?: string
  children?: React.ReactNode
  /** 是否自动打开注册弹窗 */
  enableAutoOpen?: boolean
}

export const BecomeAmbassadorButton = ({
  className,
  form,
  children,
  enableAutoOpen,
  ...props
}: BecomeAmbassadorButtonProps) => {
  const { t } = useTranslation('common')
  const { state } = useLocation()
  const autoOpen = enableAutoOpen && ((state && typeof state === 'object' && 'autoOpen' in state) as boolean | false)

  const [isOpen, setIsOpen] = useState(autoOpen)

  const handleClick = useCallback(() => {
    window.sensors.track('whale_web_click', {
      element_name: '成为推荐官',
      page_belong: form,
    })
    setIsOpen(true)
  }, [form])

  useEffect(() => {
    if (autoOpen) {
      handleClick()
    }
  }, [autoOpen, handleClick])

  return (
    <div>
      <Button className={className} {...props} onClick={handleClick}>
        {children || t('whale-ambassador.become-ambassador')}
      </Button>
      <RegisterFormModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
