import classNames from 'classnames'
import { CSSProperties, FC, ReactNode } from 'react'

interface BlockProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
  id?: string
}

export const Block: FC<BlockProps> = ({ children, className, style, id }) => {
  return (
    <section className={classNames('main-container', className)} style={style} id={id}>
      <div className="main-content-width">{children}</div>
    </section>
  )
}
