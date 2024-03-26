"use client"

import { NAV_LINKS } from '../constants';
import Image from "next/image"
import Link from "next/link"
import React, { useState, useContext } from 'react';
import SearchInput from "./SearchInput"
import CartContext from '../context/CartContext';
import { BsCart4 } from "react-icons/bs";


// Isolle ruudulle oleva navibaari.

const DesktopNav = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;


  return (
<div className='hidden md:block md:fixed md:top-0 md:left-0 md:right-0 md:z-50 bgColor'>
  <div className="hidden md:block flexCenter max-container ">
        
        <nav className="flexBetween  
                        padding-container relative z-30 ">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={150}
          className=""
          />
          
        </Link>
        <ul className="h-full gap-12 flex tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}
            className="regular-14 md:regular-16 flexCenter cursor-pointer pb-1.5 
            transition-all hover:font-bold">
              
              {link.label === "Ostoskori" ? (
              <>
                {<BsCart4 size={25}/>}{""}
                <span className="text-sm flex flex-row">({cartItems?.length || 0}) </span>
              </>
      ) : (
        link.label
      )}


            </Link>
          ))}
        </ul>
        <div className="lg:flex flex-col items-center gap-2 hidden">
          <Image src="/images/user.png" alt="user" width={50} height={50} />
          <button className="buttonUI">Kirjaudu sisään</button>
        </div>

        </nav>                   
        <SearchInput />
          <hr className='ml-10 mr-10 '/>
      </div>
</div>
      
  )
}

export default DesktopNav
