"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Clock, Users, Star, ArrowRight } from "lucide-react"

const interestOptions = [
  "I'm looking for a new Primary Care Provider",
  "I want IV Hydration or vitamin therapy",
  "I'm interested in a Weight Loss Program",
  "I'm ready for Aesthetic services (Botox, fillers, etc.)",
  "I'm just curious, tell me more!"
]

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [spotsLeft, setSpotsLeft] = useState(47) // Simulate decreasing spots

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.interest,
          message: formData.message
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      const result = await response.json()
      console.log("Email sent successfully:", result)
      
      setIsSubmitted(true)
      setSpotsLeft(prev => Math.max(0, prev - 1))
    } catch (err) {
      console.error("Error sending email:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="bg-gradient-to-br from-white to-primary-50 rounded-3xl p-12 shadow-2xl text-center max-w-lg mx-auto border border-primary-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.6 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Welcome to OurTopClinic! 🎉
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Thank you for joining our waitlist! You're now one of our founding patients. 
          We'll contact you soon with details about your <span className="font-bold text-primary-600">FREE consultation</span>.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Founding Patient Benefits</span>
          </div>
          <ul className="text-sm space-y-1">
            <li>✓ Free initial consultation</li>
            <li>✓ Priority scheduling</li>
            <li>✓ Special founding member rates</li>
            <li>✓ Early access to new services</li>
          </ul>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Urgency Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          type: "spring",
          bounce: 0.4
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-white text-center shadow-2xl overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full"
        />
        
        {/* Pulsing border effect */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-2 border-white/30 rounded-2xl"
        />
        
        <div className="relative z-10">
          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.span 
                className="font-bold text-base sm:text-lg"
                animate={{
                  color: ["#ffffff", "#ffeb3b", "#ffffff"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Only {spotsLeft} spots left!
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <motion.span 
                className="text-sm sm:text-base font-medium"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Join {50 - spotsLeft} others
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Animated progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full w-1/3 bg-white/60 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-primary-100">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Secure Your <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Free Consultation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 mb-6"
          >
            Join our founding patients and get priority access to comprehensive healthcare
          </motion.p>
          
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-8 h-0.5 ${
                    currentStep > step ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Let's get to know you</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full h-12 text-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="w-full h-12 text-lg"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">What brings you to OurTopClinic?</h3>
                <div className="space-y-4">
                  {interestOptions.map((option, index) => (
                    <motion.label
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.interest === option
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={option}
                        checked={formData.interest === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-gray-700 font-medium">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Tell us about your health goals</h3>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your health goals, concerns, or any questions you have..."
                    rows={4}
                    className="w-full text-lg"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 mt-6"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between items-center mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="px-6 py-3"
            >
              Back
            </Button>
          )}
          
          <div className="flex-1" />
          
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!formData.name || !formData.email || !formData.phone}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white"
            >
              Next
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Securing Your Spot...
                </div>
              ) : (
                <>
                  🔥 Claim My Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs text-gray-500 text-center mt-6"
        >
          By submitting this form, you agree to receive communications from OurTopClinic. 
          We respect your privacy and will never share your information.
        </motion.p>
      </form>
    </motion.div>
  )
}
