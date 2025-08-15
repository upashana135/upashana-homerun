import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function(key = "cart"){
    const getStoredCart = () => {
        try {
            const storedCart = localStorage.getItem(key);
            return storedCart ? JSON.parse(storedCart) : [];
        } catch {
            return [];
        }
    };

    const [cart, setCart] = useState(getStoredCart);

    // Save cart to localStorage
    const saveCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem(key, JSON.stringify(newCart));
        window.dispatchEvent(new Event("cart-updated"));
    };

    // Add product or update quantity
    const addToCart = (product) => {
        const updatedCart = [...cart, { ...product, quantity: product.quantity || 1 }];
        saveCart(updatedCart);
    };

    // Update product quantity directly
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity > 20) {
            toast.error("Maximum 20 allowed per order. Please place another order if required.");
            return;
        }
        const updatedCart = cart
        .map((item) =>
            item.id === productId
            ? { ...item, quantity: Math.max(0, newQuantity) } 
            : item
        )
        .filter((item) => item.quantity > 0);
        saveCart(updatedCart);
    };

    useEffect(() => {
        const syncCart = () => setCart(getStoredCart());
        window.addEventListener("cart-updated", syncCart);
        return () => window.removeEventListener("cart-updated", syncCart);
    }, []);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return { cart, addToCart, updateQuantity, totalItems };
}