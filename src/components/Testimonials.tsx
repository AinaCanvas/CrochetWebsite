import './Testimonials.css'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Asjal Amjad Butt',
    location: '',
    quote: "I just received my customized crochet bouquet keychain and flower pot and I honestly couldn't be happier! They're even more beautiful in person. You can really tell how much love and care went into making them. The details are just perfect. The colors, the quality, everything is so well done. They instantly brought a smile to my face. I'm seriously obsessed!",
    rating: 5,
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Fatima Amir',
    location: '',
    quote: "The best gift I've ever received honestly. The quality is literally 100/10, so soft, so neat, and the wool feels amazing, not rough at all. I never thought I'd love flowers this much, but these wool flowers are genuinely becoming an obsession now. Even my mother loved them so much, and that made it even more special for me. Thank you for putting so much love and effort into every little detail.",
    rating: 5,
    avatar: 'F',
  },
  {
    id: 3,
    name: 'Anamta Aly',
    location: '',
    quote: "Loved the experience! The bouquet, Batman, tulips — all of them were sooooo beautiful. Thank you so much! Inshallah gonna shop soon.",
    rating: 5,
    avatar: 'A',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonial__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 className="section-title" id="testimonials-title">What Our Customers Say</h2>
        <span className="section-subtitle">Real love from real people</span>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(t => (
            <blockquote key={t.id} className="testimonial-card">
              <Stars count={t.rating} />
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <footer className="testimonial-card__footer">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.avatar}</div>
                <div>
                  <cite className="testimonial-card__name">{t.name}</cite>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
