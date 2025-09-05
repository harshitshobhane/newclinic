import HeroSection from '@/components/hero-section'
import WaitlistForm from '@/components/waitlist-form'
import TrustSection from '@/components/trust-section'
import ServicesShowcase from '@/components/services-showcase'
// import Footer from '@/components/footer'
import FloatingCTA from '@/components/floating-cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Waitlist Section */}
      <section id="waitlist-form" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <WaitlistForm />
        </div>
      </section>
      
      <TrustSection />
      <ServicesShowcase />
      {/* <FloatingCTA /> */}
    </main>
  )
}
