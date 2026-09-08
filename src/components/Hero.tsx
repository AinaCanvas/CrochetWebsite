import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-crochet.png'
import './Hero.css'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: 'Handmade',
    desc: 'Every piece is carefully handcrafted.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Custom Orders',
    desc: 'Personalized just for you, made to order.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    title: 'Premium Quality',
    desc: 'We use the softest & highest quality yarn.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    title: 'Worldwide Shipping',
    desc: 'Delivering joy to your doorstep, everywhere.',
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
      </div>
      {/* Feature strip */}
      <div className="hero__features" aria-label="Key features">
        {features.map((f) => (
          <div className="hero__feature" key={f.title}>
            <span className="hero__feature-icon">{f.icon}</span>
            <div>
              <p className="hero__feature-title">{f.title}</p>
              <p className="hero__feature-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
