// @ts-nocheck

import { PrivateRoute } from 'components';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { privateRoutes } from 'utils/constants';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <PrivateRoute protectedRoutes={privateRoutes}>
                <Component {...pageProps} />
            </PrivateRoute>
        </SessionProvider>
    );
}

export default MyApp;
