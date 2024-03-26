"use client"
import Image from 'next/image'
import { formatCurrency } from '../utils/formatCurrency';
import { useRouter } from 'next/navigation';
import {  useContext } from 'react';
import CartContext from '../context/CartContext';


const page = ({ searchParams} ) => {
    const { addItemToCart } = useContext(CartContext);
    // Kuinka saada product data tänne. Sitten toimii tämä. ei toimi searchparamssilla.
    // const addToCartHandler = () => {
    //     addItemToCart({
    //       product: searchParams.ProductID,
    //       name: searchParams.Manufacturer,
    //       price: searchParams.Price,
    //       image: searchParams.ImageURL,
    //       plastic: searchParams.Plastic,
    //       model: searchParams.Model,
    //       description: searchParams.Description,
    //     });
    //   };
 
const router = useRouter()
   




  return (
    <main className='mt-[300px] max-container'>
        <div className='ml-10'>
            <button 
            className='tracking-wider text-lg bg-amber-600 rounded-lg p-3'
            onClick={() => router.push("/Kiekot")}
            >Takaisin</button>
        </div>
        <div className='flex p-10 '>
            <div className='flex-1 flex-col max-w-[700px]'>
                <h1 className='text-4xl mb-6'>{searchParams.manufacturer} {searchParams.plastic} {searchParams.model}</h1>
                <h4 className='max-w-[500px] leading-7 text-justify pt-5'>{searchParams.description}</h4>
                    <h3 className='pt-20 text-xl pb-5'>{searchParams.manufacturer} {searchParams.model}</h3>
                    <p className="text-xl text-gray-900 dark:text-white">{formatCurrency(searchParams.price)}</p>
                    <p className='py-2'>Paino:</p>
                        <div className='flex gap-2'>
                            <div className='weightButtons'>171</div>
                            <div className='weightButtons'>172</div>
                            <div className='weightButtons'>173</div>
                            <div className='weightButtons'>174</div>
                            <div className='weightButtons'>175</div>
                        </div>
                    <p className='py-2'>Saatavuus:</p>
                    <button className='buttonUI w-3/4 h-12'><p className='text-xl'>LISÄÄ OSTOSKORIIN</p></button>
            </div>
            <div className='top-0 hidden lg:block mx-10'>

            {searchParams.manufacturer === "Discmania" && <Image src="/images/discmania.png" alt="dmlogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Clash Discs" && <Image src="/images/clashdiscs.png" alt="cdlogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Prodigy" && <Image src="/images/prodigy.webp" alt="prodigylogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Discraft" && <Image src="/images/discraft.png" alt="discraftlogo" width={100} height={100}/>}
            {searchParams.manufacturer === "MVP" && <Image src="/images/mvp.png" alt="mvplogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Latitude" && <Image src="/images/latitude-webp" alt="latitudelogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Innova" && <Image src="/images/innova.pgn" alt="innovalogo" width={100} height={100}/>}
            {searchParams.manufacturer === "Westside" && <Image src="/images/westside.png" alt="wslogo" width={100} height={100}/>}
    
            </div>
            <div className='flex-1 pt-[50px]'>
                <img src={searchParams.imageURL} className='w-[500px] h-[500px]'/>
            </div>
        </div>
        
    </main>
  )
}

export default page
