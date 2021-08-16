import React from "react";
import {Nav} from "@fluentui/react";


const Navigation = () => {
    const links = [
        {
            links: [
                {
                    name: 'Dashboard',
                    url: '/',
                    key: 'key1',
                    iconProps: {
                        iconName: 'News'
                    }
                }, {
                    name: 'Settings',
                    url: '/',
                    key: 'key2',
                    iconProps: {
                        iconName: 'PlayerSettings'
                    }
                }, {
                    name: 'Transfer',
                    url: '/',
                    key: 'key3',
                    iconProps: {
                        iconName: 'SwitcherStartEnd'
                    }
                }, {
                    name: 'Stats',
                    url: '/',
                    key: 'key4',
                    iconProps: {
                        iconName: 'StackedLineChart'
                    }
                }
            ]
        }
    ]

    return <Nav groups={links} selectedKey='key1'/>
}

export default Navigation
