import { Layout, ProductCard, SectionTitle } from 'components';
import { useProducts } from 'hooks/useProducts';
import React from 'react';
import { strings } from 'utils/strings';

const ProductsPage = () => {
    const {
        state: { products },
    } = useProducts();

    if (products.length === 0) {
        return <p>No Products found!</p>;
    }

    return (
        <Layout>
            <SectionTitle title={strings.productPageTitle} />
            <div className="py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3.5 lg:gap-5">
                {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </Layout>
    );
};

export default ProductsPage;
