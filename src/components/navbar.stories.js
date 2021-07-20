import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './navbar';

export default {
    component: Navbar,
    title: 'Navbar',
    description: "Navbar component description",
    args: {
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 5},
            {id: 3, value: -2},
            {id: 4, value: 0}
        ]
    }
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
