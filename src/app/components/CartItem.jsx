"use client"
import React, { useState, useContext } from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import CartContext from '../context/CartContext';
import { FaTrashAlt } from "react-icons/fa";



const CartItem = () => {
// Tuotemäärän lisäys
 const increaseQty = (cartItem) => {
  const newQty = cartItem?.quantity + 1
  const item = { ...cartItem, quantity: newQty}

  addItemToCart(item)
 }
 // Tuotemäärän miinustus
 const decreaseQty = (cartItem) => {
  const newQty = cartItem?.quantity - 1;
  const item = { ...cartItem, quantity: newQty };

  if (newQty <= 0) return;

  addItemToCart(item);
};
 
  const { addItemToCart, cart, deleteItemFromCart } = useContext(CartContext);



// Kokonaishinnan lasku reduce metodilla, joka ottaa vastaan 2 parametriä. totaliin tallennetaan juokseva laskutoimitus. cartItem kertoo sen hetkisen itemin mitä käsitellään. 
  const totalPrice = cart?.cartItems?.reduce((total, cartItem) => {
    return total + (cartItem.price * cartItem.quantity); // Lasketaan sen hetkisen cartItemin yhteishinta ja se lisätään totaliin.
  }, 0);

  
  return (
    
 <div className=''>
    <div>
        {cart?.cartItems && cart.cartItems.length > 0 ? (

      <h1 className='text-4xl flexCenter p-10'>OSTOSKORI</h1>
      ) : (
      <h1 className='text-4xl flexCenter p-10'>OSTOSKORI  ON TYHJÄ</h1>
      )}
  </div>
    <div className='text-end mr-10'><h2 className=''>{cart?.cartItems?.length || 0} Tuotetta ostoskorissa</h2></div>
    {cart?.cartItems?.length > 0 && (

      
      <div className=''>
        {cart?.cartItems?.map(cartItem => (

            <div className='flexBetween'>
                <div className='m-10'>
                  <img src={cartItem.image} width={150}/>
                </div>
                <div className=''>
                  <h1 className='text-sm sm:text-xl'>{cartItem.name}</h1>
                  <h1 className='text-sm sm:text-xl'>{cartItem.model} {cartItem.plastic}</h1>
                </div>
                <div className="w-[96px] m-5">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold sm:text-lg ">
                              {formatCurrency(cartItem.price * cartItem.quantity)}
                            </p>
                            <small className="text-gray-400">
                              {" "}
                              {formatCurrency(cartItem.price)} / per tuote{" "}
                            </small>
                          </div>
                        </div>
                
                <div>
                  <button className='tracking-wider regular-14 bg-amber-600 rounded-lg mr-10 py-3 px-5'
                  onClick={() => deleteItemFromCart(cartItem?.product)}
                  ><FaTrashAlt size={25} /></button>
                </div>
              
            </div>
        ))}
          <hr className='maxContainer mx-10 my-5'/>
         <div className='ml-10 text-2xl'>
             <h1>Yhteishinta: {formatCurrency(totalPrice)}</h1>
        </div>
        <div>
          <button className=' ml-10 mt-10 leading-5 tracking-wider text-xl bg-amber-600 rounded-lg p-2'>KASSALLE</button>
        </div>
      </div>
    )}
</div>
    
  )
}

export default CartItem
