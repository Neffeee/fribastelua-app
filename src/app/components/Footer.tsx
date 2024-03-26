import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


// Footteri componentti
const Footer = () => {
  return (
    <div className='max-container h-[450px]'>
        <hr className='m-10 '/>
        <div className='md:flex md:flex-row sm:flex-col '>
            <div className='footerBoxes'>
                <span className='footerHText'>Seuraa meitä:</span>
                <div className='flex p-5 gap-10 md:gap-5 lg:gap-10'>
                <FaFacebook size={40} className=''/>
                <FaInstagram size={40} className=''/>
                <FaYoutube size={40} className=''/>
                </div>
            </div>
            <div className='footerBoxes'>
                <span className='footerHText'>Myymälä</span>
                <span>Ma - Pe: 12-18</span>
                <span>La: 12-16</span>
                <span>Muuramentie 3</span>
                <span>40950 Muurame</span>
            </div>
            <div className='footerBoxes'>
                <span className='footerHText'>Apua ja ohjeita:</span>
                <span>Vinkkejä fribeegolffaajalle</span>
                <span>Apua kiekon valintaan</span>
                <span>Kiekkojen erilaisuudet</span>
                <span>Tilausohjeet</span>
            </div>
            <div className='footerBoxes'>
                <span className='footerHText'>Ota Yhteyttä:</span>
                <span>Friba Oy</span>
                <span>info@friba.fi</span>
                <span>+358 010 0023 222</span>
            </div>
        </div>
        <div className='mt-20 flexCenter'>
            <span className='p-5 text-lg'>All rights reserved | Juha 2024</span>
        </div>
    </div>
  )
}

export default Footer
