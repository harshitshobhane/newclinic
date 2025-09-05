"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const logo = '/logo.svg';

const CardNav = dynamic(() => import('./CardNav'), { ssr: false })

const OurTopClinicNav = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  const items = [
    {
      label: "Services",
      bgColor: "#22C55E",
      textColor: "#fff",
      links: [
        { label: "Primary Care", ariaLabel: "Primary Care Services", href: "#services" },
        { label: "IV Hydration", ariaLabel: "IV Hydration Services", href: "#services" },
        { label: "Weight Loss", ariaLabel: "Weight Loss Programs", href: "#services" },
        { label: "Aesthetics", ariaLabel: "Aesthetic Services", href: "#services" }
      ]
    },
    {
      label: "About", 
      bgColor: "#16A34A",
      textColor: "#fff",
      links: [
        { label: "Our Mission", ariaLabel: "Our Mission", href: "#about" },
        { label: "Location", ariaLabel: "Clinic Location", href: "#about" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#15803D", 
      textColor: "#fff",
      links: [
        { label: "Book Appointment", ariaLabel: "Book an Appointment", href: "#waitlist" },
        { label: "Phone", ariaLabel: "Call us", href: "tel:+15551234567" },
        { label: "Email", ariaLabel: "Email us", href: "mailto:info@ourtopclinic.com" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="OurTopClinic Logo"
      items={items}
      baseColor="#fff"
      menuColor="#22C55E"
      buttonBgColor="#22C55E"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default OurTopClinicNav;
