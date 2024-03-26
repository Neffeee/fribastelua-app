import Image from 'next/image'
import React from 'react'

const Kiekko = () => {
  return (
    <div className=' max-container hidden sm:block'>
    <ul className=' '> 
        
            <li className='w-[180px] h-full pt-2'>
                 
                    <Image src="/images/md1pink.webp" alt="image" width={200} height={200}/>
                 <div className='max-w-xs flex-col'>
                  <h5 className='text-white text-xl truncate pt-5'>Discmania C-Line</h5>
                  <h5 className='text-white text-xl truncate'>MD1</h5>
                  <span className="text-xl text-gray-900 dark:text-white font-bold">22.90€</span>
                </div>
                <div className=' mt-3 flex flex-col'>

                                       
                </div>
                
            </li>
            
        
    </ul>
   
</div>
  )
}

export default Kiekko
