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
            It started with a forgotten ball of yarn. Years after my sister
            first tried teaching me crochet, I picked up the hook again to make
            a handmade birthday gift for my best friend — and never really put
            it down.
          </p>
          <p>
            That first little puff-flower keychain grew into Lily &amp; Looms:
            a little world of handmade creations where someone's idea becomes
            something they can actually hold.
          </p>
          <p>
            The name itself carries the journey — "Lily" is the alias I've
            always used, and "Looms" is a nod to my old loom-band days. In a
            way, I went from a hook and a box of rubber bands to a hook and a
            ball of yarn.
          </p>
          <a href="#custom-orders" className="btn btn-primary about-section__cta">
            Start a Custom Order
          </a>
        </div>
      </div>
    </section>
  )
}
