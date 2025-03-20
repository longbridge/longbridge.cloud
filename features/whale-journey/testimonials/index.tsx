import { Block } from '../block'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'
import { Trans } from 'react-i18next'
import { PurpleGradientTitle } from '../title'

interface TestimonialCardProps {
  content: string
  author: string
  title: string
  position: string
  company: string
}

const TestimonialCard = ({ content, author, title, company, position }: TestimonialCardProps) => {
  return (
    <div className={classNames(styles['testimonials-card'], 'flex flex-col p-8 text-[#FFC977]')}>
      <div className="flex relative">
        <h3 className="flex flex-col relative text-[22px] leading-tight whitespace-pre-wrap text-[#FFC977]">
          <Trans i18nKey={title} components={{ s: <span /> }} />
          <div
            className="h-1 w-[calc(100%_+_20px)] mt-2"
            style={{ background: 'linear-gradient(90deg, #7583FF 7%, rgba(164, 129, 255, 0.00) 100%)' }}
          ></div>
        </h3>
      </div>
      <svg
        className="mt-7 mb-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <path
          d="M24.0085 15.0239H14.8446V6.91888L24.0085 0V15.0239ZM9.79092 15.0239H0.694336V6.91888L9.79092 0V15.0239Z"
          fill="#FFC977"
        />
      </svg>
      <div className="flex-1 flex items-center ">
        <p className=" text-base leading-5">{content}</p>
      </div>
      <div className="mt-6 flex flex-col items-end  text-sm  leading-6">
        <p>{author}</p>
        <p>{position}</p>
        <p>{company}</p>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  const { t } = useTranslation('common')

  const testimonials = [
    {
      content: t('whale-journey.testimonials.1.content'),
      author: t('whale-journey.testimonials.1.author'),
      title: t('whale-journey.testimonials.1.title'),
      company: t('whale-journey.testimonials.1.company'),
      position: t('whale-journey.testimonials.1.position'),
    },
    {
      content: t('whale-journey.testimonials.2.content'),
      author: t('whale-journey.testimonials.2.author'),
      title: t('whale-journey.testimonials.2.title'),
      company: t('whale-journey.testimonials.2.company'),
      position: t('whale-journey.testimonials.2.position'),
    },
    {
      content: t('whale-journey.testimonials.3.content'),
      author: t('whale-journey.testimonials.3.author'),
      title: t('whale-journey.testimonials.3.title'),
      company: t('whale-journey.testimonials.3.company'),
      position: t('whale-journey.testimonials.3.position'),
    },
  ]

  return (
    <Block className={styles.testimonials}>
      <div className="space-y-12">
        <div className="text-[#FFC977]">
          <p className="whitespace-pre-wrap text-xl">{t('whale-journey.testimonials.subtitle')}</p>
          <PurpleGradientTitle className="max-w-[800px]">{t('whale-journey.testimonials.title')}</PurpleGradientTitle>
        </div>

        <div className="flex flex-col items-center md:flex-row md:flex-1 md:justify-between basis-[328px] flex-wrap gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </Block>
  )
}
