import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MessageItem from './msg_item'

const TopBarMessages = ({ allMsgTargetUrl, messageSnapshots }) => {
    return (
        <>
            <li className='nav-item dropdown'>
                <a className='nav-link' data-toggle='dropdown'>
                    <i className='far fa-comments'></i>
                    <span className='badge badge-danger navbar-badge'>3</span>
                </a>
                <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
                    {messageSnapshots.map((msg) => {
                        return (
                            <MessageItem key={msg.id} messageSnapshot={msg} />
                        )
                    })}
                    <a
                        href={allMsgTargetUrl}
                        className='dropdown-item dropdown-footer'
                    >
                        See All Messages
                    </a>
                </div>
            </li>
        </>
    )
}

TopBarMessages.propTypes = {
    allMsgTargetUrl: PropTypes.string,
    messageSnapshots: PropTypes.arrayOf(MessageItem.propTypes.messageSnapshot),
}

TopBarMessages.defaultProps = {
    allMsgTargetUrl: '#',
    messageSnapshots: [
        {
            id: 1,
            imgUrl: 'img/user1-128x128.jpg',
            name: 'Brad Diesel',
            message: 'Call me whenever you can...',
            elapsedTime: '4 Hours Ago',
            target: '#',
            priority: 4,
        },
        {
            id: 2,
            imgUrl: 'img/user8-128x128.jpg',
            name: 'John Pierce',
            message: 'I got your message bro',
            elapsedTime: '4 Hours Ago',
            target: '#',
            priority: 0,
        },
        {
            id: 3,
            imgUrl: 'img/user3-128x128.jpg',
            name: 'Nora Silvester',
            message: 'The subject goes here',
            elapsedTime: '4 Hours Ago',
            target: '#',
            priority: 3,
        },
    ],
}
export default TopBarMessages