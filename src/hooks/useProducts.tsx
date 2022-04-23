import { ProductContext } from 'contexts/ProductContext';
import React from 'react';

export const useProducts = () => {
    const context = React.useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
