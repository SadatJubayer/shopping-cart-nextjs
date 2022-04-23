import { useProducts } from 'hooks/useProducts';
import Image from 'next/image';
import React from 'react';
import { ICartItem } from 'types/ICartItem';

export const CartItemCard = ({ cartItem: { product, count } }: { cartItem: ICartItem }) => {
    const { dispatch } = useProducts();

    const onRemoveItem = () => {
        dispatch({ type: 'removeFromCart', payload: product.product_id });
    };

    return (
        <div className="grid grid-cols-4 my-5 py-2.5">
            <div className="flex flex-col items-center">
                <div className="h-16 w-16 ">
                    <Image src={product.image_url} alt={product.title} width={420} height={420} />
                </div>
                <div className="text-primary"> {product.title}</div>
            </div>
            <div className="text-xl font-semibold">{product.price}</div>
            <div>{count}</div>
            <button onClick={onRemoveItem} className="text-red-500">
                Remove
            </button>
        </div>
    );
};
