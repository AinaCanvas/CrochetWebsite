import './PageBanner.css'

interface PageBannerProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageBanner({ title, subtitle, eyebrow }: PageBannerProps) {
  return (
    <section className="page-banner" aria-label={title}>
      <div className="page-banner__bg-ring page-banner__bg-ring--1" aria-hidden="true" />
      <div className="page-banner__bg-ring page-banner__bg-ring--2" aria-hidden="true" />
      <div className="container page-banner__content">
        {eyebrow && <span className="page-banner__eyebrow">{eyebrow}</span>}
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
