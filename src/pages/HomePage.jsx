import { ContactForm } from '../components/home/ContactForm'
import { Hero } from '../components/home/Hero'
import { Testimonies } from '../components/home/Testimonies'

export const HomePage = () => {
  return (
    <section className="page">
      <Hero />
      <Testimonies />
      <ContactForm />
    </section>
  )
}
