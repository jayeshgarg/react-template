import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './counters'

export default {
    component: Counters,
    title: 'Counters',
    description: 'Counters component description',
    args: {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 5 },
            { id: 3, value: -2 },
            { id: 4, value: 0 },
        ],
    },
    argTypes: {
        onReset: { action: 'RESET button clicked' },
        onDelete: { action: 'DELETE button clicked' },
        onChangeValue: { action: 'INCREMENT/DECREMENT button clicked' },
    },
}

const Template = (args) => <Counters {...args} />

export const Default = Template.bind({})
