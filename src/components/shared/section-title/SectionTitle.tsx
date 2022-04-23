import React from 'react';

interface ISectionTitleProps {
    title: string;
}

export const SectionTitle = ({ title }: ISectionTitleProps) => {
    return (
        <h1 className="text-4xl max-w-[200px] text-left pt-2 font-bold title relative inline-block font-sans">
            {title}
        </h1>
    );
};
