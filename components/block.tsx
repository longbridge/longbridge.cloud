import classNames from 'classnames'
import { CSSProperties, FC, ReactNode } from 'react'

interface BlockProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
  as?: 'div' | 'section'
}

export const Block: FC<BlockProps> = ({ children, className, style, as = 'div' }) => {
  const Component = as
  return (
    <Component className={classNames('main-container', className)} style={style}>
      <div className="py-10">
        <div className="main-content-width">{children}</div>
      </div>
    </Component>
  )
}

export const BlockHeader = ({ title, desc, slogn }: { title: string; desc?: string; slogn?: string }) => {
  return (
    <div>
      {slogn && <div className="mb-2 text-base text-brand_color">{slogn}</div>}
      <h2 className="text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-xl font-normal text-text_color_2">{desc}</p>}
    </div>
  )
}

// 需要预留顶部导航距离
export const TopBlock: FC<{ imageUrl?: string; className?: string }> = ({ children, imageUrl, className }) => {
  return (
    <div
      className={classNames('bg-cover', className)}
      style={
        imageUrl
          ? {
              backgroundImage: `url(${imageUrl})`,
            }
          : {}
      }
    >
      {children}
    </div>
  )
}

export const BlockBetween = ({
  left,
  right,
  reverse,
  className,
}: {
  left: ReactNode
  right: ReactNode
  reverse?: boolean
  className?: string
}) => {
  return (
    <div
      className={classNames(
        'flex items-center pb-5 :lg:pb-10 lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0',
        reverse ? 'flex-col-reverse' : 'flex-col',
        className
      )}
    >
      <div className="flex-1 block-left">{left}</div>
      <div className="flex-1 block-right">{right}</div>
    </div>
  )
}
