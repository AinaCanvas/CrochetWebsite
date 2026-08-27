import { useEffect } from 'react'
import PageBanner from '../components/PageBanner'
import ShopSection from '../components/ShopSection'

export default function ShopPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <PageBanner
        eyebrow="Browse our collection"
        title="Our Handmade Shop"
        subtitle="Every item is lovingly made to order. Pick your favourite, choose your size, and message us to get started."
      />
      <ShopSection />
    </>
  )
}
