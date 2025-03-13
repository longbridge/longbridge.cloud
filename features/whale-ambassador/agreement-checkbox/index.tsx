import { Checkbox } from 'antd'
import type { CheckboxProps } from 'antd/lib/checkbox'
import classNames from 'classnames'
import styles from './index.module.scss'

interface AgreementCheckboxProps extends CheckboxProps {
  useDefaultStyle?: boolean
}

export const AgreementCheckbox = ({ className, useDefaultStyle = false, ...props }: AgreementCheckboxProps) => {
  return <Checkbox {...props} className={classNames({ [styles.checkbox]: !useDefaultStyle }, className)} />
}
