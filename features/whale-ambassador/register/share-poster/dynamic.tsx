import dynamic from 'next/dynamic'
import { Block } from '@/components/block'
const Loading = () => {
  return (
    <Block>
      <div className="w-full min-h-[600px]"></div>
    </Block>
  )
}

export const SharePosterPanelWithNoSSR = dynamic(() => import('./share-poster-panel'), {
  ssr: false,
  loading: () => <Loading />,
})
