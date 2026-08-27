import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { IconYarnHeart, IconFlower, IconHeart, IconGlobe } from '../components/SiteIcons'
import aboutImg1 from '../assets/Aboutpageimage1.jpg'
import aboutImg2 from '../assets/Aboutpageimage2.jpg'
import './AboutPage.css'

const VALUES = [
  { icon: <IconYarnHeart />, title: 'Handcrafted with care', desc: 'Every stitch is placed by hand, with patience and pride. No shortcuts, no machines.' },
  { icon: <IconFlower />, title: 'Made with intention', desc: 'We put thought into every colour choice, every detail — because your piece deserves it.' },
  { icon: <IconHeart />, title: 'Personal connection', desc: 'We treat every order as a conversation, not a transaction. Your happiness is our measure.' },
  { icon: <IconGlobe />, title: 'Supporting local craft', desc: 'Rooted in Pakistan, we keep traditional fibre arts alive and accessible to the world.' },
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageBanner
        eyebrow="Our story"
        title="About Lily & Looms"
        subtitle="A small business built on yarn, creativity, and a whole lot of love."
      />

      <section className="about-page">
        <div className="container">

          {/* Story section */}
          <div className="about-page__story">
            <div className="about-page__img-col">
              <div className="about-page__img-wrap">
                <img
                  src={aboutImg1}
                  alt="Handmade crochet pieces on a cosy wooden table"
                  loading="lazy"
                />
              </div>
              <div className="about-page__img-accent" aria-hidden="true"><IconYarnHeart size={48} /></div>
            </div>

            <div className="about-page__text-col">
              <span className="about-page__script">How it began</span>
              <h2 className="about-page__heading">One hook, a handful of yarn, and a dream</h2>
              <p>
                Lily &amp; Looms was born from a quiet afternoon, a crochet hook,
                and a handful of colourful yarn. What began as a personal passion
                for handcraft slowly grew into something much bigger — a small
                business rooted in the belief that truly special things are made,
                not manufactured.
              </p>
              <p>
                Every piece that leaves our hands carries hours of care, intention,
                and the kind of warmth that only a handmade gift can hold.
                From cuddly amigurumi creatures to everlasting yarn bouquets,
                we stitch stories you can keep forever.
              </p>
              <p>
                Based in Pakistan, we are proud to keep traditional fibre craft
                alive while making it accessible and gifted worldwide.
                We believe every order is a conversation — and we can't wait to
                hear yours.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="about-page__values-block">
            <h2 className="section-title">What we stand for</h2>
            <span className="section-subtitle">The heart behind every stitch</span>
            <div className="about-page__values-grid">
              {VALUES.map(v => (
                <div key={v.title} className="about-value-card">
                  <span className="about-value-card__icon">{v.icon}</span>
                  <h3 className="about-value-card__title">{v.title}</h3>
                  <p className="about-value-card__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second image + closing text */}
          <div className="about-page__closing">
            <div className="about-page__closing-img">
              <img
                src={aboutImg2}
                alt="Colourful handmade crochet flowers"
                loading="lazy"
              />
            </div>
            <div className="about-page__closing-text">
              <span className="about-page__script">A note from us</span>
              <h2 className="about-page__heading">Thank you for being here</h2>
              <p>
                Whether you've been following us for a while or just found us today,
                thank you. Every order, every kind message, every share — it means
                the world to a small handmade business like ours.
              </p>
              <p>
                We put our whole heart into this work, and we hope you can feel
                that in every piece you receive. If you ever have a question, an
                idea, or just want to say hello — our WhatsApp is always open.
              </p>
              <div className="about-page__closing-btns">
                <Link to="/shop" className="btn btn-primary">Browse the Shop</Link>
                <Link to="/custom-orders" className="btn btn-outline">Custom Orders</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
