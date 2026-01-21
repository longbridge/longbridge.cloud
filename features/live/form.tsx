import { createElement, FC, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './form.module.scss'
import Button from '@/components/button'
import { useRequest } from 'ahooks'
import { report } from '@/services'
import { useLive } from '@/hooks/use-live'
import { isServer } from '@/utils/common'
import classNames from 'classnames'

function useFormItems(started: boolean) {
  const i18n = useTranslation('common')
  const items = [
    {
      label: i18n.t('live_form_005'),
      placeholder: i18n.t('live_form_006'),
      key: 'name',
      value: '',
      type: 'text',
      error: false,
      required: true,
    },
    {
      label: i18n.t('live_form_007'),
      placeholder: i18n.t('live_form_008'),
      key: 'institution',
      value: '',
      error: false,
      type: 'text',
      required: true,
    },
    {
      label: i18n.t('live_form_009'),
      placeholder: i18n.t('live_form_010'),
      key: 'email',
      error: false,
      value: '',
      type: 'text',
      rule: (val: string) => {
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
      },
      required: true,
    },
  ]
  if (started) {
    items.push({
      label: i18n.t('live_form_012'),
      placeholder: i18n.t('live_form_013'),
      key: 'messages',
      value: '',
      type: 'textarea',
      required: false,
      error: false,
    })
  }
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
  useEffect(() => {
    setFormItems(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  return [formItems, update, formValue] as const
}
export const LiveForm: FC = () => {
  const i18n = useTranslation('common')
  const { succeed, setSucceed, started } = useLive()
  const [startedSucceed, setStartedSucceed] = useState(false)
  const [formItems, update, formValue] = useFormItems(started)
  const isValid = useMemo(() => {
    const required = formItems.filter(item => item.required === true).every(item => item.value)
    const rule = formItems.filter(item => item.rule).every(item => item.rule?.(item.value))
    return required && rule
  }, [formItems])
  const disabled = !isValid || (!started && !!succeed) || (started && startedSucceed)
  const { run, loading } = useRequest(
    async () => {
      if (disabled) {
        return
      }
      // 这里认为成功即可
      await report(formValue, started)
      formItems.forEach(({ key }) => {
        update(key, '')
      })
      if (!started) {
        setSucceed(true)
      } else {
        setStartedSucceed(true)
        setTimeout(() => {
          setStartedSucceed(false)
        }, 5000)
      }
    },
    {
      manual: true,
    }
  )
  if (isServer()) {
    return null
  }
  return (
    <form className={styles.form}>
      <div>
        <div className="header">
          <h3 className="text-xl font-bold">{started ? i18n.t('live_form_011') : i18n.t('live_form_001')}</h3>
        </div>
        <div className="mt-6">
          {formItems.map(item => {
            const id = `form-${item.key}`
            return (
              <div key={item.key} className={classNames('form-item', {
                'is-error': item.error,
              })}>
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
        <p className="mb-4 text-sm text-text_color_2">{i18n.t('live_form_014')}</p>
      </div>
      <Button loading={loading} onClick={run} disabled={disabled} size="medium" className="w-full">
        {!started
          ? succeed
            ? i18n.t('live_form_003')
            : i18n.t('live_form_004')
          : startedSucceed
            ? i18n.t('live_form_004_1')
            : i18n.t('live_form_004')}
      </Button>
    </form>
  )
}
