// @ts-nocheck

import { PrivateRoute } from 'components';
import { ProductProvider } from 'contexts/ProductContext';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { privateRoutes } from 'utils/constants';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <ProductProvider>
                <PrivateRoute protectedRoutes={privateRoutes}>
                    <Component {...pageProps} />
                </PrivateRoute>
            </ProductProvider>
        </SessionProvider>
    );
}

export default MyApp;
