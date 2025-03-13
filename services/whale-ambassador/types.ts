// 基础消息类型
export interface Email {
  email: string
}

export interface Code {
  code: string
}

export interface Name {
  name: string
}

export interface Names {
  names: string[]
}

// 推荐官信息
export interface Referrer {
  id?: number
  name: string
  company: string
  position: string
  phone: string
  email: string
  code: string
  note?: string
  vcode: string // 验证码
}

// 被推荐人信息
export interface Referee {
  id?: number
  name: string
  company: string
  position: string
  phone: string
  office_phone: string
  email: string
  area: string
  datetime: number
  services: number[] // ref opa_whale_referrer_services
  others?: string
  feedback?: string
  agree_share: boolean
  note?: string
  refer_code: string // 推荐码
  refer_way: ReferWay // 推荐方式
}

// 推荐方式枚举
export enum ReferWay {
  REFERRER_REPORT = 1, // 推荐人上报
  INVITATION_POSTER = 2, // 邀请海报
  INVITATION_LINK = 3, // 邀请链接
}


export enum Service {
  /** 互联网 App+ 解决方案 */
  INTERNET_APP_PLUS = 1,
  /** 柜台系统解决方案 */
  DESK_SYSTEM = 2,
  /** 美股及美股期权解决方案 */
  US_STOCK_AND_OPTIONS = 3,
  /** 财富管理解决方案 */
  WEALTH_MANAGEMENT = 4,
  /** 虚拟资产解决方案 */
  VIRTUAL_ASSET = 5,
  /** 其他 */
  OTHER = 6,
}

// 被推荐人状态枚举
export enum RefereeState {
  PENDING = 0, // 待审核
  VALID = 1, // 有效
  INVALID = 2, // 无效
  SPECIAL = 3, // 特殊
}

// 被推荐人汇总响应
export interface RefereeSummaryResponse {
  state: Record<number, number> // 状态和对应的数量
  reward_sent: Record<number, number> // 是否发放奖励和对应的数量
}

// 标记被推荐人请求
export interface MarkRefereeRequest {
  id: number
  state?: RefereeState
  reward_sent?: boolean
  bd_name?: string
  note?: string
}

// API 响应类型
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
} 