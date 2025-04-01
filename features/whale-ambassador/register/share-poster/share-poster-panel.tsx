import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { WhaleReferrerService } from '@/services/whale-ambassador/index'
import classNames from 'classnames'
import { SharePoster, savePoster } from './index'

export const SharePosterPanel = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const [name, setName] = useState('')
  const { t } = useTranslation('common')

  useEffect(() => {
    if (code) {
      WhaleReferrerService.getNameByCode({ code: code }).then(res => {
        setName(res.data.name)
      })
    }
  }, [code])

  return (
    <div className={classNames('py-10 md:py-20 flex min-h-[600px] justify-center bg-[#eeeeee]')}>
      <div>
        <SharePoster name={name} code={code!} />
        <div className="pt-5 ">
          <Button type="primary" block className="py-2.5 h-auto" onClick={() => savePoster(t)}>
            {t('whale-ambassador.save-invite-poster')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SharePosterPanel
