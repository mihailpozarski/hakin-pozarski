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

    const cartItemsTotalCount = () => {
        return cartList.reduce((acc, item) => acc + item.quantity, 0);
    };

    const addQuantityToItem = (id, value) => {
        const item = cartList.find((item) => item.id === id);
        item.quantity += value;
        setCart([...cartList]);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeFromCart, clearCart, isInCart, cartItemsTotalCount, addQuantityToItem }}>
        {props.children}
        </CartContext.Provider>
    );
}