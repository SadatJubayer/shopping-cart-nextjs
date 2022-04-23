import React from 'react';

interface ISectionTitleProps {
    title: string;
}

export const SectionTitle = ({ title }: ISectionTitleProps) => {
    return (
        <h1 className="text-2xl text-left pt-2 font-semibold title relative inline-block">
            {title}
        </h1>
    );
};
