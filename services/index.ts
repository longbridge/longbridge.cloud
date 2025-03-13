import { getBasenameLocale } from '@/utils/common'

const host = process.env.PROXY === 'prod' ? 'https://m.lbctrl.com/api/forward' : 'https://m.longbridge.xyz/api/forward'

async function transformRes(res: any) {
  if (res.ok) {
    const data = await res.json()
    if (data.code === 0) {
      return data.data
    }
    return Promise.reject(data)
  }
  return Promise.reject(res.statusText)
}
/**
 * 报名
 */
export const report = async (
  {
    email,
    name,
    institution,
    messages,
  }: {
    email: string
    name: string
    institution: string
    messages: string
  },
  started: boolean
) => {
  const resp = await fetch(`${host}/support/feedback/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify({
      content: `
        时间：${started ? '直播中' : '预约中'};
        姓名：${name};
        邮箱：${email};
        公司或机构：${institution};
        其它信息：${messages}
      `,
      sub_type: 'longbridge_cloud_live',
    }),
  })
  return transformRes(resp)
}

/**
 * whale_cloud_web_feedback
 * toB 官网用户反馈
 * 这个是找佳成手动添加的😢
 */
export const feedback = async ({
  email,
  name,
  institution,
  messages,
}: {
  email: string
  name: string
  institution: string
  messages: string
}) => {
  const resp = await fetch(`${host}/support/feedback/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify({
      content: `
        姓名：${name};
        邮箱：${email};
        公司或机构：${institution};
        其它信息：${messages}
      `,
      sub_type: 'whale_cloud_web_feedback',
    }),
  })
  return transformRes(resp)
}
export enum LIVE_STATUS {
  booking = 1,
  online = 2,
  ended = 3,
}
export type ILiveInfo = {
  m3u8_live_url: string
  replay_url: string
  /** 秒数 */
  started_at: string | number
  status: LIVE_STATUS
}
/**
 * 获取直播信息
 */
export const getLiveInfo = async (
  id: string = '12998'
): Promise<{
  live: ILiveInfo
}> => {
  const resp = await fetch(`${host}/lives/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
    },
  })
  return transformRes(resp)
}

/**
 * 获取直播信息
 */
export const getAppConfig = async (keys: string[]): Promise<any> => {
  const resp = await fetch(`${host}/v2/app/config?${keys.map(key => `keys=${key}&platform=web`).join('&')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'x-platform': 'web',
      'x-app-id': 'longport',
    },
  })
  return transformRes(resp)
}

/**
 *
 * 获取帮助中心链接
 * https://api.devops.longbridge-inc.com/independent/#/home/api_studio/inside/api/detail?apiID=5027&projectHashKey=apis&spaceKey=LMsAkPRfb875391c87089bec29fd47a8c28481845f4ec47
 */
export const getSupportLinks = async () => {
  const resp = await fetch(`${host}/support/topic_url`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'account-channel': 'lb',
      'org-id': '1',
      'Accept-Language': getBasenameLocale(),
    },
  })
  return transformRes(resp)
}

type FormData = {
  full_name: string
  phone: string
  email: string
  company: string
  job_title: string
  region: string
  enquiry_type: string
  description: string
  date: string
  time: string
}
const FeishuWebhookUrl = 'https://longbridge.feishu.cn/base/automation/webhook/event/QIbCandqswNUIPhcN3Zck1DWnkg'
export const submitContactUsForm = async (data: FormData) => {
  const _data = {
    record: data,
  }
  const resp = await fetch(FeishuWebhookUrl, {
    method: 'POST',
    body: JSON.stringify(_data),
  })
  return transformRes(resp)
}
