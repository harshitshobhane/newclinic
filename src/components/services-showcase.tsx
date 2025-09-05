"use client"

import { motion } from "framer-motion"
import { HospitalAnimation } from "@/components/lottie-animations"
import { Stethoscope, Heart, Zap, Star, Shield, Users } from "lucide-react"

export default function ServicesShowcase() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary-600" />,
      title: "Primary Care",
      description: "Comprehensive healthcare for all ages with experienced medical professionals",
      features: ["Annual Checkups", "Chronic Disease Management", "Preventive Care"]
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary-600" />,
      title: "IV Hydration",
      description: "Quick wellness treatments to boost your energy and immune system",
      features: ["Vitamin Infusions", "Hydration Therapy", "Energy Boosts"]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Weight Loss",
      description: "Medical-guided weight management programs with proven results",
      features: ["Personalized Plans", "Medical Supervision", "Lifestyle Coaching"]
    },
    {
      icon: <Star className="w-8 h-8 text-secondary-600" />,
      title: "Aesthetics",
      description: "Professional cosmetic treatments to enhance your natural beauty",
      features: ["Botox & Fillers", "Skin Treatments", "Anti-Aging Solutions"]
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Comprehensive Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From routine checkups to specialized treatments, OurTopClinic offers everything 
            you need for optimal health and wellness under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Services List */}
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gray-50 rounded-lg group-hover:bg-primary-50 transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-primary-50 text-primary-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hospital Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <HospitalAnimation className="w-full h-64 sm:h-80 md:h-96" />
            <div className="mt-4 sm:mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                State-of-the-Art Facility
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                Modern equipment and comfortable environment for the best care experience
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
