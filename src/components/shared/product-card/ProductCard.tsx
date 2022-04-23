import { CartIcon } from 'assets/cartIcon';
import { useProducts } from 'hooks/useProducts';
import Image from 'next/image';
import React from 'react';
import { IProduct } from 'types/IProduct';
import { strings } from 'utils/strings';

export const ProductCard = ({ product }: { product: IProduct }) => {
    const { dispatch } = useProducts();

    const addToCart = () => {
        dispatch({ type: 'addToCart', payload: product.product_id });
    };

    return (
        <div className="flex flex-col space-y-3 items-center pb-5  font-sans">
            <div>
                <Image src={product.image_url} alt={product.title} width={420} height={420} />
            </div>
            <h2 className="font-medium text-lg uppercase self-start">{product.title}</h2>
            <p className="border-t border-b italic font-semibold opacity-60 w-full py-2 text-center">
                BDT {product.price}
            </p>
            <button
                className="text-primary flex justify-center items-center space-x-2 hover:underline"
                onClick={addToCart}
            >
                <CartIcon />
                <span>{strings.addToCart}</span>
            </button>
        </div>
    );
};
