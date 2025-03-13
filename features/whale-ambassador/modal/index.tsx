import { Modal as AntdModal, Button } from 'antd'
import type { ModalProps as AntdModalProps } from 'antd/es/modal'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface ModalProps extends AntdModalProps {
  onClose?: () => void
  title?: string
  enableHeader?: boolean
}

export const Modal = (props: ModalProps) => {
  const { className, onClose, children, title, footer, enableHeader = true, ...restProps } = props
  return (
    <AntdModal
      className={classNames(styles.modal)}
      {...restProps}
      onCancel={onClose}
      width={'100%'}
      modalRender={() => (
        <div className={classNames(styles.wrapper)}>
          <div className={classNames(styles.content, className)}>
            {enableHeader && (
              <div
                className={classNames(
                  'flex w-full  md:min-h-7 justify-center items-center relative md:border-none  border-border_color_1 px-6  mt-safe-top md:pt-6',
                  {
                    'border-b': title,
                  }
                )}
              >
                {title && (
                  <h2 className="md:ml-0 md:mr-auto items-start text-lg my-2 md:my-0 md:text-xl md:w-full font-medium">
                    {title}
                  </h2>
                )}
                <Button
                  className={classNames(
                    'whale-modal-close-btn flex items-center justify-center absolute md:static left-6 p-0 h-5 w-5 !border-transparent active:border-brand_color  hover:opacity-60',
                    {
                      'md:mr-0 md:ml-auto': !title,
                    }
                  )}
                  type="text"
                  onClick={onClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.668 1.91797L18.0846 3.33464L11.418 10.0013L18.0846 16.668L16.668 18.0846L10.0013 11.418L3.33464 18.0846L1.91797 16.668L8.58463 10.0013L1.91797 3.33464L3.33464 1.91797L10.0013 8.58463L16.668 1.91797Z"
                      fill="var(--text-color-1)"
                    />
                  </svg>
                </Button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    />
  )
}
