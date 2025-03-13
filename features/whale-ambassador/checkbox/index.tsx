import { Checkbox as AntdCheckbox } from 'antd'
import type { CheckboxProps } from 'antd/es/checkbox'
import styles from './index.module.scss'

export const Checkbox = (props: CheckboxProps) => {
  return <AntdCheckbox className={styles.checkbox} {...props} />
}
