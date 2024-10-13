import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
