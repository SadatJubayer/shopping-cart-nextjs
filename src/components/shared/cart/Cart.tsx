import { CartIcon } from 'assets/cartIcon';
import { useProducts } from 'hooks/useProducts';
import { useRouter } from 'next/router';
import React from 'react';

export const Cart = () => {
    const router = useRouter();

    const {
        state: { cartItems },
    } = useProducts();

    const toCartPage = () => {
        router.push('/cart');
    };

    return (
        <button onClick={toCartPage} className="fixed right-0 top-1/2 transform -translate-y-1/2">
            <div className="p-5 relative">
                <CartIcon />
                <p className="bg-primary text-black rounded-full h-6 w-6 flex justify-center items-center absolute top-1 right-3 text-sm">
                    {cartItems.length}
                </p>
            </div>
        </button>
    );
};
