import { axiosInstance } from '../axios'
import type {
  ApiResponse,
  Code,
  Email,
  MarkRefereeRequest,
  Name,
  Referee,
  RefereeSummaryResponse,
  Referrer,
} from './types'

const BASE_PATH = '/v1/whale-referrer'

type Response<T extends any> = {
  data: T
  code: number
  message: string
}

export const WhaleReferrerService = {
  // 加入推荐官
  async joinReferrer(data: Referrer): Promise<Response<{ code: string }>> {
    const response = await axiosInstance.post(`${BASE_PATH}/join`, data)
    return response.data
  },

  // 预约咨询
  async reserve(data: Referee): Promise<void> {
    const response = await axiosInstance.post(`${BASE_PATH}/reserve`, data)
    return response.data
  },

  // 发送验证码
  async sendVerificationCode(data: Email): Promise<void> {
    const response = await axiosInstance.post(`${BASE_PATH}/verification-code`, data)
    return response.data
  },

  // 重发链接
  async resendLink(data: Email): Promise<void> {
    const response = await axiosInstance.post(`${BASE_PATH}/resend-link`, data)
    return response.data
  },

  // 获取推荐人名称
  async getNameByCode(data: Code): Promise<ApiResponse<Name>> {
    const response = await axiosInstance.get(`${BASE_PATH}/get-name-by-code`, { params: data })
    return response.data
  },

  // 获取被推荐人汇总信息
  async getRefereeSummary(): Promise<ApiResponse<RefereeSummaryResponse>> {
    const response = await axiosInstance.get(`${BASE_PATH}/referee-summary`)
    return response.data
  },

  // 标记被推荐人
  async markReferee(data: MarkRefereeRequest): Promise<void> {
    const response = await axiosInstance.post(`${BASE_PATH}/mark-referee`, data)
    return response.data
  },
}

export * from './types'
