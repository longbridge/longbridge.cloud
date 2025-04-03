import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { PhoneNumberInput, validatePhoneNumberRule } from '../phone-number-input'
import { Referrer, WhaleReferrerService } from '@/services/whale-ambassador'
import { EmailVerificationInput } from '../email-verification-input'
import { AgreementCheckbox } from '../agreement-checkbox'
import classNames from 'classnames'
import styles from './form.module.scss'
import { useTranslation, Trans } from 'next-i18next'
import { PrivacyAgreement } from './privacy-agreement'
import { useSearchParams } from 'react-router-dom'

interface RegisterFromProps {
  onSuccess?: (values: Referrer) => void
}

export const RegisterFrom = (props: RegisterFromProps) => {
  const { onSuccess } = props
  const [form] = Form.useForm<Referrer>()
  const [loading, setLoading] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const { t } = useTranslation('common')
  const [searchParams] = useSearchParams()
  const sourceFrom = searchParams.get('source_from')

  const handleFinish = async () => {
    setLoading(true)
    try {
      const values = await form.validateFields()
      const {
        data: { code },
      } = await WhaleReferrerService.joinReferrer({ ...values, source_from: sourceFrom ?? undefined })
      onSuccess?.({ ...values, code })
      setAgreePrivacy(false)
    } finally {
      setLoading(false)
    }
  }

  const handleSendEmailCode = async () => {
    await form.validateFields(['email'])
    await WhaleReferrerService.sendVerificationCode({ email: form.getFieldValue('email') })
  }

  return (
    <>
      <Form
        form={form}
        labelAlign="left"
        layout="vertical"
        className={classNames(styles.form)}
        validateMessages={{ required: t('whale-ambassador.field-required') }}
      >
        <Form.Item
          name="name"
          label={t('whale-ambassador.name')}
          required
          rules={[{ required: true, whitespace: true }]}
        >
          <Input placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.name') })} />
        </Form.Item>
        <Form.Item
          name="company"
          label={t('whale-ambassador.company')}
          required
          rules={[{ required: true, whitespace: true }]}
        >
          <Input placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.company') })} />
        </Form.Item>
        <Form.Item
          name="position"
          label={t('whale-ambassador.position')}
          required
          rules={[{ required: true, whitespace: true }]}
        >
          <Input placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.position') })} />
        </Form.Item>
        <Form.Item
          name="phone"
          label={t('whale-ambassador.mobile-phone')}
          required
          validateFirst
          rules={[{ required: true, whitespace: true }, validatePhoneNumberRule]}
          validateTrigger={['onComplete', 'onChange']}
        >
          <PhoneNumberInput
            placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.mobile-phone') })}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('whale-ambassador.email')}
          validateTrigger={['onBlur']}
          validateFirst
          required
          rules={[
            { required: true, whitespace: true },
            { type: 'email', message: t('whale-ambassador.invalid-email'), validateTrigger: ['onBlur'] },
          ]}
        >
          <Input
            placeholder={t('whale-ambassador.input-placeholder', {
              label: t('whale-ambassador.email'),
            })}
          />
        </Form.Item>
        <Form.Item
          name="vcode"
          label={t('whale-ambassador.email-verification-code')}
          required
          rules={[{ required: true, whitespace: true }]}
        >
          <EmailVerificationInput
            placeholder={t('whale-ambassador.email-verification-code-placeholder')}
            onSendCode={handleSendEmailCode}
          />
        </Form.Item>
      </Form>
      <div className="px-6">
        <div className="flex mb-4">
          <AgreementCheckbox checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)}>
            <Trans i18nKey="whale-ambassador.sign-in-agreement" components={{ link: <PrivacyAgreement /> }} />
          </AgreementCheckbox>
        </div>
        <Button
          disabled={!agreePrivacy}
          loading={loading}
          block
          type="primary"
          className="py-2 h-auto"
          htmlType="submit"
          onClick={handleFinish}
        >
          {t('whale-ambassador.submit')}
        </Button>
      </div>
    </>
  )
}

export const RegisterFromWithTitle = () => {}
