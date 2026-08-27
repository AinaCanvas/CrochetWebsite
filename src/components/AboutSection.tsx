import aboutImg from '../assets/Aboutpageimage1.jpg'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container about-section__inner">
        <div className="about-section__image-col">
          <div className="about-section__img-wrap">
            <img
              src={aboutImg}
              alt="Handmade crochet items on a cosy table"
              loading="lazy"
            />
            {/* Decorative ring */}
            <div className="about-section__img-ring" aria-hidden="true" />
          </div>
        </div>

        <div className="about-section__text-col">
          <span className="about-section__eyebrow">Our Story</span>
          <h2 className="section-title about-section__title" id="about-title">
            Made with love,<br />
            <em>every single stitch</em>
          </h2>
          <p>
            Lily &amp; Looms was born from a quiet afternoon, a crochet hook,
            and a handful of colourful yarn. What began as a personal passion
            for handcraft grew into a small business rooted in the belief that
            truly special things are made — not manufactured.
          </p>
          <p>
            Every piece that leaves our hands carries hours of care, intention,
            and the kind of warmth that only a handmade gift can carry.
            From cuddly amigurumi creatures to everlasting yarn flowers,
            we stitch stories that you can hold.
          </p>
          <p>
            Based in Pakistan, we are proud to keep traditional craft alive
            while making it accessible for gift-givers and collectors around
            the world. We believe every order is a conversation — and we can't
            wait to hear yours.
          </p>
          <a href="#custom-orders" className="btn btn-primary about-section__cta">
            Start a Custom Order
          </a>
        </div>
      </div>
    </section>
  )
}
