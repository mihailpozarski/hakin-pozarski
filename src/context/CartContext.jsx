import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = (props) => {
    const [cartList, setCart] = useState([]);
    
    const addToCart = (item) => {
        setCart([...cartList, item]);
    };
    
    const removeFromCart = (id) => {
        setCart(cartList.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id);
    };
    
    return (
        <CartContext.Provider value={{ cartList, addToCart, removeFromCart, clearCart, isInCart }}>
        {props.children}
        </CartContext.Provider>
    );
}