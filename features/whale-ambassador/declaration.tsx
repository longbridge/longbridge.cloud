import { Block } from './block'
import { useTranslation, Trans } from 'next-i18next'
import { Mail } from './mail'

const Link = () => {
  const { t } = useTranslation('common')
  return (
    <a
      className="text-brand_color"
      href={t('whale-ambassador.terms-and-conditions-url')}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t('whale-ambassador.terms-and-conditions')}
    </a>
  )
}

export const Declaration = () => {
  const { t } = useTranslation('common')
  return (
    <Block className="text-[rgba(28,31,35,0.60)]">
      <h2 className=" text-base font-medium leading-[1.75em]">{t('whale-ambassador.declaration')}</h2>
      <div className="text-text">
        <p>
          {
            <Trans
              i18nKey="whale-ambassador.declaration-1"
              components={{ link: <Link />, s: <span className=" font-medium" /> }}
            />
          }
        </p>
        <p className="text-left">
          <Trans i18nKey="whale-ambassador.declaration-2" components={{ mail: <Mail /> }} />
        </p>
      </div>
    </Block>
  )
}
