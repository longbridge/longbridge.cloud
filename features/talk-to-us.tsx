import React, { useState, createElement, useMemo, useCallback, CSSProperties, ReactNode } from 'react'
import Button from '@/components/button'
import { useTranslation } from 'next-i18next'
import { FullMask } from '@/components/popup'
import { useRequest } from 'ahooks'
import { feedback } from '@/services'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { toast } from 'react-toastify'
import { getContactFormUrl } from '@/utils/common'
import styles from './talk-to-us.module.scss'

function useFormItems() {
  const i18n = useTranslation('common')
  const items = [
    {
      label: i18n.t('feedback.name'),
      placeholder: i18n.t('feedback.name-placeholder'),
      key: 'name',
      value: '',
      type: 'text',
      error: false,
      required: true,
    },
    {
      label: i18n.t('feedback.institution'),
      placeholder: i18n.t('feedback.institution-placeholder'),
      key: 'institution',
      value: '',
      error: false,
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('feedback.email'),
      placeholder: i18n.t('feedback.email-placeholder'),
      key: 'email',
      error: false,
      value: '',
      type: 'text',
      rule: (val: string) => {
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
      },
      required: true,
    },
    {
      label: i18n.t('feedback.other'),
      placeholder: i18n.t('feedback.other-placeholder'),
      key: 'other',
      error: false,
      value: '',
      type: 'text',
      required: false,
    },
  ]

  const [formItems, setFormItems] = useState(items)

  const update = (key: string, value: any) => {
    const newItems = formItems.map(item => {
      if (item.key === key) {
        item.value = value
        if ((item.required && !item.value) || (item.rule && !item.rule(value))) {
          item.error = true
        } else {
          item.error = false
        }
      }
      return item
    })
    setFormItems(newItems)
  }

  const formValue = useMemo(() => {
    const val = {
      name: '',
      email: '',
      institution: '',
      messages: '',
    }
    formItems.forEach(({ key, value }) => {
      ; (val as any)[key] = value
    }, {} as any)
    return val
  }, [formItems])

  return [formItems, update, formValue] as const
}
const TalkToUsForm = ({ onClose }: { onClose: () => void }) => {
  const i18n = useTranslation('common')
  const [formItems, update, formValue] = useFormItems()

  const isValid = useMemo(() => {
    const required = formItems.filter(item => item.required === true).every(item => item.value)
    const rule = formItems.filter(item => item.rule).every(item => item.rule?.(item.value))
    return required && rule
  }, [formItems])

  const disabled = !isValid

  const { run, loading } = useRequest(
    async () => {
      if (disabled) {
        return
      }
      // 这里认为成功即可
      const resp = await feedback(formValue)
      console.log('resp', resp)
      if (resp?.ok) {
        formItems.forEach(({ key }) => {
          update(key, '')
        })
        toast(i18n.t('send-success'), {
          type: 'success',
        })
        onClose()
      } else {
        toast(i18n.t('send-error'), {
          type: 'error',
        })
      }
    },
    {
      manual: true,
    }
  )

  return (
    <form className={styles.form}>
      <div>
        <div className="flex justify-between">
          <h3 className="w-2/3 text-xl font-bold">{i18n.t('feedback.title')}</h3>
          <div>
            <Icon type="close" className="cursor-pointer hover:text-brand_color" onClick={onClose}></Icon>
          </div>
        </div>
        <div className="mt-6 text-left">
          {formItems.map(item => {
            const id = `form-${item.key}`
            return (
              <div
                key={item.key}
                className={classNames('form-item', {
                  'is-error': item.error,
                })}
              >
                <label htmlFor={id}>
                  {item.label}
                  {item.required && '*'}
                </label>
                {createElement(item.type === 'textarea' ? 'textarea' : 'input', {
                  value: item.value,
                  onChange: (e: any) => update(item.key, e.target.value),
                  type: item.type,
                  id,
                  rows: 5,
                  placeholder: item.placeholder,
                })}
              </div>
            )
          })}
        </div>
        {/* <p className="mb-4 text-sm text-text_color_2">{i18n.t(' 星号 (*) 的栏位为必填')}</p> */}
        <p className="mb-4 text-sm text-text_color_2">Email: cs@longbridge.cloud</p>
      </div>
      <Button loading={loading} onClick={run} disabled={disabled} size="medium" className="w-full text-sm">
        {i18n.t('live_form_004')}
      </Button>
    </form>
  )
}

const PhoneTalkToUs = ({ onClose }: { onClose: () => void }) => {
  const i18n = useTranslation('common')
  const [formItems, update, formValue] = useFormItems()

  const contactList = useMemo(() => {
    return [
      {
        icon: 'https://assets.lbctrl.com/uploads/ad7e7b52-7110-475f-b072-3643193779d9/union1.png',
        title: i18n.t('features_talk_to_us_891117'),
        tags: [
          i18n.t('features_talk_to_us_891118'),
          i18n.t('features_talk_to_us_891119'),
          i18n.t('features_talk_to_us_891120'),
        ],
        phone: '+852 3851 1711',
        email: 'bd@longportwhale.com',
      },
      {
        icon: 'https://assets.lbctrl.com/uploads/0c34320c-c99c-434f-88a9-b9a7b80b721c/broker.png',
        title: i18n.t('features_talk_to_us_891121'),
        tags: [i18n.t('features_talk_to_us_891122'), i18n.t('features_talk_to_us_891123')],
        phone: '+852 3851 1722',
        email: 'cs@longbridge.cloud',
      },
    ]
  }, [])

  return (
    <div className="">
      <div className="flex justify-between p-6 pb-[19px] border-b ">
        <div>
          <h3 className="text-xl font-bold">{i18n.t('features_talk_to_us_891124')}</h3>
          <h3 className="text-xl font-bold">{i18n.t('features_talk_to_us_891125')}</h3>
        </div>
        <div>
          <Icon
            type="close"
            style={{ fontSize: '20px' }}
            className="cursor-pointer hover:text-brand_color"
            onClick={onClose}
          ></Icon>
        </div>
      </div>
      {!!contactList?.length && (
        <div className="px-6 pb-5">
          {contactList.map((item, index) => {
            return (
              <div className="py-5 border-b last:border-b-0" key={index}>
                <div className="flex items-center">
                  <img src={item.icon} alt="" className="w-5 mr-2" />
                  <span className="text-base font-medium text-brand_color">{item.title}</span>
                </div>
                {!!item?.tags?.length && (
                  <div className="flex items-center text-[11px] text-brand_color flex-wrap">
                    {item.tags.map((it, i) => {
                      return (
                        <div className="px-1 py-[3px] bg-[#5622CF]/[.1] mt-2 mr-2 last:mr-0" key={i}>
                          {it}
                        </div>
                      )
                    })}
                  </div>
                )}
                <div className="pt-3 font-medium">
                  {i18n.t('features_talk_to_us_891126')}
                  <span>{item.phone}</span>
                </div>
                <div className="pt-3 font-medium">
                  {i18n.t('features_talk_to_us_891127')}
                  <span>{item.email}</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const TalkToUs = ({ className, style, text }: { className?: string; style?: CSSProperties; text?: string }) => {
  const i18n = useTranslation('common')
  const [visible, setVisible] = useState(false)

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])
  const onOpen = useCallback(() => {
    setVisible(true)
  }, [])

  return (
    <>
      {visible && (
        <FullMask width={324} maskClosable={false}>
          <PhoneTalkToUs onClose={onClose} />
        </FullMask>
      )}
      <Button size="medium" className={classNames('mt-10', className)} style={style} onClick={onOpen}>
        {text || i18n.t('talk-to-us')}
      </Button>
    </>
  )
}
export type IContactUsProps = {
  className?: string
  style?: CSSProperties
  text?: string
  children?: ReactNode
}
export const ContactUs = ({ className, style, text, children }: IContactUsProps) => {
  const i18n = useTranslation('common')
  return (
    <a href={getContactFormUrl(i18n.i18n.language)} target="_blank" rel="noreferrer">
      {children || (
        <Button size="medium" className={classNames('mt-10', className)} style={style}>
          {text || i18n.t('talk-to-us')}
        </Button>
      )}
    </a>
  )
}
export const ContactUsGhost = ({ text }: IContactUsProps) => {
  const i18n = useTranslation('common')
  return (
    <ContactUs>
      <div className="text-white border-white border px-8 py-2.5 hover:bg-brand_color hover:border-brand_color hover:text-white hover:opacity-80">
        {text || i18n.t('talk-to-us')}
      </div>
    </ContactUs>
  )
}

export const ContactUsBlack = ({ text }: IContactUsProps) => {
  const i18n = useTranslation('common')
  return (
    <ContactUs>
      <div className=" border-text-color-1 border px-8 py-2.5 hover:bg-brand_color hover:border-brand_color hover:text-white hover:opacity-80">
        {text || i18n.t('talk-to-us')}
      </div>
    </ContactUs>
  )
}
export const ContactUsBorder = ({ text, className }: IContactUsProps) => {
  const i18n = useTranslation('common')
  return (
    <ContactUs className={className}>
      <div className="border-brand_color text-brand_color border px-8 py-2.5 hover:bg-brand_color hover:border-brand_color hover:text-white hover:opacity-80">
        {text || i18n.t('talk-to-us')}
      </div>
    </ContactUs>
  )
}
