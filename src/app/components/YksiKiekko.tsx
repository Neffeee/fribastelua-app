import Image from 'next/image'
import React from 'react'
import { DISC_INFO } from '../constants'
import Link from "next/link"

// Etusivun suosittelemme kiekot renderöity nyt näin. Jatkossa voisi tehdä niin, että esim arvosteluiden mukaan renderöidään parhaat.

const YksiKiekko = () => {
  return (
    <div className=' max-container mb-10'>
        
  
          <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>

            {DISC_INFO.map((item) => (
              <div className='flex flex-col p-5 items-center'>
                    <Image src="/images/md1pink.webp" alt="image" width={200} height={200}/>
                            <div className='max-w-xs '>
                                <h5 className='text-white text-xl truncate pt-5'>{item.label} </h5>
                                <h5 className='text-white text-xl truncate'>{item.plastic} {item.model}</h5>
                                <span className="text-xl text-gray-900 dark:text-white font-bold">{item.price}</span>
                            </div>
           </div>
 
 ))}
          </div>
                 
              
</div>
  )
}

export default YksiKiekko
