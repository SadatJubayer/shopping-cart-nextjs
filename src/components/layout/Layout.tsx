import cn from 'classnames';
import React from 'react';

interface ILayoutProps {
    children: React.ReactNode;
    bgBlack?: boolean;
}

export const Layout = ({ children, bgBlack }: ILayoutProps) => {
    return (
        <div className={cn('min-h-screen font-serif', { 'bg-black text-white': bgBlack })}>
            <main className="container mx-auto p-2.5 md:p-5 lg:p-8"> {children}</main>
        </div>
    );
};
