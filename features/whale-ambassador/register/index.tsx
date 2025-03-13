import { Modal, ModalProps } from '../modal'
import { RegisterFrom } from './register-from'
import { Referrer } from '@/services/whale-ambassador'
import { useState } from 'react'
import { RegisterSuccess } from './success'
import { RecommendForm } from './recommend-from'
import { SharePosterModal } from './share-poster'
import { useTranslation } from 'next-i18next'

interface RegisterFormModalProps extends ModalProps {}

export const RegisterFormModal = (props: RegisterFormModalProps) => {
  const [action, setAction] = useState<'recommend' | 'share' | undefined>()
  const [referrer, setReferrer] = useState<Referrer | null>()
  const { t } = useTranslation('common')
  return (
    <Modal {...props} title={t('whale-ambassador.become-ambassador')}>
      {referrer ? (
        <RegisterSuccess
          referrer={referrer}
          onClickFillRecommendInfo={() => setAction('recommend')}
          onClickShareInvitePoster={() => setAction('share')}
        />
      ) : (
        <RegisterFrom onSuccess={setReferrer} />
      )}
      <Modal
        open={action === 'recommend'}
        title={t('whale-ambassador.fill-recommend-info')}
        onClose={() => setAction(undefined)}
      >
        <RecommendForm referCode={referrer?.code} />
      </Modal>
      <SharePosterModal
        open={action === 'share'}
        onClose={() => setAction(undefined)}
        name={referrer?.name!}
        code={referrer?.code!}
      />
    </Modal>
  )
}
