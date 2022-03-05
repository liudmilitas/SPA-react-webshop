import { useEffect, useState } from 'react';


function useCartHandler() {

    const [cart, setCart] = useState( () => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return [cart, setCart];
};

export default useCartHandler;