"use client"
import React, { useEffect, useState } from 'react'
import KiekotCard from '../components/KiekotCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';


interface DiscData {
  ProductID: number;
  Manufacturer: string;
  Model: string;
  Plastic: string;
  Price: number;
  Quantity: number;
  Description: string;
  ImageURL: string;
  addToCart: (product: DiscData) => void;
}



const page = () => {

  const router = useRouter()
  const [data, setData] = useState<DiscData[]>([]);
  
  const [selectedDisc, setSelectedDisc] = useState<DiscData | null>(null);
 
  const [cartItems, setCartItems] = useState<DiscData[]>([]);

  // Function to add a product to the cart
  const addToCart = (product: DiscData) => {
    setCartItems((prevCart) => [...prevCart, product]);
    
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/Kiekot');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

    // console.log('Data: ', data) //logattu tuleeko data databasesta.
  return (
    <div className='underNavSpace'>
        <div className='lg:flex lg:flex-row hidden md:flexCenter md:hidden lg:gap-10 mg:gap-5 mb-10 pt-20 '>
          <Image src="/images/latitude.webp" alt="latitudelogo" width={100} height={100}/>
            <Image src="/images/discmania.png" alt="dmlogo" width={100} height={100}/>
            <Image src="/images/mvp.png" alt="mvplogo" width={100} height={100}/>
            <Image src="/images/discraft.png" alt="discraftlogo" width={100} height={100}/>
            <Image src="/images/innova.png" alt="innovalogo" width={100} height={100}/>
            <Image src="/images/clashdiscs.png" alt="dmclasdiscslogo" width={100} height={100}/>
            <Image src="/images/westside.png" alt="westsidelogo" width={100} height={100}/>
            <Image src="/images/prodigy.webp" alt="prodigylogo" width={100} height={100}/>
        </div>
        <div className='flex justify-center mt-20'>
          <div className='maxContainer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
            {data.map(product => (
                  <div className='pb-5'
                  key={product.ProductID}
                  >
                    <KiekotCard   product={product} addToCart={addToCart}
                    
                    
                    />
                  </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default page
