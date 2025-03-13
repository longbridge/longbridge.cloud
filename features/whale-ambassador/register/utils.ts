import { whaleHost } from '@/utils/domain'
import { withQuery, joinURL } from 'ufo'
import { i18n } from 'next-i18next'

/** 邀请链接 */
export const getInviteLink = (code: string) => {
  const locale = i18n?.language
  return withQuery(joinURL(whaleHost, locale ?? 'zh-HK', '/whale-ambassador/invited'), {
    code,
  })
}
