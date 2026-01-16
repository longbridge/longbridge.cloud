import DivideDot from '@/components/divide-dot'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

export const AboutGallery = () => {
  const i18n = useTranslation('common')

  return (
    <div className="main-container pt-[120px] pb-[60px]">
      <div className={classNames('main-content-width')}>
        <h3 className="text-4xl">
          <span className="font-bold">{i18n.t('about_gallery_001')}</span>&nbsp;
          <span className="font-normal">{i18n.t('about_gallery_002')}</span>
        </h3>
        <div className="mt-8">
          <DivideDot size="large" />
        </div>
        <div className="mt-14">
          <img
            src="https://assets.lbctrl.com/uploads/92e6c96c-66d6-4860-8d45-ed5496b14df9/2120277e934029b9be0da877d4211b11.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
