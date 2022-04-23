import { CartIcon } from 'assets/cartIcon';
import Image from 'next/image';
import React from 'react';

export const ProductCard = () => {
    return (
        <div className="flex flex-col space-y-3 items-start pb-5  font-sans">
            <div>
                <Image
                    src="https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0003_m126200-0020-datejust_portrait.jpg?imwidth=420"
                    alt="Picture of the author"
                    width={420}
                    height={420}
                />
            </div>
            <h2 className="font-medium uppercase">Product Name</h2>
            <p className="border-t border-b italic font-semibold w-full py-2">BDT 100.00</p>
            <button className="text-primary flex justify-center items-center space-x-2">
                <CartIcon />
                <span> Add to Cart</span>
            </button>
        </div>
    );
};
