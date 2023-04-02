import React from 'react'
import Image from 'next/image'
import Layer from '../../public/Layer.png';
import main from ".././main.module.css"
export const Optushomes = () => {
  return (
      <Image src={Layer} alt="" className={main.optuslogo} />
  )
}
