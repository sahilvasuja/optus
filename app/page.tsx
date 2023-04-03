"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import Slider from './component/slider'
import main from './main.module.css'
import React, { useState } from "react";
const inter = Inter({ subsets: ['latin'] })
import { Written } from '@/lib/written'
import Slider from './component/Slider';
import { Exp } from './component/exp';
import { Optushomes } from './component/optushomes';
// import { styles } from './style'
export default function Home() {
 
  return (
   <>

{/* <div className={main.outer}> */}
  <div className={main.inner}>
    <div className={main.content}>
      <div>
      <Optushomes />
      </div>
      <Slider />
    </div>
  </div>
{/* </div> */}
          </>
   
  )
}
