import { Button } from 'antd'
import { Block } from './block'
import { InvitedFormModal } from './register/invited-form'
import { useTranslation } from 'next-i18next'

interface InvitedFooterProps {
  className?: string
  referCode?: string
  name?: string
}

export const InvitedFooter = ({ className, referCode, name }: InvitedFooterProps) => {
  const { t } = useTranslation('common')

  return (
    <Block className={className}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl  font-semibold">{t('whale-ambassador.invited-footer.title')}</h2>
          <p className=" text-base leading-[1.75em] text-text-color-1-supplement font-normal">
            {t('whale-ambassador.invited-footer.description')}
          </p>
        </div>
        <div>
          <InvitedFormModal referCode={referCode} name={name} />
          <Button type="primary" className=" hidden md:inline-block py-2.5 px-8 h-auto font-medium">
            <a href="#invited-form-block">{t('whale-ambassador.top-banner.invited.button')}</a>
          </Button>
        </div>
      </div>
    </Block>
  )
}
