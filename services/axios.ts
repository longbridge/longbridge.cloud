import axios from 'axios'
import { toast } from 'react-toastify'
import { i18n } from 'next-i18next'
const host = process.env.PROXY === 'prod' ? 'https://m.lbctrl.com/api/forward' : 'https://m.longbridge.xyz/api/forward'

export const axiosInstance = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
})


axiosInstance.interceptors.request.use((config) => {
  config.headers['accept-language'] = i18n?.language || 'zh-HK'
  return config
})

axiosInstance.interceptors.response.use((response) => {
  if (response.data.code !== 0) {
    toast.error(response.data.message || 'unknown error')
    return Promise.reject(response.data)
  }
  return response
})