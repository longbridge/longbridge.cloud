import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'

interface HomeTeamsInfoProps {
  className?: string
}

const HomeTeamsInfo = ({ className }: HomeTeamsInfoProps) => {
  const i18n = useTranslation('common')

  const list = useMemo(() => {
    return [
      {
        img: 'https://pub.pbkrs.com/files/202307/nnswNVEqxchGE7yH/hk-stock-exchange.png',
        title: i18n.t('features_home_home_teams_info_891140'),
        desc: [i18n.t('features_home_home_teams_info_891141')],
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/oK6qoyLPWpXtXBhi/Group_627429.png',
        title: i18n.t('features_home_home_teams_info_891142'),
        desc: [i18n.t('features_home_home_teams_info_891143')],
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/2VbdgeKexzufQnUJ/cnas.png',
        title: 'CNAS/UKAS/IAF',
        desc: [i18n.t('features_home_home_teams_info_891144'), i18n.t('features_home_home_teams_info_891145')],
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/bmMsHj89Qt54NP69/independent-patent.png',
        title: i18n.t('features_home_home_teams_info_891146'),
        desc: [i18n.t('features_home_home_teams_info_891147'), i18n.t('features_home_home_teams_info_891148')],
      },
      {
        img: 'https://pub.pbkrs.com/files/202307/QDVKrbamDMT3tKMz/brand-honors.png',
        title: i18n.t('features_home_home_teams_info_891149'),
        desc: [i18n.t('features_home_home_teams_info_891150')],
      },
      {
        img: 'https://assets.lbctrl.com/uploads/31305a5a-bb2e-4ceb-988e-4f2d0b386b10/60.png',
        title: i18n.t('features_home_home_teams_info_891152'),
        desc: [i18n.t('features_home_home_teams_info_891153')],
      },
    ]
  }, [])

  return (
    <Box className={className}>
      <>
        <Title title={i18n.t('features_home_home_teams_info_891151')} />
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((item, index) => {
            return (
              <div key={index} className="border border-box p-7 rounded-lg">
                <img src={item.img} alt="" className="h-[68px]" />
                <div className="mt-6 mb-3 font-semibold text-xl">{item.title}</div>
                {item?.desc?.map((it, j) => {
                  return (
                    <div key={j} className="text-text_color_1_supplement">
                      {it}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </>
    </Box>
  )
}

export default HomeTeamsInfo
