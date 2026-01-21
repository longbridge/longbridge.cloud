import { ReportItem } from '@/features/whale-reports/types'
import { useReports } from '@/hooks/use-reports'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './list.module.scss'

export const WhaleReportList: FC = () => {
  const [reports] = useReports()
  const i18n = useTranslation('common')

  return (
    <div className={`${styles['whale-report-list']} main-content-width container mx-auto py-10 px-5`}>
      <div className="report-title">{i18n.t('header_nav_009')}</div>
      {reports.map((report, index) => (
        <WhaleReportItem key={index} report={report} />
      ))}
    </div>
  )
}

export const WhaleReportItem = ({ report }: { report: ReportItem }) => {
  return (
    <div className="report-wrapper">
      <div className="report">
        <div className="stamp">
          {report.time} | {report.source}
        </div>
        <div className="title">
          {report.source_link ? (
            <a href={report.source_link} target="_blank" rel="noreferrer">
              {report.title}
            </a>
          ) : (
            report.title
          )}
        </div>
        <div className="desc">{report.description}</div>
      </div>
      <img src={report.image} alt="" className="report-image" />
    </div>
  )
}
