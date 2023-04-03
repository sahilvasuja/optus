
import Image from 'next/image';
import React from 'react';
import Credit from '../../public/Credit.png';
import { styles } from '../style';
import { Optushomes } from './optushomes';
import main from '.././main.module.css'
type Slide = {
  paragraph: string;
  text: string;
  image: string
};

type Props = {
  slide: Slide;
};

export const Exp = ({ slide }: Props) => {
  const Data = [
    {
      paragraph: 'Pay your rent at Ease',
      text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
      srcs: { Credit },
    },
    {
      paragraph: "Manage your repair",
      text: 'Easily report repairs and schedule appointments for a time that suits you, all in only a few minutes.',
      srcs: { Credit },
    },
    {
      paragraph: 'Easy Messaging',  
      text: 'Get in touch with our easy to use direct messaging feature.',
      srcs: { Credit }
    },
    {
        paragraph: 'Give Feedbacks',
        text:'With your rent balance available at your fingertips, monitoring and making payments can be done in app with ease at the simple tap of a button.',
        srcs: { Credit }
      },
      {
        paragraph: "Go Paperless",
        text: 'Have your voice heard! Fill in surveys in the app so we can improve our quality of service and get your thoughts.',
        srcs: { Credit }
      },
  ];
  return (
    
    <>
     
        <>
        <div  className={main.div}>
          <div className={main.heading}>{slide.paragraph}</div>  
          <p className={main.text}>{slide.text}</p>
        </div>
        <div className={main.girlimage}>
          <Image src={slide.image} alt={slide.paragraph} width={418}
            height={419} className={main.girllogo} />
        </div>
        </>
     
    </>    
  );
};
