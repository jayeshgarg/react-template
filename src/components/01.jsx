import React, { useCallback, useRef, useState } from 'react'
import { Nav } from '@fluentui/react/lib/Nav'
import {
    ContextualMenu,
    ContextualMenuItemType,
} from '@fluentui/react/lib/ContextualMenu'
import {
    Panel,
    Shimmer,
    Spinner,
    SpinnerSize,
    ThemeProvider,
} from '@fluentui/react'
import { webDarkTheme, webLightTheme } from '@fluentui/react-theme'

const Fluent01 = () => {
    const menuItems = [
        {
            key: 'newItem',
            text: 'New',
            onClick: () => console.log('New clicked'),
        },
        {
            key: 'divider_1',
            itemType: ContextualMenuItemType.Divider,
        },
        {
            key: 'rename',
            text: 'Rename',
            onClick: () => console.log('Rename clicked'),
        },
        {
            key: 'edit',
            text: 'Edit',
            onClick: () => console.log('Edit clicked'),
        },
        {
            key: 'properties',
            text: 'Properties',
            onClick: () => console.log('Properties clicked'),
        },
        {
            key: 'linkNoTarget',
            text: 'Link same window',
            href: 'http://bing.com',
        },
        {
            key: 'linkWithTarget',
            text: 'Link new window',
            href: 'http://bing.com',
            target: '_blank',
        },
        {
            key: 'linkWithOnClick',
            name: 'Link click',
            href: 'http://bing.com',
            target: '_blank',
        },
        {
            key: 'disabled',
            text: 'Disabled item',
            disabled: true,
        },
    ]
    const linkRef = useRef(null)
    const [showContextualMenu, setShowContextualMenu] = useState(false)
    const onShowContextualMenu = useCallback((ev) => {
        ev.preventDefault() // don't navigate
        setShowContextualMenu(true)
    }, [])
    const onHideContextualMenu = useCallback(
        () => setShowContextualMenu(false),
        []
    )

    const navStyles = { root: { width: 'auto' } }

    const navLinkGroups = [
        {
            name: 'Basic components',
            expandAriaLabel: 'Expand Basic components section',
            collapseAriaLabel: 'Collapse Basic components section',
            links: [
                {
                    key: 'ActivityItem',
                    name: 'ActivityItem',
                    url: '#',
                },
                {
                    key: 'Breadcrumb',
                    name: 'Breadcrumb',
                    url: '#',
                },
                {
                    key: 'Button',
                    name: 'Button',
                    url: '#',
                },
            ],
        },
        {
            name: 'Extended components',
            expandAriaLabel: 'Expand Extended components section',
            collapseAriaLabel: 'Collapse Extended components section',
            links: [
                {
                    key: 'ColorPicker',
                    name: 'ColorPicker',
                    url: '#',
                },
                {
                    key: 'ExtendedPeoplePicker',
                    name: 'ExtendedPeoplePicker',
                    url: '#',
                },
                {
                    key: 'GroupedList',
                    name: 'GroupedList',
                    url: '#',
                },
            ],
        },
        {
            name: 'Utilities',
            expandAriaLabel: 'Expand Utilities section',
            collapseAriaLabel: 'Collapse Utilities section',
            links: [
                {
                    key: 'FocusTrapZone',
                    name: 'FocusTrapZone',
                    url: '#',
                },
                {
                    key: 'FocusZone',
                    name: 'FocusZone',
                    url: '#',
                },
                {
                    key: 'MarqueeSelection',
                    name: 'MarqueeSelection',
                    url: '#',
                },
            ],
        },
    ]

    return (
        <div>
            <h1 onContextMenu={onShowContextualMenu} ref={linkRef}>
                Example #01
            </h1>
            <ThemeProvider theme={webDarkTheme}>
                <Shimmer />
            </ThemeProvider>
            <Panel>This is a side panel</Panel>
            <Spinner size={SpinnerSize.large} />
            <div style={{ width: '22%' }}>
                <Nav
                    styles={navStyles}
                    ariaLabel='Nav example similar to one found in this demo page'
                    groups={navLinkGroups}
                />
            </div>
        </div>
    )
}

export default Fluent01
