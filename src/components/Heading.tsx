import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'lg' | 'xl' | '2xl';
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'lg', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    
    return (
        <Comp className={
            clsx(
                'text-gray-100 font-sans font-bold',
                {
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                    'text-2xl': size === '2xl',
                },
                className
            )
        }>
            {children}
        </Comp>
    )
}