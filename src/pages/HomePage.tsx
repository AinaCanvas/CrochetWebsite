import Hero from '../components/Hero'
import ShopByCategory from '../components/ShopByCategory'
import CustomOrdersBanner from '../components/CustomOrdersBanner'
import Testimonials from '../components/Testimonials'
import AboutSection from '../components/AboutSection'
import ContactStrip from '../components/ContactStrip'
import Newsletter from '../components/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <CustomOrdersBanner />
      <Testimonials />
      <AboutSection />
      <ContactStrip />
      <Newsletter />
    </>
  )
}