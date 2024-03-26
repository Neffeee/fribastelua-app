"use client"
import Image from 'next/image'
import React from 'react'
import KiekotCard from '../components/KiekotCard'
import YksiKiekko from '../components/YksiKiekko'
import { useRouter } from "next/navigation";
const Etusivu = () => {

  const router = useRouter()
  return (
    <div className='max-container  underNavSpace'>
      <div className='flex'>
          
        <Image src="/images/frontpic2.png" alt="frontpic" height={300} width={1440}
            className='hidden md:block'/>
      </div>
      <div className='hidden md:block'>
      <h1 className='text-2xl m-10'>SUOSITTELEMME:</h1>
      <div className=' '>
           <div className='flex '>
              <YksiKiekko/>
              
           </div>
      </div>
      </div>
      <div className='flexCenter flex-col sm:flex-row gap-20  m-10'>
        <div className='relative cursor-pointer' onClick={() => router.push("/Kiekot")}>
        <Image src="/images/discs.jpg" alt="discs" width={400} height={350}  />
        <div className="absolute left-0 right-0 bottom-8 flex justify-center items-center">
        <p className="text-white text-5xl sm:text-2xl lg:text-5xl  font-bold">Kiekot</p>
        </div>
        </div>
        <div className='relative cursor-pointer' onClick={() => router.push("/Asusteet")}>
        <Image src="/images/mcbeth2.jpg" alt="shirt"  width={400} height={350}/>
        <div className="absolute left-0 right-0 bottom-8 flex justify-center items-center">
        <p className="text-white text-5xl sm:text-2xl lg:text-5xl  font-bold">Asusteet</p>
        </div>
        </div>
      <div className='relative cursor-pointer' onClick={() => router.push("/")}>
        <Image src="/images/bags3.jpg" alt="bags" width={400} height={350} />
        <div className="absolute left-8 bottom-8 flex justify-center items-center ">
        <p className="text-white text-5xl sm:text-2xl lg:text-5xl font-bold">Reput & <br/> Laukut</p>
        </div>
    </div>
      </div>
          
    </div>
  )
}

export default Etusivu
