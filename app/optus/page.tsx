import React from 'react'
import Image from 'next/image'
// import main from '../../main.module.css'
import main from './main.module.css'
export const page = () => {
  return (
    // <div>hlo</div>
    <div className='bg-green-700'>
    
         <Image
          src="/optushomes.svg"
          alt="optushomes.js Logo"
          className={main.optuslogo}
          priority
        />
    </div>
  )
}
