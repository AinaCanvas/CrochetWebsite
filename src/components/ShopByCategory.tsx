import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ShopByCategory.css'

interface CategoryItem {
  label: string
  slug: string
  icon: ReactNode
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    label: 'Amigurumi',
    slug: 'Amigurumi',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9.5" cy="7" r="3" /><circle cx="22.5" cy="7" r="3" /><ellipse cx="16" cy="17" rx="9" ry="10" /><circle cx="13" cy="15" r="1.2" fill="currentColor" stroke="none" /><circle cx="19" cy="15" r="1.2" fill="currentColor" stroke="none" /><ellipse cx="16" cy="18" rx="2" ry="1.5" /></svg>
    ),
  },
  {
    label: 'Keychains',
    slug: 'Keychains',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="5" /><circle cx="11" cy="11" r="2" /><path d="M14.5 14.5L26 26" /><path d="M22 22v4" /><path d="M25 25v2" /></svg>
    ),
  },
  {
    label: 'Flowers',
    slug: 'Flowers',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="12" r="3" /><circle cx="12" cy="15.5" r="3" /><circle cx="20" cy="15.5" r="3" /><circle cx="13.5" cy="20" r="3" /><circle cx="18.5" cy="20" r="3" /><path d="M16 12v18" /></svg>
    ),
  },
  {
    label: 'Bags',
    slug: 'Bags',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h16l-2 16H10z" /><path d="M12 12V9a4 4 0 0 1 8 0v3" /></svg>
    ),
  },
  {
    label: 'Accessories',
    slug: 'Accessories',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l2 9 9 2-9 2-2 9-2-9-9-2 9-2z" /><path d="M24 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" /></svg>
    ),
  },
]

export default function ShopByCategory() {
  return (
    <section className="shop-category" aria-labelledby="shop-category-title">
      <div className="container">
        <h2 className="shop-category__heading" id="shop-category-title">Shop by Category</h2>
        <span className="shop-category__subtitle">Find exactly what you're looking for</span>
        <div className="shop-category__grid">
          {CATEGORY_ITEMS.map(cat => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="shop-category__card"
            >
              <span className="shop-category__card-icon">{cat.icon}</span>
              <span className="shop-category__card-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
