"use client"

import Lottie from 'lottie-react'
import { useRef, useEffect, useState } from 'react'

// Hook to load Lottie animation data
function useLottieData(filename: string) {
  const [animationData, setAnimationData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use dynamic import for better compatibility
    const loadAnimation = async () => {
      try {
        // Try different path approaches
        const paths = [
          `/${filename}`,
          `/public/${filename}`,
          `https://ourtopclinic-new.vercel.app/${filename}`,
          `http://localhost:3000/${filename}`
        ]
        
        let data = null
        for (const path of paths) {
          try {
            const response = await fetch(path)
            if (response.ok) {
              data = await response.json()
              break
            }
          } catch (e) {
            continue
          }
        }
        
        if (data) {
          setAnimationData(data)
        } else {
          console.error(`Could not load Lottie animation: ${filename}`)
        }
        setLoading(false)
      } catch (error) {
        console.error('Error loading Lottie animation:', error)
        setLoading(false)
      }
    }
    
    loadAnimation()
  }, [filename])

  return { animationData, loading }
}

// Online Doctor Animation Component
export function OnlineDoctorAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)
  const { animationData, loading } = useLottieData('online-doctor.json')

  if (loading) {
    return <div className={`${className} flex items-center justify-center`}>
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  }

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// Bird Animation Component (for wellness/nature theme)
export function BirdAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)
  const { animationData, loading } = useLottieData('Bird.json')

  if (loading) {
    return <div className={`${className} flex items-center justify-center`}>
      <div className="w-6 h-6 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  }

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// Family Insurance Animation Component
export function FamilyInsuranceAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)
  const { animationData, loading } = useLottieData('Family_Insurance.json')

  if (loading) {
    return <div className={`${className} flex items-center justify-center`}>
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  }

  if (!animationData) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl`}>
        <div className="text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Family Healthcare</h3>
          <p className="text-gray-500 text-sm">Comprehensive family care</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// Hospital Animation Component
export function HospitalAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)
  const { animationData, loading } = useLottieData('Hospital.json')

  if (loading) {
    return <div className={`${className} flex items-center justify-center`}>
      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  }

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// Doctor Animation Component
export function DoctorAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)
  const { animationData, loading } = useLottieData('DOCTOR.json')

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!animationData) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl`}>
        <div className="text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Expert Doctor</h3>
          <p className="text-gray-500 text-sm">Professional medical care</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
