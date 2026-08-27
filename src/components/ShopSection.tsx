import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS, CATEGORIES } from '../data/products'
import type { Category } from '../data/products'
import ProductCard from './ProductCard'
import './ShopSection.css'

export default function ShopSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = searchParams.get('category') as Category | 'All' | null
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>(initial && CATEGORIES.includes(initial as Category) ? initial as Category : 'All')

  useEffect(() => {
    const cat = searchParams.get('category') as Category | 'All' | null
    if (cat && (cat === 'All' || CATEGORIES.includes(cat as Category))) {
      setActiveCategory(cat as Category | 'All')
    }
  }, [searchParams])

  const handleFilter = (cat: Category | 'All') => {
    setActiveCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <section id="shop" className="shop-section" aria-labelledby="shop-title">
      <div className="container">
        <h2 className="section-title" id="shop-title">Our Shop</h2>
        <span className="section-subtitle">Handcrafted pieces made with heart</span>

        <div className="shop-section__filters" role="group" aria-label="Filter by category">
          <button
            className={`shop-section__filter-btn${activeCategory === 'All' ? ' shop-section__filter-btn--active' : ''}`}
            onClick={() => handleFilter('All')}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`shop-section__filter-btn${activeCategory === cat ? ' shop-section__filter-btn--active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="shop-section__grid">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              animationDelay={i * 80}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="shop-section__empty">No products in this category yet — check back soon! 🧶</p>
        )}
      </div>
    </section>
  )
}
