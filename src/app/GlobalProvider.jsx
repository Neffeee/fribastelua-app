import {CartProvider} from '@/app/context/CartContext'

export function GlobalProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}