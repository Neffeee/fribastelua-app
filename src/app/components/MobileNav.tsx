'use client'
import React from 'react'
import { useClickAway } from 'react-use'
import { useRef } from "react";
import { useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineShoppingCart} from 'react-icons/md'
import { IoHomeOutline } from "react-icons/io5";
import { GiFrisbee } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import Link from 'next/link';
import { NAV_LINKS } from '../constants';
import SearchInput from './SearchInput';
import CartContext from '../context/CartContext';
import { BsCart4 } from "react-icons/bs";


// Mobiililaitteiden navbaari
const MobileNav = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

	const [isOpen, setOpen] = useState(false)
  const  ref = useRef(null)

  // Käsittelee burgermenun avaamisen ja sulkemisen
  const handleMenuToggle = () => {
    setOpen((prev) => !prev)};
  // Asettaa isOpenin falseks kun klikataan jostain muualta sivua.
  useClickAway(ref, () => setOpen(false))

  return (
	
	<div ref={ref} className="flexCenter bgColor w-full sm:gap-20 md:hidden fixed right-0 top-0 z-50  ">
    
    <SearchInput/>
          <Link href="/Ostoskori"><span className='p-5 flex gap-1'><BsCart4 size={22}/>({cartItems?.length})</span></Link>
          <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div 
              initial={{opacity: 0}}
              animate= {{opacity: 1}}
              exit={{ opacity: 0}}
              transition={{duration: 0.2}}
              className='fixed left-0 shadow-4xl right-0 top-[5rem]
              p-5 pt-5 bg-neutral-950 border-b border-b-white/20'>
                
              <div className=''>
                <ul className="grid gap-12 tracking-widest">
                  {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className='border rounded-lg'>
                        <motion.li
                          initial={{scale: 0, opacity: 0}}
                          animate={{scale: 1, opacity: 1}}
                          transition={{
                            type:"spring",
                            stiffness: 260,
                            damping: 20,             
                          }}
                      
                          >
                            <a
                            onClick={handleMenuToggle}
                            className='flex items-center 
                            justify-between w-full p-4 rounded-x'
                            >         
                              <span className='flex gap-1 text-lg'>{link.label} </span>
                              {link.label === 'Ostoskori' && <MdOutlineShoppingCart />}
                              {link.label === 'Etusivu' && <IoHomeOutline/> }
                              {link.label === 'Kiekot' && <GiFrisbee/> }
                              {link.label === 'Asusteet' && <IoShirtOutline /> }
                              {link.label === 'Muut Tuotteet' && <HiOutlineDotsHorizontal /> }
                              {link.label === 'Laukut' && <GiSchoolBag /> }
                            </a>
                          </motion.li>
                    </Link>
                  ))}
                </ul>
              </div>
            </motion.div>
            )}

          </AnimatePresence>
    </div>
      
    
	
  )
}

export default MobileNav
