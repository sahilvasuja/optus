
import Image from 'next/image';
import React from 'react';
import Credit from '../../public/Credit.png';
// import { styles } from '../style';
// import { Optushomes } from './optushomes';
import main from './main.module.css'
type Slide = {
  paragraph: string;
  text: string;
  image: string
};

type Props = {
  slide: Slide;
};

export const Exp = ({ slide }: Props) => {
  return (
    
    <>
     
        <>
        <div  className={main.sliderdata}>
          <div className={main.heading}>{slide.paragraph}</div>  
          <p className={main.text}>{slide.text}</p>
        </div>
        <div className={main.girldiv}>
          <Image src={slide.image} alt={slide.paragraph} width={418}
            height={419} className={main.girllogo} />
        </div>
        </>
     
    </>    
  );
};
