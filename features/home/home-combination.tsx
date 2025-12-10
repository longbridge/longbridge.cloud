import Box from '@/features/product/Box'
import { ImageAndText } from '@/features/solutions/info-introduce'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const HomeCombination = () => {
  const i18n = useTranslation('common')
  const contentInfo = useMemo(() => {
    return {
      title: i18n.t('features_home_home_combination_891116'),
      desc: [i18n.t('features_home_home_combination_891114')],
      tips: i18n.t('features_home_home_combination_891115'),
      titleClassName: 'mb-3',
      img: {
        'en': 'https://assets.lbctrl.com/uploads/137f5c00-6f4a-43dc-83b3-c8d1f8672f9b/ab0d4a5414453df9b2e7453d84daf50e.png',
        'zh-CN':
          'https://assets.lbctrl.com/uploads/674bfab7-2aa7-42ab-a2a0-d6b2644678b9/52a58c70fb3c4fca1daec075fbc00e8d.png',
        'zh-HK':
          'https://assets.lbctrl.com/uploads/69d87f3c-8ea4-4df0-b5a7-ce5f9a3319a9/3d841a0480b7647128ec5889cba1f5a4.png',
      },
    }
  }, [])

  return (
    <Box>
      <ImageAndText {...contentInfo} needTalk={false} needContact />
    </Box>
  )
}

export default HomeCombination
