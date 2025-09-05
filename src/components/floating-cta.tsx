"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToForm = () => {
    const formElement = document.querySelector('#waitlist-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="relative">
              {/* Main FAB */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowOptions(!showOptions)}
                className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: showOptions ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {showOptions ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                </motion.div>
              </motion.button>

              {/* Options Menu */}
              <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-16 right-0 space-y-3"
                  >
                    {/* Join Waitlist */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToForm()
                        setShowOptions(false)
                      }}
                      className="bg-white text-primary-600 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Join Waitlist</span>
                    </motion.button>

                    {/* Call Now */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        window.open('tel:+15551234567')
                        setShowOptions(false)
                      }}
                      className="bg-white text-green-600 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Call Now</span>
                    </motion.button>

                    {/* Back to Top */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToTop()
                        setShowOptions(false)
                      }}
                      className="bg-white text-gray-600 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      <ArrowUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Back to Top</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Limited Spots Available!</div>
              <div className="text-xs opacity-90">Join 47 others on our waitlist</div>
            </div>
            <Button
              onClick={scrollToForm}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg shadow-lg"
            >
              Join Now
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
