import React from 'react'
import Image from 'next/image'
export const Img = () => {
  return (
    <Image
    className="bg-green-500 m-auto"
    src="/rent.svg"
    alt="rent.js Logo"
    width={180}
    height={37}
    priority
    />
  )
}
