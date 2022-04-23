import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({ text, onClick = () => null, disabled = false, ...rest }: IButtonProps) => {
    return (
        <button
            className=" text-gray-600 bg-white px-3 py-1.5 rounded-sm disabled:opacity-50"
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
};
