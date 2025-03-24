import { Block, Header } from '../block'
import styles from './index.module.scss'
import { HighlightText } from '../title'
import classNames from 'classnames'
import { useTranslation, Trans } from 'next-i18next'

const list = [
  {
    i18nKey: 'whale-journey.optimized-app-solutions.data.1',
  },
  {
    i18nKey: 'whale-journey.optimized-app-solutions.data.2',
  },
  {
    i18nKey: 'whale-journey.optimized-app-solutions.data.3',
  },
  {
    i18nKey: 'whale-journey.optimized-app-solutions.data.4',
  },
]

const Item = ({ i18nKey }: { i18nKey: string }) => {
  return (
    <div className="flex items-baseline">
      <Trans
        i18nKey={i18nKey}
        components={{
          value: <span className=" text-6xl" />,
          percentage: <span className=" text-5xl" />,
          suffix: <span className=" text-5xl" />,
          h: <HighlightText />,
        }}
      />
    </div>
  )
}
export const OptimizedAppSolutions = () => {
  const { t } = useTranslation('common')

  return (
    <Block className={classNames(styles['optimized-app-solutions'], 'text-[#FFCC8D]')}>
      <div className="relative">
        <Header
          title={t('whale-journey.optimized-app-solutions.title')}
          description={t('whale-journey.optimized-app-solutions.description')}
        />

        <div className="flex flex-col md:flex-row gap-10 mt-16">
          {/* 左侧数据区 */}
          <div className="flex-1 flex justify-center items-center relative px-9 ">
            <img
              src={t(
                'https://assets.lbctrl.com/uploads/bdba09bc-46d9-4f60-8687-f98ee89304ab/7fd63e49d21ed157b9fabacd53413df5.png'
              )}
              alt="data"
            />
            <div className=" z-10 absolute bottom-0 bg-gradient-to-b h-[120px] w-full from-[#0A034E00] to-[#12045e]"></div>
          </div>

          {/* 右侧数据区 */}
          <div className="flex-1 flex flex-col  justify-center relative text-2xl gap-12">
            {list.map(item => (
              <Item key={item.i18nKey} i18nKey={item.i18nKey} />
            ))}
          </div>
        </div>
      </div>
    </Block>
  )
}
