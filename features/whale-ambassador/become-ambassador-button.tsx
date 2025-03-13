import { useState } from 'react'
// eslint-disable-next-line import/named
import { Button, ButtonProps } from 'antd'
import { RegisterFormModal } from './register'
import { useTranslation } from 'next-i18next'

interface BecomeAmbassadorButtonProps extends ButtonProps {
  /** 来自页面，用于 */
  form?: string
}

export const BecomeAmbassadorButton = ({ className, form, ...props }: BecomeAmbassadorButtonProps) => {
  const { t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    window.sensors.track('whale_web_click', {
      element_name: '成为推荐官',
      page_belong: form,
    })
    setIsOpen(true)
  }

  return (
    <div>
      <Button className={className} {...props} onClick={handleClick}>
        {t('whale-ambassador.become-ambassador')}
      </Button>
      <RegisterFormModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
