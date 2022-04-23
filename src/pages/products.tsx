import { Layout, ProductCard, SectionTitle } from 'components';
import React from 'react';
import { strings } from 'utils/strings';

const ProductsPage = () => {
    return (
        <Layout>
            <SectionTitle title={strings.productPageTitle} />
            <div className="py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3.5 lg:gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Layout>
    );
};

export default ProductsPage;
