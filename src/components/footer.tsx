"use client"

import { motion } from "framer-motion"
import { Heart, MapPin, Phone, Mail, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">OurTopClinic</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-md">
              <span className="font-semibold text-primary-400">OurTopClinic</span> is North Palm Beach's premier destination for comprehensive primary care, 
              wellness treatments, and aesthetic services. Locally owned and operated 
              with your health and wellbeing at the center of everything we do.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant • Licensed Professionals</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">North Palm Beach, FL</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Coming Soon</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">info@ourtopclinic.com</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Primary Care</li>
              <li>IV Hydration Therapy</li>
              <li>Weight Loss Programs</li>
              <li>Aesthetic Treatments</li>
              <li>Vitamin Shots</li>
              <li>Wellness Consultations</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 OurTopClinic. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with care for North Palm Beach</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
