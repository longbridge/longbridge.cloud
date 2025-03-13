import { useEffect, useState, useCallback, useRef } from 'react'
import { Input, Select } from 'antd'
import type { FormRule, InputRef, RefSelectProps } from 'antd'
import styles from './index.module.scss'
import classNames from 'classnames'
import { isPossiblePhoneNumber } from 'libphonenumber-js/min'
import { i18n } from 'next-i18next'

interface PhoneNumberInputProps {
  id?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
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
  return isPossiblePhoneNumber(phoneNumber, { defaultCallingCode: countryCode })
}

export const validatePhoneNumberRule: FormRule = {
  validator: (rule, value, callback) => {
    const [countryCode, phoneNumber] = value?.split('-') || []
    if (!validatePhoneNumber(phoneNumber, countryCode)) {
      return callback(i18n?.t('whale-ambassador.invalid-phone-number'))
    }
    return callback()
  },
  validateTrigger: ['onComplete'],
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const { id, placeholder, value, onChange, onComplete } = props
  const [countryCodeList, setCountryCodeList] = useState<{ label: string; value: string }[]>([])
  const selectRef = useRef<RefSelectProps>(null)
  const inputRef = useRef<InputRef>(null)

  const [countryCode, phoneNumber] = value?.split('-') || []

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
    (value: string) => {
      handleChange([value, phoneNumber].join('-'))
    },
    [handleChange, phoneNumber]
  )

  const handlePhoneNumberChange = useCallback(
    (value: string) => {
      handleChange([countryCode, value].join('-'))
    },
    [handleChange, countryCode]
  )

  useEffect(() => {
    fetchCountryCodeMap().then(data => {
      setCountryCodeList(data)
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
