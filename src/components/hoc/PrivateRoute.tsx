import { Spinner } from 'components/shared/spinner/Spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IPrivateRouteProps {
    children: React.ReactNode;
    protectedRoutes: string[];
}

export const PrivateRoute = ({ protectedRoutes, children }: IPrivateRouteProps) => {
    const router = useRouter();
    const { status } = useSession();

    const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (status !== 'loading' && status !== 'authenticated' && pathIsProtected) {
            router.push('/');
        }
    }, [status, router, pathIsProtected]);

    if (status === 'loading' && pathIsProtected) {
        return <Spinner />;
    }

    return children;
};
