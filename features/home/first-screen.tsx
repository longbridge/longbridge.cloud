import Header from '@/features/header'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { TalkToUs } from '../talk-to-us'
import styles from './first-screen.module.scss'

export type IFirstScreenProps = {
  backgroundColor?: string
  backgroundImage?: string
  title: string | ReactNode
  desc: string | ReactNode
  cover?: string
  contactUs?: boolean
  contentFLex?: string
}

export const FirstScreen: FC<IFirstScreenProps> = ({
  backgroundColor,
  backgroundImage,
  title,
  desc,
  contactUs = false,
  cover = '',
  contentFLex = '1',
}) => {
  const i18n = useTranslation('common')

  return (
    <div
      className={styles['first-screen']}
      style={{
        backgroundColor,
        backgroundImage,
      }}
    >
      <div className="section-content-container">
        <Header />
        <div className="py-10 xl:pt-20 xl:pb-40 main-container">
          <div className="flex items-center main-content-width">
            <div
              style={{
                flex: contentFLex,
              }}
            >
              <h2 className={classNames('title')}>{title}</h2>
              <div className="desc">{desc}</div>
              {contactUs && <TalkToUs className="text-xl font-medium" />}
            </div>
            <div className="flex-1 hidden ml-16 xl:block">{cover && <img src={cover} alt="cover" />}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
