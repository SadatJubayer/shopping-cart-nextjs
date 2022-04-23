import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input = ({ name, ...rest }: IInputProps) => {
    return (
        <input
            name={name}
            className="bg-transparent flex-1 border focus:outline-none focus:border-gray-600 p-2 text-gray-600 bg-white placeholder-gray-400 w-full"
            {...rest}
        />
    );
};
