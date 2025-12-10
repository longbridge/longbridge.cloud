import classNames from 'classnames'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@/features/product/Box'
import Title from '@/features/product/title'

const HomeCardList = () => {
  const i18n = useTranslation('common')
  const renderList = useMemo(() => {
    return [
      { title: '30%', desc: [i18n.t('features_home_data_card_list_891113')] },
      { title: '50%', desc: [i18n.t('features_home_data_card_list_891114')] },
      {
        title: '10 ms',
        desc:
          i18n.i18n.language === 'en'
            ? [i18n.t('features_home_data_card_list_891115')]
            : [i18n.t('features_home_data_card_list_891115_first'), i18n.t('features_home_data_card_list_891115_end')],
      },
      { title: '5 ms', desc: [i18n.t('features_home_data_card_list_891117')] },
      {
        title: i18n.t('features_home_data_card_list_891118'),
        desc:
          i18n.i18n.language === 'en'
            ? [i18n.t('features_home_data_card_list_891119')]
            : [i18n.t('features_home_data_card_list_891119_first'), i18n.t('features_home_data_card_list_891119_end')],
      },
      { title: i18n.t('features_home_data_card_list_891121'), desc: [i18n.t('features_home_data_card_list_891122')] },
      {
        title: i18n.t('features_home_data_card_list_891123'),
        desc:
          i18n.i18n.language === 'en'
            ? [i18n.t('features_home_data_card_list_891124')]
            : [i18n.t('features_home_data_card_list_891124_first'), i18n.t('features_home_data_card_list_891124_end')],
      },
      {
        title: i18n.t('features_home_data_card_hour'),
        desc:
          i18n.i18n.language === 'en'
            ? [i18n.t('features_home_data_card_list_891125')]
            : [i18n.t('features_home_data_card_list_891125_first'), i18n.t('features_home_data_card_list_891125_end')],
      },
    ]
  }, [])
  return (
    <Box>
      <>
        <Title
          label={i18n.t('features_home_data_card_list_891127')}
          title={i18n.t('features_home_data_card_list_891128')}
        ></Title>
        <div className="flex flex-wrap gap-y-5 mt-10 gap-x-3 sm:gap-x-5">
          {renderList.map((item, index) => {
            return (
              <div
                key={index}
                className="group sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[23.6%] w-[48%] min-w-[153px] h-[171px] border border-border_color rounded-lg border-box bg-white p-5 hover:bg-brand_color hover:text-[#FFFFFF] hover:transition-all hover:duration-700"
              >
                <div className="text-2xl sm:text-4xl font-bold mb-3 text-brand_color group-hover:text-[#FFFFFF] group-hover:transition-all group-hover:duration-700">
                  {item.title}
                </div>
                {item.desc.map((it, row) => {
                  return (
                    <div key={row} className="font-medium">
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

export default HomeCardList
