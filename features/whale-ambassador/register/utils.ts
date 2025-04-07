import { whaleHost } from '@/utils/domain'
import { joinURL, withQuery, getQuery } from 'ufo'
import { i18n } from 'next-i18next'
import { isServer } from '@/utils/common'

/** 邀请链接 */
export const getInviteLink = (code: string) => {
  const query = getQuery(isServer() ? "" : window.location.href)

  const locale = i18n?.language
  return withQuery(joinURL(whaleHost, locale ?? 'zh-HK', '/whale-ambassador/invited'), {
    code,
    source_from: query.source_from,
  })
}
