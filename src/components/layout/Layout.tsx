import cn from 'classnames';
import React from 'react';
interface ILayoutProps {
    children: React.ReactNode;
    bgBlack?: boolean;
}

export const Layout = ({ children, bgBlack }: ILayoutProps) => {
    return (
        <div className={cn('min-h-screen font-serif', { 'bg-black text-white': bgBlack })}>
            <main className="container mx-auto"> {children}</main>
        </div>
    );
};
