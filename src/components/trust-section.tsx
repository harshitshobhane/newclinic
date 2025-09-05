"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, Heart, Stethoscope, Clock } from "lucide-react"
import { FamilyInsuranceAnimation, HospitalAnimation } from "@/components/lottie-animations"

export default function TrustSection() {
  const trustItems = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "HIPAA-Compliant",
      description: "Your privacy and data security are our top priorities"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary-600" />,
      title: "Licensed Professionals",
      description: "Medical Doctor, Licensed Nurse Practitioners & Registered Nurses"
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary-600" />,
      title: "Patient-First Care",
      description: "Every decision we make puts your health and wellbeing first"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary-600" />,
      title: "Locally Owned",
      description: "Women-owned clinic serving the North Palm Beach community"
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Simple & Accessible",
      description: "No complicated processes - just quality healthcare when you need it"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary-600" />,
      title: "Affordable Care",
      description: "Transparent pricing that won't break the bank"
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">OurTopClinic</span>?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed font-medium">
            <span className="font-bold text-primary-600">OurTopClinic</span> is building something special in North Palm Beach — a healthcare experience 
            that's both professional and personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group w-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-gray-50 rounded-full group-hover:bg-primary-50 transition-colors duration-300 group-hover:scale-110 transform">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
              Comprehensive <span className="text-primary-600">Family Care</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium px-2">
              At OurTopClinic, we believe healthcare should be accessible for the entire family. 
              From primary care to specialized treatments, we're here to support your family's 
              health journey every step of the way.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-2">
              <div className="bg-primary-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-primary-700 font-semibold text-sm sm:text-base lg:text-lg border border-primary-200">
                All Ages Welcome
              </div>
              <div className="bg-secondary-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-secondary-700 font-semibold text-sm sm:text-base lg:text-lg border border-secondary-200">
                Family Plans Available
              </div>
              <div className="bg-primary-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-primary-700 font-semibold text-sm sm:text-base lg:text-lg border border-primary-200">
                Same-Day Appointments
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <FamilyInsuranceAnimation className="w-full h-64 sm:h-80" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
