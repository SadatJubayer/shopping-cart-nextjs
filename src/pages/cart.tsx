import { CartItemCard, Layout, SectionTitle } from 'components';
import { useProducts } from 'hooks/useProducts';
import Link from 'next/link';
import React from 'react';
import { getTotalCount } from 'utils/helpers';
import { strings } from 'utils/strings';

const CartPage = () => {
    const {
        state: { cartItems },
    } = useProducts();
    return (
        <Layout>
            <SectionTitle title={strings.yourCart} />

            <p className="py-5 text-blue-500">
                <Link href="/products">&#8592; Go to Home</Link>
            </p>

            <p className="py-5">
                This is your cart based on your item you want to buy. Please check all the item
                carefully before proceeding.
            </p>

            <div className="p-5 border border-primary text-center">
                <div className="grid grid-cols-4">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Action</p>
                </div>
                {cartItems.map((cartItem) => (
                    <CartItemCard key={cartItem.product.product_id} cartItem={cartItem} />
                ))}
            </div>

            <div className="flex items-center justify-between font-semibold text-lg mt-8 p-2.5 border-t border-b border-primary">
                <p>Total</p>
                <p>BDT {getTotalCount(cartItems)}</p>
            </div>
        </Layout>
    );
};

export default CartPage;
