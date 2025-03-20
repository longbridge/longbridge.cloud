import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

interface PurpleGradientTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

/**
 * 紫色渐变标题组件
 */
export const PurpleGradientTitle = ({ children, className, style, ...rest }: PurpleGradientTitleProps) => {
  return (
    <h2
      className={classNames('font-medium  text-4xl text-[#FFC977] mt-2', className)}
      style={{ background: 'linear-gradient(90deg, #551FD2 0%, rgba(85, 31, 210, 0.00) 88.5%)', ...style }}
      {...rest}
    >
      {children}
    </h2>
  )
}

interface GoldGradientUnderlineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  underlineWidth?: string
}

/**
 * 金色渐变下划线标题组件
 */
export const GoldGradientUnderlineTitle = ({
  children,
  className,
  underlineWidth = '100%',
  ...rest
}: GoldGradientUnderlineTitleProps) => {
  return (
    <div className="flex">
      <h2
        className={classNames('font-medium flex flex-col  text-4xl leading-loose text-[#FFC977]', className)}
        {...rest}
      >
        {children}
        <div
          className="h-1"
          style={{
            width: underlineWidth,
            background: 'linear-gradient(90deg, #FFC977 0.01%, rgba(255, 201, 119, 0.00) 88.5%)',
          }}
        ></div>
      </h2>
    </div>
  )
}

/**
 * 高亮文字组件
 */
export const HighlightText = ({ children, className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={twMerge(
        'text-text-color-1 px-1 py-0.5 mx-1 rounded-[4px]  bg-gradient-to-r from-[#F8C991] to-[#FFB45A_85%]',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
