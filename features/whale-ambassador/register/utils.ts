import { whaleHost } from '@/utils/domain'
import { withQuery, joinURL } from 'ufo'

/** 邀请链接 */
export const getInviteLink = (code: string) => {
  return withQuery(joinURL(whaleHost, '/whale-ambassador/invited'), {
    code,
  })
}
