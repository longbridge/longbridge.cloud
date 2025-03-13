import { BrokeragesQuotes as OriginalBrokeragesQuotes } from '@/features/solutions/brokerages'
import { Block } from '../block'
import classNames from 'classnames'
import styles from '../bg.module.scss'

export const BrokeragesQuotes = () => {
  return (
    <Block className={classNames(styles['with-bg'], 'bg-brand_color py-16 md:py-20')}>
      <OriginalBrokeragesQuotes />
    </Block>
  )
}
