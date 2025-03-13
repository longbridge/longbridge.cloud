import { useState } from 'react'
import { Modal } from '../modal'
import { Form, Input, Button } from 'antd'
import styles from './form.module.scss'
import classNames from 'classnames'
import { WhaleReferrerService } from '@/services/whale-ambassador'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

export const SendInviteLink = () => {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm<{ email: string }>()
  const email = Form.useWatch(['email'], form)

  const handleSendInviteLink = async () => {
    const values = await form.validateFields()
    await WhaleReferrerService.sendVerificationCode({ email: values.email })
    toast.success(t('whale-ambassador.invite-link-sent'))
    setOpen(false)
  }

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} title={t('whale-ambassador.get-invite-link')}>
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold md:hidden mb-2 px-6">{t('whale-ambassador.enter-registered-email')}</h2>
          <div className="text-text_color_1_supplement px-6 text-xs ">
            {t('whale-ambassador.enter-registered-email-desc')}
          </div>
          <Form
            form={form}
            className={classNames(styles.form, 'mt-4 w-full')}
            layout="vertical"
            validateMessages={{ required: t('whale-ambassador.field-required', { label: '${label}' }) }}
          >
            <Form.Item name="email" label={t('whale-ambassador.email')} rules={[{ required: true, type: 'email' }]}>
              <Input className="w-full" />
            </Form.Item>
          </Form>
        </div>
        <Button className="mx-6 py-2 h-auto" type="primary" disabled={!email} onClick={handleSendInviteLink}>
          {t('whale-ambassador.submit')}
        </Button>
      </Modal>
      <Button
        type="link"
        className="py-0 pl-1 pr 0 border-none text-sm md:text-base h-auto"
        onClick={() => setOpen(true)}
      >
        <span className="underline">{t('whale-ambassador.get-invite-link')}</span>
      </Button>
    </div>
  )
}
