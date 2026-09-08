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
              <h2 className="about-page__heading">It started with a forgotten ball of yarn.</h2>
              <p>
                My first encounter with crochet was years ago, watching my sister
                learn from my nani jan. I wasn't particularly serious about it
                then — I only learned the basic chain and eventually forgot all
                about it.
              </p>
              <p>
                Years later, while looking for a handmade birthday gift for my
                best friend, I suddenly remembered an old ball of yarn and a
                crochet hook tucked away in a trunk in our storeroom. So I
                thought, <em>why not learn crochet and make her something?</em>
              </p>
              <p>
                I turned to online video tutorials, taught myself the basic
                stitches, and somehow went from struggling with the basics to
                learning magic rings and making a little puff-flower keychain
                for her. It turned out pretty good, and seeing how happy she was
                made me want to keep creating.
              </p>
              <p>
                What started as one handmade gift slowly became something I
                genuinely fell in love with. I began making pieces for friends
                and family, and eventually, their encouragement gave me the push
                to start selling.
              </p>
              <p>
                Even the name Lily &amp; Looms carries a little piece of that
                journey. "Lily" is the alias I've always used, while "Looms" is
                a nod to my old loom-band days, when I used to make bracelets
                from tiny rubber bands. In a way, I went from a hook and a box
                of rubber bands to a hook and a ball of yarn.
              </p>
              <p>
                Today, Lily &amp; Looms is my little world of handmade
                creations, where I get to turn someone's idea into something
                they can actually hold. Every piece is made with thought, time,
                and love, because no two handmade pieces are ever exactly the
                same.
              </p>
              <p>
                And I hope that when you receive one, you think,
                <em> "This is exactly what I had in mind."</em> Or, if I'm
                lucky, <em>"It's even better."</em>
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
