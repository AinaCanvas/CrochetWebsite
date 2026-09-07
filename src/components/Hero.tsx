import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-crochet.png'
import './Hero.css'

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
    </section>
  )
}
