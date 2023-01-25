import { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: { },
    decorators: [
        (Story) => (
            <div className='flex items-center gap-3'>
                {Story()}
                <Text size='sm'>Mantenha-me conectado</Text>
            </div>
        )
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj = {}