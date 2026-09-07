import { Link } from 'react-router-dom'
import imgMrFrog from '../assets/Mr. Frogenton.png'
import imgSunflowerKeychain from '../assets/Sunflower Keychain.png'
import imgRoseBouquet from '../assets/Rose Bouqet.png'
import imgSunflowerBag from '../assets/Sunflower Bag.png'
import imgButterflyTop from '../assets/Butterfly Top.png'
import './ShopByCategory.css'

interface CategoryItem {
  label: string
  slug: string
  image: string
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    label: 'Amigurumi',
    slug: 'Amigurumi',
    image: imgMrFrog,
  },
  {
    label: 'Keychains',
    slug: 'Keychains',
    image: imgSunflowerKeychain,
  },
  {
    label: 'Flowers',
    slug: 'Flowers',
    image: imgRoseBouquet,
  },
  {
    label: 'Bags',
    slug: 'Bags',
    image: imgSunflowerBag,
  },
  {
    label: 'Accessories',
    slug: 'Accessories',
    image: imgButterflyTop,
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
              <img src={cat.image} alt={cat.label} loading="lazy" className="shop-category__card-image" />
              <span className="shop-category__card-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
