import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-crochet.png'
import './Hero.css'

const FLOAT_BADGES = [
  {
    label: '100% Handmade',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 9.5 17 9.5C17 9.5 19 8 21 10C21 14 18 20 12 20a9 9 0 0 1-1-.1" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    label: 'Premium Quality Yarn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 8c2 1 3 3 3 4s-1 3-3 4M12 6c2.5 1.5 4 4 4 6s-1.5 4.5-4 6M16 8c1.3 1.2 2 2.6 2 4s-.7 2.8-2 4" />
      </svg>
    ),
  },
  {
    label: 'Made with Love',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 21s-6.7-4.35-9.3-8.28C1 10.1 1.6 6.6 4.6 5.1c2.3-1.15 4.8-.3 6 1.6 1.2-1.9 3.7-2.75 6-1.6 3 1.5 3.6 5 1.9 7.62C18.7 16.65 12 21 12 21z" />
      </svg>
    ),
  },
]

const STRIP_ITEMS = [
  {
    title: 'Handmade',
    desc: 'Every piece is carefully handcrafted.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
  {
    title: 'Custom Orders',
    desc: 'Personalized just for you, made to order.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9.5" /><path d="M12 7v5l3.2 1.9" /></svg>
    ),
  },
  {
    title: 'Premium Quality',
    desc: 'We use the softest & highest quality yarn.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
  {
    title: 'Worldwide Shipping',
    desc: 'Delivering joy to your doorstep, everywhere.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9.5" /><line x1="2.5" y1="12" x2="21.5" y2="12" /><path d="M12 2.5a15.3 15.3 0 0 1 3.8 9.5A15.3 15.3 0 0 1 12 21.5 15.3 15.3 0 0 1 8.2 12 15.3 15.3 0 0 1 12 2.5z" /></svg>
    ),
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome to Lily & Looms">
      {/* Full-bleed background image */}
      <div className="hero__media" aria-hidden="true">
        <img src={heroImage} alt="" className="hero__media-img" />
        <div className="hero__media-fade" />
      </div>

      <div className="container hero__content-wrap">
        <div className="hero__content">
          <h1 className="hero__tagline">
            Where Every Stitch
            <span className="hero__tagline-script">Tells a Story <span aria-hidden="true">♡</span></span>
          </h1>
          <p className="hero__intro">
            Stitched to warm hearts, made to be cherished.
          </p>
          <div className="hero__cta-row">
            <Link to="/shop" className="btn btn-primary hero__cta">
              Shop Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link to="/custom-orders" className="hero__cta-secondary">
              <span aria-hidden="true">✿</span> Custom Order
            </Link>
          </div>
        </div>

        <div className="hero__floats">
          {FLOAT_BADGES.map(b => (
            <div key={b.label} className="hero__float-badge">
              <span className="hero__float-icon">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip overlapping bottom edge of hero */}
      <div className="hero__strip">
        <div className="container hero__strip-inner">
          {STRIP_ITEMS.map(item => (
            <div key={item.title} className="hero__strip-item">
              <span className="hero__strip-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
