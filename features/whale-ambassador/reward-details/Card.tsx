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
      className={classNames('rounded-lg px-4 pt-4 md:px-8 md:pt-8  border border-border_color relative', className)}
    >
      <h3 className=" text-xl md:text-3xl font-semibold text-grey-9 mb-2">{title}</h3>
      {icon && <div className="absolute top-4 right-4 md:top-8 md:right-8">{icon}</div>}
      <div className="space-y-4">{children}</div>
    </div>
  )
}
