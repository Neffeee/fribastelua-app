
import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem';




const Ostoskori = ({searchParams}: {
  searchParams: {
    manufacturer: string;
    model: string;
    plastic: string;     
    price: number;
    imageURL:string;
    description: string;

};
}) => {

  
  
  return (
    <div className='max-container underNavSpace'>
   
      
      <div>
        <CartItem  />

      </div>

    </div>

  )
}




// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const Ostoskori: React.FC = () => {
//   // Sample product data
//   const initialProducts: Product[] = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 15 },
//     { id: 3, name: 'Product 3', price: 20 },
//   ];

//   // State to hold the cart items
//   const [cart, setCart] = useState<Product[]>([]);

//   // Add product to cart
//   const addToCart = (product: Product) => {
//     setCart(prevCart => [...prevCart, product]);
//   };

//   // Remove product from cart
//   const removeFromCart = (productId: number) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   return (
//     <div className='underNavSpace maxContainer flexCenter justify-between'>
//       <h2 className=''>Ostoskori</h2>
//       <div>
//         <h3>Tuotteet</h3>
//         <ul>
//           {initialProducts.map(product => (
//             <li key={product.id} className='p-20'>
//               {product.name} - ${product.price}
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//               <hr className='ml-10 mr-10 '/>    
//             </li>
            
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Cart</h3>
//         <ul>
//           {cart.map(item => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Ostoskori;
