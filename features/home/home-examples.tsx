import { useTranslation } from 'next-i18next'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { useSafeState, useSize } from 'ahooks'
import { useCarouserAutoHeight } from '@/hooks/use-resize'

const HomeExamples = () => {
  const i18n = useTranslation('common')
  const list = useMemo(() => {
    return [
      // {
      //   title: i18n.t('features_home_home_examples_891131'),
      //   desc: i18n.t('features_home_home_examples_891132'),
      //   content: i18n.t('pages_example0'),
      //   position: i18n.t('pages_example1'),
      //   name: '',
      //   company: i18n.t('pages_example2'),
      // },
      {
        title: i18n.t('features_home_home_examples_891131'),
        desc: i18n.t('features_home_home_examples_891132'),
        content: i18n.t('features_home_home_examples_891137'),
        name: i18n.t('features_home_home_examples_891138'),
        position: i18n.t('features_home_home_examples_891135'),
        company: i18n.t('features_home_home_examples_891139'),
      },
      {
        title: i18n.t('features_home_home_examples_891131'),
        desc: i18n.t('features_home_home_examples_891132'),
        content: i18n.t('features_home_home_examples_891202'),
        name: 'J.W.',
        position: i18n.t('features_home_home_examples_891203'),
        company: i18n.t('features_home_home_examples_891204'),
      },
      {
        title: i18n.t('features_home_home_examples_891131'),
        desc: i18n.t('features_home_home_examples_891132'),
        content: i18n.t('features_home_home_examples_891205'),
        name: 'Kenny Leung',
        position: 'Responsible Officer',
        company: i18n.t('features_home_home_examples_891206'),
      },
      {
        title: i18n.t('features_home_home_examples_891131'),
        desc: i18n.t('features_home_home_examples_891132'),
        content: i18n.t('features_home_home_examples_891207'),
        name: 'Danny Chung',
        position: 'RO & Director',
        company: i18n.t('features_home_home_examples_891208'),
      },
      // {
      //   title: i18n.t('features_home_home_examples_891131'),
      //   desc: i18n.t('features_home_home_examples_891132'),
      //   content: i18n.t('features_home_home_examples_891140'),
      //   name: 'Mark',
      //   position: i18n.t('features_home_home_examples_891141'),
      //   company: i18n.t('features_home_home_examples_891142'),
      // },
    ]
  }, [])
  const { containerRef, height } = useCarouserAutoHeight()
  return (
    <div ref={containerRef}>
      <style>
        {`
            .examples-section button {
              background: rgba(255, 255, 255, 0.3) !important
            }
            
            .examples-section .slick-active button {
              background: #ffffff !important
            }
            `}
      </style>
      <Carousel className="bg-cover examples-section" autoplay={true} autoplaySpeed={5000} effect="fade">
        {list.map((item, index) => {
          return (
            <div className="" key={index}>
              <div
                className="py-10 sm:py-20 bg-[#5622CF] border-box bg-no-repeat bg-right-top bg-[length:56%_522px]"
                style={{
                  backgroundImage: `url('https://pub.pbkrs.com/files/202307/P5TtXZEMWM4h37W2/bg-image2.png')`,
                  height,
                }}
              >
                <div className="text-[#ffffff] text-2xl sm:text-4xl text-center font-semibold border-box px-5">
                  {item.title}
                </div>
                <div className="text-center mt-4 text-lg sm:text-xl text-[#ffffff] border-box px-5">{item.desc}</div>
                <div className="relative mt-[20px] md:mt-[50px] lg:mt-[70px] xl:mt-[70px] 2xl:mt-[70px] w-[49%] m-auto text-[#ffffff] min-w-[370px] px-3">
                  <div className="leading-7 skew-x-[-6deg]">{item.content}</div>
                  <div className="mt-2 text-right">
                    <span className="mr-3 font-semibold">{item.name}</span>
                    <span>{item.position}</span>
                  </div>
                  <div className="text-right">{item.company}</div>
                  <img
                    className="h-[28px] absolute top-[4px] left-[-58px]"
                    src="https://pub.pbkrs.com/files/202307/RRP218xfnRXMubmx/quotation-mark.png"
                    alt=""
                  />
                  <img
                    className="h-[28px] absolute top-[8px] right-[-58px] rotate-180"
                    src="https://pub.pbkrs.com/files/202307/RRP218xfnRXMubmx/quotation-mark.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HomeExamples
