import React from 'react'

import Counter from './counter'

export default {
    component: Counter,
    title: 'Components/Counter',
    description: 'Counter component description',
    args: {
        counter: {
            id: 1,
            value: 1,
        },
    },
    argTypes: {
        onDelete: { action: 'DELETE button clicked' },
        onChangeValue: { action: 'INCREMENT/DECREMENT button clicked' },
    },
}

const Template = (args) => <Counter {...args} />

export const Default = Template.bind({})
