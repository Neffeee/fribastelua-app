
import { useRouter } from 'next/navigation';
import { formatCurrency } from '../utils/formatCurrency';
import Link from 'next/link'
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';


type DiscProps = {
    ProductID: number
    Manufacturer: string
    Price: number
    Model: string
    Plastic: string
    ImageURL: string
    Description: string
    Quantity: number
    addToCart: (product: DiscProps) => void
    // addItemToCart: (product: DiscProps) => void;
  
  }
  // ProductID, Manufacturer, Model, Plastic, Price, ImageURL, Description, Quantity 

const KiekotCard = ( { product, addToCart }: { product: DiscProps; addToCart: (product: DiscProps) => void }) => {
    const { addItemToCart } = useContext(CartContext);
    const router = useRouter();
    const defaultImage = 'images/notfound.jpg';
   
    const addToCartHandler = () => {
      addItemToCart({
        product: product.ProductID,
        name: product.Manufacturer,
        price: product.Price,
        image: product.ImageURL,
        plastic: product.Plastic,
        model: product.Model,
        description: product.Description,
      });
    };

      
      

  return (
    <>
                {/* Annetaan pathname jonne klikatessa ohjaataan. Query vie datan mukanaan. */}
                <Link
                href={{
                  pathname: "/KiekkoSivu",
                  query: {
                    manufacturer: product.Manufacturer,
                    model: product.Model,
                    price: product.Price,
                    plastic: product.Plastic,
                    imageURL: product.ImageURL,
                    description: product.Description,
                  }
                }}
                 className='flex flex-col gap-2 cursor-pointer max-w-[220px] '>
                     {product.ImageURL ? (<img src={product.ImageURL} className='w-48 mb-5' ></img>)
                    : (
                      <img src={defaultImage} className='w-48 mb-5' />
                    )
                    }
                    
                     <div className='max-w-[400px]'>
                      <h5 className='text-white text-xl truncate'>{product.Manufacturer} {product.Plastic} </h5>
                      <h5 className='text-white text-xl truncate'>{product.Model}</h5>
                      <span className="text-xl text-gray-900 dark:text-white">{formatCurrency(product.Price)}</span>
                    </div>
      
                </Link>
                
                    <button className='tracking-wider  bg-amber-600 rounded-lg py-2 text-lg' 
                    onClick={addToCartHandler}
                    >LISÄÄ OSTOSKORIIN</button>
                    
      </>         
            

  )
}

export default KiekotCard

