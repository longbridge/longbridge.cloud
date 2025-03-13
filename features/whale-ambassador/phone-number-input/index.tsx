import { useEffect, useState, useCallback, useRef } from 'react'
import { Input, Select } from 'antd'
import type { FormRule, InputRef, RefSelectProps } from 'antd'
import styles from './index.module.scss'
import classNames from 'classnames'
import { isValidPhoneNumber } from 'libphonenumber-js/max'
import { i18n } from 'next-i18next'
import { isServer } from '@/utils/common'

interface PhoneNumberInputProps {
  id?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
}

const languageDialCodeMap = {
  'en': '65',
  'zh': '86',
  'zh-CN': '86',
  'zh-HK': '852',
  'zh-TW': '886',
}

const getDialCode = (language: string) => {
  return languageDialCodeMap[language as keyof typeof languageDialCodeMap]
}

const COUNTRY_CODE_MAP_URL =
  'https://assets.lbkrs.com/uploads/e9503f7f-b53a-4e34-bdf9-cb659e34d74b/country-code-map.json'

interface CountryCodeMap {
  'dialCode': string
  'en': string
  'value': string
  'zh-CN': string
  'zh-HK': string
}

const createFetchCountryCodeMap = () => {
  let cache: { label: string; value: string }[] | null = null

  return async () => {
    if (cache) return cache
    const res = await fetch(COUNTRY_CODE_MAP_URL)
    const data: Record<string, CountryCodeMap> = await res.json()
    const list = Array.from(new Set(Object.values(data).map((item: CountryCodeMap) => item.dialCode)))
      .filter(Boolean)
      .map((item: string) => ({
        label: `+${item}`,
        value: item,
      }))
    cache = list
    return list
  }
}

const fetchCountryCodeMap = createFetchCountryCodeMap()

const validatePhoneNumber = (phoneNumber: string, countryCode: string) => {
  if (!phoneNumber) return false
  if (!countryCode) return false
  return isValidPhoneNumber(phoneNumber, { defaultCallingCode: countryCode })
}

export const validatePhoneNumberRule: FormRule = {
  validator: async (rule, value) => {
    const [countryCode, phoneNumber] = value?.split('-') || []

    if (!countryCode || !phoneNumber) {
      return Promise.resolve()
    }

    if (!validatePhoneNumber(phoneNumber, countryCode)) {
      return Promise.reject(i18n?.t('whale-ambassador.invalid-phone-number'))
    }
  },
  validateTrigger: ['onComplete'],
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const { id, placeholder, value, onChange, onComplete } = props
  const [countryCodeList, setCountryCodeList] = useState<{ label: string; value: string }[]>([])
  const selectRef = useRef<RefSelectProps>(null)
  const inputRef = useRef<InputRef>(null)
  const [countryCode, setCountryCode] = useState(getDialCode(isServer() ? '' : navigator.language) || '852')

  const phoneNumber = value?.split('-')[1] || ''

  const handleChange = useCallback(
    (value: string) => {
      const [countryCode, phoneNumber] = value.split('-')
      onChange?.(value)
      if (countryCode && phoneNumber) {
        onComplete?.(value)
      }
    },
    [onChange, onComplete]
  )

  const handleCountryCodeChange = useCallback(
    (code: string) => {
      const [, phoneNumber] = value?.split('-') || []
      if (phoneNumber) {
        const nextValue = [code, phoneNumber].join('-')
        handleChange(nextValue)
      }
      setCountryCode(code)
    },
    [handleChange, value]
  )

  const handlePhoneNumberChange = useCallback(
    (value: string) => {
      console.log('handlePhoneNumberChange', countryCode, value)
      const nextValue = value ? [countryCode, value].join('-') : ''
      handleChange(nextValue)
    },
    [handleChange, countryCode]
  )

  useEffect(() => {
    fetchCountryCodeMap().then(data => {
      setCountryCodeList(data)
      console.log(navigator.language)
    })
  }, [])

  return (
    <Input.Group compact className={classNames(styles.input)}>
      <Select
        suffixIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99999 8.78132L11.3 5.48132L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132Z"
              fill="#1C1F23"
              fillOpacity="0.45"
            />
          </svg>
        }
        ref={selectRef}
        options={countryCodeList}
        value={countryCode}
        onChange={handleCountryCodeChange}
      />
      <Input
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        value={phoneNumber}
        onChange={e => handlePhoneNumberChange(e.target.value)}
      />
    </Input.Group>
  )
}
