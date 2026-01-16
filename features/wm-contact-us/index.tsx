import Box from '@/features/product/Box'
import { useMemo } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import ContactForm from '@/features/contact-form'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
  const i18n = useTranslation('common')
  const contactUsInfo = useMemo(() => {
    const contactUsInfo = [
      {
        title: i18n.t('features_wm_contact_us_index_891162'),
        children: [
          {
            label: i18n.t('features_footer_index_891118'),
            value: 'bd@longportwhale.com',
            type: 'mailto:',
          },
          {
            label: i18n.t('features_footer_index_891117'),
            value: '+852 3851 1711',
            type: 'tel:',
          },
          // {
          //   label: i18n.t('features_wm_contact_us_index_891161'),
          //   value: i18n.t('features_wm_contact_us_index_891180'),
          //   type: '',
          // },
        ],
      },
      // {
      //   title: i18n.t('features_wm_contact_us_index_891163'),
      //   children: [
      //     {
      //       label: i18n.t('features_footer_index_891118'),
      //       value: 'wm@longbridge.cloud',
      //       type: 'mailto:',
      //     },
      //     {
      //       label: i18n.t('features_footer_index_891117'),
      //       value: '+65 9297 0216',
      //       type: 'tel:',
      //     },
      //     {
      //       label: i18n.t('features_footer_index_891117'),
      //       value: '+852 3851 1711',
      //       type: 'tel:',
      //     },
      //     {
      //       label: i18n.t('features_wm_contact_us_index_891161'),
      //       value: i18n.t('features_wm_contact_us_index_891181'),
      //       type: '',
      //     },
      //   ],
      // },
    ]
    return contactUsInfo
  }, [])

  return (
    <Box>
      <>
        <div className={classNames(styles['contact-us'])}>
          <div className="w-[100%] md:w-[44%]">
            <div className="title">{i18n.t('talk-to-us')}</div>
            {contactUsInfo.map(({ title, children }) => {
              const childrenNodes = children.map(({ label, value, type }) =>
                type ? (
                  <a className="label" href={`${type}${value}`} key={value}>
                    {label}
                    {value}
                  </a>
                ) : (
                  <span className="label" key={value}>
                    {label}
                    {value}
                  </span>
                )
              )
              return (
                <div key={title} className="mb-8">
                  <div className="sub-title">{title}</div>
                  <div className="label-container">{childrenNodes}</div>
                </div>
              )
            })}
            <div className="mb-8">
              <div className="sub-title">{i18n.t('features_wm_contact_us_index_891163')}</div>
              <div className="label-container">
                <a className="label" href={'mailto:wm@longbridge.cloud'}>
                  {i18n.t('features_footer_index_891118')}
                  {'wm@longbridge.cloud'}
                </a>
                <span className="label">
                  {i18n.t('features_footer_index_891117')}
                  <a href={'tel:+65 9297 0216'}>{'+65 9297 0216'}</a>
                  <span>{' / '}</span>
                  <a href={'tel:+852 3851 1711'}>{'+852 3851 1711'}</a>
                </span>
                {/* <span className="label">
                  {i18n.t('features_wm_contact_us_index_891161')}
                  {i18n.t('features_wm_contact_us_index_891181')}
                </span> */}
              </div>
            </div>
            <div
              className="img-container"
              style={{
                backgroundImage: `url(https://assets.lbctrl.com/uploads/092de69e-b447-4cc7-96e7-c59486745724/bg-earth.png)`,
              }}
            ></div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </>
    </Box>
  )
}

export default ContactUs
