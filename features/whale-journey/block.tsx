import classNames from 'classnames'
import { CSSProperties, FC, ReactNode } from 'react'
import { GoldGradientUnderlineTitle } from './title'
import { twMerge } from 'tailwind-merge'

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  containerClassName?: string
  style?: CSSProperties
  children: ReactNode
  id?: string
}

export const Block: FC<BlockProps> = ({ children, className, style, id, containerClassName, ...rest }) => {
  return (
    <section className={twMerge('main-container py-16 md:py-20', className)} style={style} id={id} {...rest}>
      <div className={twMerge('main-content-width', containerClassName)}>{children}</div>
    </section>
  )
}

interface Header extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export const Header = ({ title, description, className, ...rest }: Header) => {
  return (
    <div>
      <GoldGradientUnderlineTitle underlineWidth="576px" {...rest}>
        {title}
      </GoldGradientUnderlineTitle>
      <p className="mt-4 text-2xl">{description}</p>
    </div>
  )
}
