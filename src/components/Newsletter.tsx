import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="newsletter" aria-label="Newsletter signup">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h2 className="newsletter__title"><span aria-hidden="true">🌸</span> Join Our Crochet Family</h2>
          <p className="newsletter__subtitle">Get updates on new collections, offers &amp; more!</p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-label="Email address"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__submit">
            {submitted ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>

        <div className="newsletter__social">
          <span className="newsletter__social-label">Follow Us</span>
          <div className="newsletter__social-icons">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.28 0 .54.05.79.14V9.83a5.71 5.71 0 0 0-.79-.06A5.75 5.75 0 1 0 15.35 15.5V8.92a7.15 7.15 0 0 0 4.15 1.33V7.16s-1.65.09-2.9-1.34z" /></svg>
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.64 19.32c-.05-.82-.09-2.08.02-2.98.1-.81.66-3.63.66-3.63s-.17-.34-.17-.84c0-.79.46-1.38 1.03-1.38.49 0 .72.36.72.8 0 .49-.31 1.22-.47 1.9-.13.57.29 1.03.85 1.03 1.02 0 1.8-1.08 1.8-2.63 0-1.38-.99-2.34-2.4-2.34-1.64 0-2.6 1.23-2.6 2.5 0 .49.19 1.02.43 1.31.05.06.05.11.04.17-.04.18-.14.57-.16.65-.03.11-.1.13-.22.08-.85-.4-1.38-1.63-1.38-2.63 0-2.14 1.56-4.11 4.48-4.11 2.35 0 4.18 1.68 4.18 3.92 0 2.34-1.47 4.22-3.52 4.22-.69 0-1.34-.36-1.56-.78l-.42 1.63c-.15.59-.57 1.33-.85 1.78A10 10 0 1 0 12 2z" /></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3h-3V8.4c0-.87.24-1.46 1.49-1.46H16.5V4.35A20 20 0 0 0 14.36 4.25c-2.1 0-3.54 1.28-3.54 3.63v2.62H8.3v3h2.52V21z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
