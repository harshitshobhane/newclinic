"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Zap, Star, ArrowRight, CheckCircle, Users, Award } from "lucide-react"
import { FamilyInsuranceAnimation, BirdAnimation, DoctorAnimation } from "@/components/lottie-animations"
import { useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-form')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Doctor Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="relative order-2 lg:order-1 hidden lg:block"
          >
            <div className="relative">
              {/* Doctor Animation */}
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <DoctorAnimation className="w-full h-full" />
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-3 animate-pulse">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-base font-semibold text-green-800">Live Consultation Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="text-center lg:text-left order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-primary-200/50 rounded-full px-8 py-4 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <Star className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Coming Soon to North Palm Beach</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="relative mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.9] mb-4">
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                  OurTopClinic
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-800 font-light">
                  Primary Care
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-600 font-light">
                  & Wellness
                </span>
              </h1>
              
              {/* Floating bird animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.6 }}
                className="absolute -top-6 right-10 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-90"
              >
                <BirdAnimation className="w-full h-full" />
              </motion.div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="font-bold text-primary-600">We're thrilled to announce our NEW clinic opening in North Palm Beach!</span> 
              <span> Experience comprehensive healthcare with </span>
              <span className="font-semibold text-secondary-600"> Primary Care</span>, 
              <span className="font-semibold text-primary-600"> IV Hydration</span>, 
              <span className="font-semibold text-secondary-600"> Weight Loss</span>, and 
              <span className="font-semibold text-primary-600"> Aesthetics</span> — 
              all conveniently located under one roof.
            </motion.p>


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-primary-600 rounded-3xl p-5 sm:p-6 lg:p-8 text-white shadow-2xl">
                <div>
                  <div className="text-center lg:text-left mb-5 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      Founding Patient Program
                    </h2>
                    <p className="text-base sm:text-lg opacity-90">
                      Join our exclusive founding patient program and receive a <span className="font-bold text-yellow-300">FREE consultation</span> plus priority access to all services
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Button 
                      size="xl" 
                      onClick={scrollToWaitlist}
                      className="bg-white text-primary-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-6 lg:px-8 py-4 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group font-semibold cursor-pointer w-full sm:w-auto"
                    >
                      <span className="hidden sm:inline">Claim Your Free Consultation</span>
                      <span className="sm:hidden">Get Free Consultation</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="text-center sm:text-left">
                      <div className="text-sm opacity-75">Limited to first 50 patients</div>
                      <div className="text-xs opacity-60">No commitment required</div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
