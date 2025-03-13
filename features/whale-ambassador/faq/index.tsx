import classNames from 'classnames'
import { Block } from '../block'
import { Collapse } from 'antd'
import { Trans, useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import { Mail } from '../mail'

const { Panel } = Collapse
export const FAQ = () => {
  const { t } = useTranslation()

  const questions = [
    {
      title: t('whale-ambassador.faq.q1.title'),
      content: t('whale-ambassador.faq.q1.content'),
    },
    {
      title: t('whale-ambassador.faq.q2.title'),
      content: t('whale-ambassador.faq.q2.content'),
    },
    {
      title: t('whale-ambassador.faq.q3.title'),
      content: t('whale-ambassador.faq.q3.content'),
    },
    {
      title: t('whale-ambassador.faq.q4.title'),
      content: t('whale-ambassador.faq.q4.content'),
    },
    {
      title: t('whale-ambassador.faq.q5.title'),
      content: <Trans i18nKey="whale-ambassador.faq.q5.content" components={{ mail: <Mail /> }} />,
    },
    {
      title: t('whale-ambassador.faq.q6.title'),
      content: (
        <>
          {t('whale-ambassador.faq.q6.content.part1')}
          <Trans i18nKey="whale-ambassador.faq.q6.content.part2">
            <Mail />
          </Trans>
          {t('whale-ambassador.faq.q6.content.part3')}
        </>
      ),
    },
    {
      title: t('whale-ambassador.faq.q7.title'),
      content: t('whale-ambassador.faq.q7.content'),
    },
    {
      title: t('whale-ambassador.faq.q8.title'),
      content: t('whale-ambassador.faq.q8.content'),
    },
    {
      title: t('whale-ambassador.faq.q9.title'),
      content: <Trans i18nKey="whale-ambassador.faq.q9.content" components={{ mail: <Mail /> }} />,
    },
  ]

  return (
    <Block className={classNames(styles.faq, 'pb-16 border-b')}>
      <div className="flex flex-col">
        <h2 className="mb-6 md:mb-10 text-text-color-1 text-[28px]  md:text-4xl font-semibold">FAQ</h2>
      </div>
      <Collapse
        ghost
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <svg
            className={classNames('!top-4 !translate-y-0 transition-all', { '!rotate-180': isActive })}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_441_606496)">
              <path
                d="M12.0002 13.172L16.9502 8.22205L18.3642 9.63605L12.0002 16L5.63623 9.63605L7.05023 8.22205L12.0002 13.172Z"
                fill="#03053D"
              />
            </g>
            <defs>
              <clipPath id="clip0_441_606496">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      >
        {questions.map((question, index) => (
          <Panel
            header={<h3 className="max-w-[85%] text-text-color-1 font-medium text-lg">{question.title}</h3>}
            key={index}
          >
            <p className="text-base leading-7 md:left-6 text-text-color-1-supplement">{question.content}</p>
          </Panel>
        ))}
      </Collapse>
    </Block>
  )
}
