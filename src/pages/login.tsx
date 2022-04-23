import { Button, Layout, SectionTitle, Spinner } from 'components';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { strings } from 'utils/strings';

const LoginPage = () => {
    const router = useRouter();
    const { status } = useSession();

    const loginWithGithub = () => {
        signIn('github');
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/products');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <Spinner />;
    }

    return (
        <Layout bgBlack>
            <div className="mx-auto w-[90vw] max-w-[350px] flex flex-col justify-center space-y-5 h-screen">
                <SectionTitle title={strings.login} />
                <Button onClick={loginWithGithub} type="submit" text={strings.loginGit} />
            </div>
        </Layout>
    );
};

export default LoginPage;
