import { useState } from 'react'
import { Form, Input, Button, Checkbox as AntdCheckbox } from 'antd'
import { PhoneNumberInput, validatePhoneNumberRule } from '../phone-number-input'
import { Referee, WhaleReferrerService } from '@/services/whale-ambassador'
import { AgreementCheckbox } from '../agreement-checkbox'
import classNames from 'classnames'
import { Checkbox } from '../checkbox'
import { Service, ReferWay } from '@/services/whale-ambassador/types'
import { toast } from 'react-toastify'
import styles from './form.module.scss'
import { i18n, useTranslation, Trans } from 'next-i18next'
import { PrivacyAgreement } from './privacy-agreement'
import { useServiceOptions } from './constants'

interface RecommendFormProps {
  onSuccess?: (values: Referee) => void
  referCode?: string
}

export const RecommendForm = ({ onSuccess, referCode }: RecommendFormProps) => {
  const [form] = Form.useForm<Referee>()
  const [loading, setLoading] = useState(false)
  const [agree, setAgree] = useState(false)
  const service = Form.useWatch(['services'], form)
  const otherService = service?.includes(Service.OTHER)
  const { t } = useTranslation('common')
  const serviceOptions = useServiceOptions()

  const handleFinish = async () => {
    setLoading(true)
    try {
      const values = await form.validateFields()
      await WhaleReferrerService.reserve({
        ...values,
        refer_code: referCode!,
        agree_share: agree,
        refer_way: ReferWay.REFERRER_REPORT,
      })
      onSuccess?.(values)
      toast.success(t('whale-ambassador.submit-success'))
      form.resetFields()
      setAgree(false)
    } finally {
      setLoading(false)
    }
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
          name="company"
          label={i18n?.t('whale-ambassador.recommend-company')}
          required
          rules={[{ required: true }]}
        >
          <Input placeholder={i18n?.t('whale-ambassador.input-placeholder')} />
        </Form.Item>
        <Form.Item name="name" label={t('whale-ambassador.contact-name')} required rules={[{ required: true }]}>
          <Input placeholder={t('whale-ambassador.input-placeholder')} />
        </Form.Item>
        <Form.Item name="position" label={t('whale-ambassador.contact-position')} required rules={[{ required: true }]}>
          <Input placeholder={t('whale-ambassador.input-placeholder')} />
        </Form.Item>
        <Form.Item
          name="phone"
          label={t('whale-ambassador.contact-phone')}
          required
          validateFirst
          rules={[{ required: true }, validatePhoneNumberRule]}
          validateTrigger={['onComplete', 'onChange']}
        >
          <PhoneNumberInput />
        </Form.Item>
        <Form.Item
          name="office_phone"
          label={t('whale-ambassador.office-phone')}
          required
          validateFirst
          rules={[{ required: true }, validatePhoneNumberRule]}
          validateTrigger={['onComplete', 'onChange']}
        >
          <PhoneNumberInput />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('')}
          validateTrigger={['onBlur']}
          validateFirst
          required
          rules={[
            { required: true },
            { type: 'email', message: t('whale-ambassador.invalid-email'), validateTrigger: ['onBlur'] },
          ]}
        >
          <Input placeholder={t('whale-ambassador.input-placeholder')} />
        </Form.Item>
        <Form.Item name="area" label={t('whale-ambassador.company-area')} required rules={[{ required: true }]}>
          <Input placeholder={t('whale-ambassador.input-placeholder')} />
        </Form.Item>
        <Form.Item
          className="!mb-2"
          name="services"
          label={t('whale-ambassador.interested-services')}
          required
          rules={[{ required: true }]}
        >
          <AntdCheckbox.Group className="flex  md:flex-col flex-wrap gap-2">
            {serviceOptions.map(option => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </AntdCheckbox.Group>
        </Form.Item>
        {otherService && (
          <Form.Item
            name="others"
            noStyle
            rules={[{ required: true, message: t('whale-ambassador.input-placeholder') }]}
          >
            <Input placeholder={t('whale-ambassador.input-placeholder')} />
          </Form.Item>
        )}
      </Form>
      <div className="px-6 flex-initial">
        <div className="flex mb-4">
          <AgreementCheckbox checked={agree} onChange={e => setAgree(e.target.checked)}>
            <Trans
              i18nKey="whale-ambassador.recommend-agreement"
              components={{
                link: <PrivacyAgreement />,
              }}
            />
          </AgreementCheckbox>
        </div>
        <Button
          disabled={!agree}
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
