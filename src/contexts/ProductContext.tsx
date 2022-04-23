import React, { createContext } from 'react';
import { ICartItem } from 'types/ICartItem';
import { IProduct } from 'types/IProduct';
import { getDummyProducts } from 'utils/dataProvider';

/* Types */
type State = {
    products: IProduct[];
    cartItems: ICartItem[];
};
type Action =
    | { type: 'setProducts'; payload: IProduct[] }
    | { type: 'addToCart'; payload: string }
    | { type: 'removeFromCart'; payload: string };
type Dispatch = (action: Action) => void;
type ProductProviderProps = { children: React.ReactNode };

export const ProductContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
    undefined
);

const defaultState = {
    products: getDummyProducts(),
    cartItems: [],
};

function productReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setProducts': {
            return { ...state, products: action.payload };
        }
        case 'addToCart': {
            const productId = action.payload;

            let newCartItems: ICartItem[] = state.cartItems;

            const isOnCart =
                state.cartItems.filter((cart) => cart.product.product_id === productId).length > 0;

            if (isOnCart) {
                newCartItems = state.cartItems.map((cartItem) => {
                    const newCount = cartItem.count + 1;
                    if (cartItem.product.product_id !== productId) return cartItem;
                    return { ...cartItem, count: newCount };
                });
                return { ...state, cartItems: newCartItems };
            } else {
                const theProduct = state.products.filter(
                    (product) => product.product_id === productId
                )[0];
                if (theProduct) {
                    newCartItems.push({ product: theProduct, count: 0 });
                }
                return { ...state, cartItems: newCartItems };
            }
        }
        case 'removeFromCart': {
            const productId = action.payload;
            const newCartItems = state.cartItems.filter(
                (cartItem) => cartItem.product.product_id !== productId
            );
            return { ...state, cartItems: newCartItems };
        }

        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [state, dispatch] = React.useReducer(productReducer, defaultState);
    const value = { state, dispatch };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
