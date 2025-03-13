import classNames from 'classnames'
import React from 'react'
import { useClickAway } from 'ahooks'
import styles from './index.module.scss'
import Icon from '../icon'

type IItem = {
  rawValue?: boolean
  children?: any
  label: string | React.ReactNode
  shortLabel?: string | React.ReactNode
  value: string | number
}
export type IDropdownProps = {
  items?: IItem[]
  alwaysChildren?: boolean
  className?: string
  content?: React.ReactNode
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: any) => void
  value?: string | number
  trigger?: 'click' | 'hover'
  renderItem?: (item: IItem) => React.ReactNode
}
const Dropdown: React.FC<IDropdownProps> = ({
  alwaysChildren = false,
  value,
  content,
  className,
  children,
  onChange,
  trigger = 'click',
  items = [],
  renderItem,
}) => {
  const [showContent, setShowContent] = React.useState(false)
  const selectedItem = items.find(item => item.value === value)
  const containerRef = React.useRef(null)
  useClickAway(() => {
    setShowContent(false)
  }, containerRef)
  const handleChange = (newValue: any) => {
    if (newValue !== value) {
      onChange && onChange(newValue)
    }
  }
  const onClick = () => {
    if (trigger === 'click' || window.innerWidth <= 768) {
      setShowContent(!showContent)
    }
  }
  const onMouseEnter = () => {
    if (trigger === 'hover') {
      setShowContent(true)
    }
  }
  const onMouseLeave = () => {
    if (trigger === 'hover') {
      setShowContent(false)
    }
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(styles.dropdown, className)}
      ref={containerRef}
    >
      <div className="trigger" onClick={onClick}>
        {selectedItem && !alwaysChildren ? (
          <div className="flex items-center">
            <span>{selectedItem.shortLabel || selectedItem.label}</span>
            <div className="text-[8px] ml-1 translate-y-[-2px]">
              <Icon type="cart-down" />
            </div>
          </div>
        ) : (
          children
        )}
      </div>
      <div
        className={classNames('content', {
          'content-visible': showContent,
        })}
        onClick={() => setShowContent(false)}
      >
        {items.length > 0 &&
          items.map(item => {
            return (
              <div
                key={item.value}
                className={classNames(
                  'dropdown-menu__item',
                  {
                    'dropdown-menu__item--selected': item.value === value,
                  },
                  className
                )}
                onClick={() => handleChange(item.value)}
              >
                {renderItem ? renderItem(item) : item.label}
              </div>
            )
          })}
        {content}
      </div>
    </div>
  )
}

export default Dropdown
