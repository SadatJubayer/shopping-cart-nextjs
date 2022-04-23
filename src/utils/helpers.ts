import { ICartItem } from 'types/ICartItem';

export const getTotalCount = (cartItems: ICartItem[]) => {
    return cartItems.reduce((total, item) => {
        return total + Number(item.product.price) * Number(item.count);
    }, 0);
};
