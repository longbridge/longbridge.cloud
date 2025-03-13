import React from 'react'
import classNames from 'classnames'

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  icon?: React.ReactNode
}

export const Card = (props: CardProps) => {
  const { className, title, children, icon, ...restProps } = props
  return (
    <div
      {...restProps}
      className={classNames(
        'flex flex-col rounded-lg px-4 pt-4 md:px-8 md:pt-8 bg-[#F6EFFF]  border-border_color relative',
        className
      )}
    >
      <h3 className=" text-xl md:text-2xl font-semibold text-grey-9 mb-6">{title}</h3>
      {icon && <div className="absolute top-4 right-4 md:top-8 md:right-8">{icon}</div>}
      <div className="border flex-1 bg-front-bg-color1 rounded-lg px-4 md:px-5 py-7  [box-shadow:_0px_0px_10px_0px_rgba(0,0,0,0.05)]">
        {children}
      </div>
    </div>
  )
}
