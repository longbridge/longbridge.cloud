import axios from 'axios'
import { toast } from 'react-toastify'
const host = process.env.PROXY === 'prod' ? 'https://m.lbctrl.com/api/forward' : 'https://m.longbridge.xyz/api/forward'

export const axiosInstance = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
})


axiosInstance.interceptors.response.use((response) => {
  if (response.data.code !== 0) {
    toast.error(response.data.message || 'unknown error')
    return Promise.reject(response.data)
  }
  return response
})