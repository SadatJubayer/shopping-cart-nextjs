import { Spinner } from 'components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const HomePage = () => {
    const router = useRouter();

    const { status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
        if (status === 'authenticated') {
            router.push('/products');
        }
    }, [status, router]);

    return <Spinner />;
};

export default HomePage;
