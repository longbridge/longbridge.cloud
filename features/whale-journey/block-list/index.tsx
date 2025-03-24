import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import { Block } from '../block'
const Loading = () => {
  return (
    <Block className={styles.block}>
      <div className="w-full h-screen"></div>
    </Block>
  )
}

export const BlockListWithNoSSR = dynamic(() => import('./origin'), {
  ssr: false,
  loading: () => <Loading />,
})
