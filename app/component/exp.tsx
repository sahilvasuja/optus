// import Image from 'next/image';
// import React from 'react'
// import Layer from '../../public/Layer.png';
// import Credit from '../../public/Credit.png';

// export const Exp = () => {
//   return (
//     <>
//     <div className='justify-between flex flex-col '>
//    <Image src={Layer} alt={''} >
//    </Image>
//     <div>
//         <h2>
//         Go Paperless
//         </h2>
//         <p>Have your voice heard! Fill in surveys in the app so we can improve our quality of service and get your thoughts</p>
//     </div>
//     <Image src={Credit} alt={''} />
//     </div>

//     </>
//   )
// }
import Image from 'next/image';
import React from 'react';
import Credit from '../../public/Credit.png';
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
       {/* {Data.map((item, index) => ( */}
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
      {/* ))}  */}
    {/* <div className={main.div}>
        <div className={main.heading}>Pay your rent at Ease</div>  
        <p className={main.text}>
        With your rent balance available at your fingertips, monitoring and making 
        payments can be done in app with ease at the simple tap of a button.</p>
    </div>
    <div className={main.girlimage}>
      <Image src={Credit} alt="" className={main.girllogo}/>
    </div> */}
    </>    
  );
};
