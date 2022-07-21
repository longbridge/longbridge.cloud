import React, { FC, CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

export const Block: FC<{ className?: string; style?: CSSProperties }> = ({ children, className, style }) => {
  return (
    <div className={classNames('main-container', className)} style={style}>
      <div className="py-10 md:py-20">
        <div className="main-content-width">{children}</div>
      </div>
    </div>
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
export const TopBlock: FC<{ imageUrl: string }> = ({ children, imageUrl }) => {
  return (
    <div
      className="pt-24 bg-cover"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
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
        'flex items-center pb-10 md:flex-row',
        reverse ? 'flex-col-reverse' : 'flex-col',
        className
      )}
    >
      <div className="flex-1 mr-10">{left}</div>
      <div className="flex-1">{right}</div>
    </div>
  )
}
