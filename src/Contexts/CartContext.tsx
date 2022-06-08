import { createContext } from "react"

export interface Cart {
    image: string;
    title: string;
    inCart: string;
}

export type CartContext = {
  cart: Cart;
  setCart:(c: Cart) => void;
}
export default createContext<CartContext>({
  cart: {image: '', title: '', inCart: ''},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCart: () => {},
})
