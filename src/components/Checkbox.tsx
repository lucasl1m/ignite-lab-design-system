import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps { }

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root 
            className='w-7 h-7 rounded bg-gray-800 flex items-center justify-center outline-none ring-white   focus:ring-2'          
            {...props}
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check
                    weight='bold'
                    className='w-5 h-5 text-gray-100'
                />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}