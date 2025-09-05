"use client"

import Lottie from 'lottie-react'
import { useRef } from 'react'

// Import Lottie animation data directly from src/data
import onlineDoctorData from '../data/online-doctor.json'
import birdData from '../data/Bird.json'
import familyInsuranceData from '../data/Family_Insurance.json'
import hospitalData from '../data/Hospital.json'
import doctorData from '../data/DOCTOR.json'

// Online Doctor Animation Component
export function OnlineDoctorAnimation({ className = "" }: { className?: string }) {
  const animationRef = useRef<any>(null)

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={onlineDoctorData}
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

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={birdData}
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

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={familyInsuranceData}
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

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={hospitalData}
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

  return (
    <div className={`${className}`}>
      <Lottie
        lottieRef={animationRef}
        animationData={doctorData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
