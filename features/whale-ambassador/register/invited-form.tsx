import { useState, useMemo } from 'react'
import { Form, Input, Button, Checkbox as AntdCheckbox, DatePicker, TimePicker } from 'antd'
import { PhoneNumberInput, validatePhoneNumberRule } from '../phone-number-input'
import { Referee, WhaleReferrerService } from '@/services/whale-ambassador'
import { AgreementCheckbox } from '../agreement-checkbox'
import classNames from 'classnames'
import { Checkbox } from '../checkbox'
import { Service, ReferWay } from '@/services/whale-ambassador/types'
import styles from './form.module.scss'
import { useTranslation, Trans } from 'next-i18next'
import { PrivacyAgreement } from './privacy-agreement'
import { Dayjs } from 'dayjs'
import { useServiceOptions } from './constants'
import { Modal } from '../modal'
import { Block } from '../block'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { withKeepQueryPath } from '@/utils/local-path'
import { isMobile } from 'react-device-detect'

interface InvitedFormProps {
  onSuccess?: (values: Referee) => void
  referCode?: string
  name?: string
  useDefaultStyle?: boolean
}

interface InvitedFormValues extends Omit<Referee, 'datetime' | 'services'> {
  appointmentDate?: Dayjs
  appointmentTime?: Dayjs
  services: number[]
}

export const InvitedForm = ({
  onSuccess,
  referCode,
  useDefaultStyle = false,
  name: referrerName,
}: InvitedFormProps) => {
  const [form] = Form.useForm<InvitedFormValues>()
  const [loading, setLoading] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const service = Form.useWatch(['services'], form)
  const [shareEmail, setShareEmail] = useState(false)
  const otherService = service?.includes(Service.OTHER)
  const { t, i18n } = useTranslation('common')
  const serviceOptions = useServiceOptions()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const referWay = searchParams.get('refer_way')

  const allowSubmit = useMemo(() => {
    return agreePrivacy
  }, [agreePrivacy])

  const handleFinish = async () => {
    setLoading(true)
    try {
      const values = await form.validateFields()

      const appointmentDateTime = values.appointmentDate
        ?.clone()
        .hour(values.appointmentTime?.hour() || 0)
        .minute(values.appointmentTime?.minute() || 0)
        .second(0)

      const refereeData: Referee = {
        ...values,
        datetime: appointmentDateTime?.unix() || 0,
        refer_code: referCode!,
        agree_share: shareEmail,
        refer_way: referWay ? Number(referWay) : ReferWay.INVITATION_LINK,
        services: values.services.map(Number),
      }

      await WhaleReferrerService.reserve(refereeData)
      onSuccess?.(refereeData)
      form.resetFields()
      setShareEmail(false)
      setAgreePrivacy(false)
      navigate(
        withKeepQueryPath(`/${i18n.language}/whale-ambassador/invited-success`, { code: referCode, name: referrerName })
      )
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
        className={classNames(styles.form, styles['invited-form'], 'md:!max-h-max md:!px-0 md:!overflow-hidden')}
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
          name="phone"
          label={t('whale-ambassador.invited-form.phone')}
          required
          validateFirst
          rules={[{ required: true, whitespace: true }, validatePhoneNumberRule]}
          validateTrigger={['onComplete', 'onChange']}
        >
          <PhoneNumberInput
            placeholder={t('whale-ambassador.input-placeholder', {
              label: t('whale-ambassador.invited-form.phone'),
            })}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('whale-ambassador.work-email')}
          validateTrigger={['onBlur']}
          validateFirst
          required
          rules={[
            { required: true, whitespace: true },
            { type: 'email', message: t('whale-ambassador.invalid-email'), validateTrigger: ['onBlur'] },
          ]}
        >
          <Input placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.work-email') })} />
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
          name="area"
          label={t('whale-ambassador.invited-form.area')}
          required
          rules={[{ required: true, whitespace: true }]}
        >
          <Input
            placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.invited-form.area') })}
          />
        </Form.Item>
        <Form.Item name="appointmentDate" label={t('whale-ambassador.invited-form.appointment-date')}>
          <DatePicker
            inputReadOnly={isMobile}
            className="w-full"
            format="l"
            placeholder={t('whale-ambassador.invited-form.select-placeholder')}
          />
        </Form.Item>
        <Form.Item name="appointmentTime" label={t('whale-ambassador.invited-form.appointment-time')}>
          <TimePicker
            inputReadOnly={isMobile}
            className="w-full"
            placeholder={t('whale-ambassador.invited-form.select-placeholder')}
            format="HH:mm"
          />
        </Form.Item>
        <Form.Item
          className="!mb-2 md:[grid-column:1/-1]"
          name="services"
          label={t('whale-ambassador.interested-services')}
          required
          rules={[{ required: true }]}
        >
          <AntdCheckbox.Group className="flex  flex-wrap gap-2">
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
            rules={[{ required: true, whitespace: true, message: t('whale-ambassador.input-placeholder') }]}
          >
            <Input placeholder={t('whale-ambassador.input-placeholder', { label: t('whale-ambassador.others') })} />
          </Form.Item>
        )}
        <Form.Item
          className="md:[grid-column:1/-1] mt-3 md:mt-5"
          name="feedback"
          label={t('whale-ambassador.invited-form.feedback')}
        >
          <Input.TextArea
            placeholder={t('whale-ambassador.input-placeholder', {
              label: t('whale-ambassador.invited-form.feedback'),
            })}
            maxLength={100}
            showCount
          />
        </Form.Item>
      </Form>
      <div className="px-6 md:px-0 md:mt-5 flex-initial">
        <div className="flex flex-col gap-2 md:gap-5 mb-4">
          <AgreementCheckbox
            useDefaultStyle={useDefaultStyle}
            checked={agreePrivacy}
            onChange={e => setAgreePrivacy(e.target.checked)}
          >
            <Trans
              i18nKey="whale-ambassador.invited-agreement"
              components={{
                link: <PrivacyAgreement />,
              }}
            />
          </AgreementCheckbox>
          <AgreementCheckbox
            useDefaultStyle={useDefaultStyle}
            checked={shareEmail}
            onChange={e => setShareEmail(e.target.checked)}
            className="!ml-0"
          >
            {t('whale-ambassador.invited-form.share-email')}
          </AgreementCheckbox>
        </div>
        <Button
          disabled={!allowSubmit}
          loading={loading}
          block
          type="primary"
          style={
            !allowSubmit && useDefaultStyle
              ? {
                  backgroundColor: '#C5A4FA',
                  color: '#fff',
                }
              : {}
          }
          className={classNames('py-2 h-auto')}
          htmlType="submit"
          onClick={handleFinish}
        >
          {t('whale-ambassador.submit')}
        </Button>
      </div>
    </>
  )
}

export const InvitedFormModal = ({ referCode, name }: InvitedFormProps) => {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Modal title={t('whale-ambassador.top-banner.invited.form-title')} open={open} onClose={() => setOpen(false)}>
        <InvitedForm referCode={referCode} name={name} />
      </Modal>
      <div className="bg-white  flex md:hidden fixed bottom-0 left-0 w-full  justify-center">
        <div className="py-4 mb-safe-bottom">
          <Button
            type="primary"
            className="w-[calc(100vw-32px)] text-white py-2.5 h-auto font-medium"
            onClick={() => setOpen(true)}
          >
            {t('whale-ambassador.top-banner.invited.button')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export const InvitedFormWithTitle = ({ referCode, name }: InvitedFormProps) => {
  const { t } = useTranslation('common')
  return (
    <Block
      id="invited-form-block"
      className="hidden md:block max-w-[1200px] mx-auto border rounded-lg border-[#f3f3f3] [box-shadow:_0px_8px_32px_0px_rgba(0,_0,_0,_0.04)] bg-white py-11"
    >
      <div className=" max-w-[880px] mx-auto">
        <div className="flex flex-col md:mb-8">
          <h2 className=" text-text-color-1 text-3xl md:text-4xl font-semibold mb-1">
            {t('whale-ambassador.top-banner.invited.form-title')}
          </h2>
        </div>
        <InvitedForm useDefaultStyle referCode={referCode} name={name} />
      </div>
    </Block>
  )
}
