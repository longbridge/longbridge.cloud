import { useState } from 'react'
// eslint-disable-next-line import/named
import { Button, ButtonProps } from 'antd'
import { RegisterFormModal } from './register'
import { useTranslation } from 'next-i18next'

interface BecomeAmbassadorButtonProps extends ButtonProps {}

export const BecomeAmbassadorButton = ({ className, ...props }: BecomeAmbassadorButtonProps) => {
  const { t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button className={className} {...props} onClick={() => setIsOpen(true)}>
        {t('whale-ambassador.become-ambassador')}
      </Button>
      <RegisterFormModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
