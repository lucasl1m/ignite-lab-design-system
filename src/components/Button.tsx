import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    block?: boolean;
    children: React.ReactNode;
    asChild?: boolean;
}

export function Button({ children, block = false, size = 'md', asChild, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={
            clsx(
                `bg-green-500 text-white font-sans font-semibold tracking-wider rounded leading-normal hover:bg-green-700 transition-colors duration-300 ease-out focus:ring-2 ring-white px-6 py-3 text-xs outline-none
                ${block ? 'w-full' : 'w-max'} 
                ${size === 'sm' ? 'px-4 py-2' : ''}
                ${size === 'lg' ? 'text-md px-8 py-4 leading-snug' : ''} 
            `,
            )}

            {...props}
        >
            {children}
        </Comp>
    )
}