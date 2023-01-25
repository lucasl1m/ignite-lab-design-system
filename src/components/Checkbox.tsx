import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps { }

export function Checkbox() {
    return (
        <CheckboxPrimitive.Root 
            className='w-7 h-7 border-gray-200 border-2 rounded bg-gray-800 flex items-center justify-center group'>
            <CheckboxPrimitive.Indicator asChild>
                <Check
                    weight='bold'
                    className='w-5 h-5 text-gray-100'
                />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}