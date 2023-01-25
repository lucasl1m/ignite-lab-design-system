import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        block: false,
        size: 'md'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        block: {
            control: {
                type: 'boolean'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg']
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }

} as Meta<ButtonProps>

export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg'
    },
}