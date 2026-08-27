import { useEffect } from 'react'
import { WHATSAPP_NUMBER } from '../data/products'
import PageBanner from '../components/PageBanner'
import { IconBear, IconBouquet, IconBag, IconGift, IconHouse, IconKey } from '../components/SiteIcons'
import './CustomOrdersPage.css'

const STEPS = [
  { num: '01', title: 'Tell us your idea', desc: 'Message us on WhatsApp with your design idea — colour palette, size, character, or inspiration image.' },
  { num: '02', title: 'We share a quote', desc: "We'll confirm the details, share a price, and give you an estimated turnaround time." },
  { num: '03', title: 'We get to stitching', desc: 'Once confirmed, we begin crafting your unique piece with care and attention to every detail.' },
  { num: '04', title: 'Delivered with love', desc: 'Your order is packed beautifully and delivered. We share progress photos along the way!' },
]

const IDEAS = [
  { icon: <IconBear />, label: 'Custom Amigurumi', desc: 'Your favourite animal, character, or even a mini version of your pet.' },
  { icon: <IconBouquet />, label: 'Personalised Bouquets', desc: 'Eternal yarn flowers in your wedding colours, favourite shades, or a specific flower type.' },
  { icon: <IconBag />, label: 'Bespoke Bags', desc: 'Tote bags, mini bags, market bags — any size and colour combination you can imagine.' },
  { icon: <IconGift />, label: 'Gift Sets', desc: 'Curated sets for birthdays, weddings, baby showers, and Eid gifts.' },
  { icon: <IconHouse />, label: 'Home Décor', desc: 'Wall hangings, plant hangers, coasters, and cushion covers to match your interior.' },
  { icon: <IconKey />, label: 'Keychains & Accessories', desc: 'Tiny crochet charms, keychains, and bag accessories in any design.' },
]

export default function CustomOrdersPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Lily%20%26%20Looms!%20I%27d%20like%20to%20discuss%20a%20custom%20order.`

  return (
    <>
      <PageBanner
        eyebrow="Made just for you"
        title="Custom Orders"
        subtitle="Have something special in mind? We bring your crochet vision to life — your colours, your design, your story."
      />

      <section className="custom-page">
        <div className="container">

          {/* What we can make */}
          <div className="custom-page__block">
            <h2 className="section-title">What can we make for you?</h2>
            <span className="section-subtitle">The possibilities are endless</span>
            <div className="custom-page__ideas-grid">
              {IDEAS.map(idea => (
                <div key={idea.label} className="custom-idea-card">
                  <span className="custom-idea-card__icon">{idea.icon}</span>
                  <h3 className="custom-idea-card__title">{idea.label}</h3>
                  <p className="custom-idea-card__desc">{idea.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="custom-page__block custom-page__block--tinted">
            <h2 className="section-title">How it works</h2>
            <span className="section-subtitle">Simple, personal, and stress-free</span>
            <div className="custom-page__steps">
              {STEPS.map(step => (
                <div key={step.num} className="custom-step">
                  <div className="custom-step__num">{step.num}</div>
                  <div className="custom-step__body">
                    <h3 className="custom-step__title">{step.title}</h3>
                    <p className="custom-step__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="custom-page__cta-block">
            <span className="custom-page__cta-eyebrow">Ready to start?</span>
            <h2 className="custom-page__cta-title">Let's create something magical together</h2>
            <p className="custom-page__cta-text">
              Message us on WhatsApp and we'll get back to you within a few hours.
              No idea is too big or too small — we love a creative challenge!
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp custom-page__wa-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Start Your Custom Order
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
