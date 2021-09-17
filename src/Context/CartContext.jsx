import { useContext, useState, createContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, qnt) => {
    setCart([...cart, {item, qnt}])
  }

  const removeItem = (id) => {};

  const clear = () => setCart([]);

  const isInCart = () => {}


    return <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider