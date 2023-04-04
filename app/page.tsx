"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
// @ts-ignore
import styles from "./page.module.css";
// import Slider from './component/slider'
// @ts-ignore
import main from "./main.module.css";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { Carousal } from "./component/slider/Carousal";
// @ts-ignore
import Layer from "../public/Layer.png";
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
  );
}
