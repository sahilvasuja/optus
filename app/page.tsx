"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import Slider from './component/slider'
import main from './main.module.css'
import React, { useState } from "react";
const inter = Inter({ subsets: ['latin'] })
import {Carousal} from './component/slider/Carousal';
import Layer from '../public/Layer.png'
export default function Home() {
 
  return (
   <>
    <div className={main.outer}>
      <div className={main.inner}>
        <div>
        <Image src={Layer} alt="" className={main.optuslogo} />
        </div>
      <Carousal />
      </div>
    </div>
  </>
   
  )
}
