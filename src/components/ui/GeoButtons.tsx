"use client"

import React from "react"
import Link from "next/link"
import clsx from "clsx"

interface GeoButtonProps {
  href: string
  children: React.ReactNode
  variant?: "solid" | "outline"
}

export default function GeoButton({
  href,
  children,
  variant = "solid",
}: GeoButtonProps) {
  const baseStyles =
    "inline-block font-semibold rounded-full px-6 py-3 text-center transition-all duration-300 shadow-md"

  const styles = {
    solid: clsx(
      baseStyles,
      "bg-gradient-to-b from-brand.lightBlueStart to-brand.lightBlueEnd",
      "border-2 border-brand.gold text-brand.text hover:scale-[1.03]",
      "hover:shadow-lg hover:border-brand.gold/80"
    ),
    outline: clsx(
      baseStyles,
      "bg-transparent border-2 border-brand.gold text-brand.text",
      "hover:bg-gradient-to-b hover:from-brand.lightBlueStart hover:to-brand.lightBlueEnd",
      "hover:shadow-md"
    ),
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  )
}
