import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import './FeaturedSection.css'

export default function FeaturedSection() {
  const featured = PRODUCTS.filter(p => p.featured)

  return (
    <section className="featured-section" aria-labelledby="featured-title">
      <div className="container">
        <h2 className="section-title" id="featured-title">Best Sellers</h2>
        <span className="section-subtitle">Our most-loved handmade creations</span>

        <div className="featured-section__grid">
          {featured.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              animationDelay={i * 100}
            />
          ))}
        </div>

        <div className="featured-section__cta">
          <Link to="/shop" className="btn btn-outline">View All Products</Link>
        </div>
      </div>
    </section>
  )
}
