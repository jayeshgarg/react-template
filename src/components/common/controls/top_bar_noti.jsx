import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TopBarNotifications = () => {
    //this is a hack to make the dropdown work, it doesn't work is we click elsewhere
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    return (
        <>
            <li className='nav-item dropdown'>
                <a
                    className='nav-link'
                    data-toggle='dropdown'
                    onClick={() => {
                        setIsShowDropdown(!isShowDropdown)
                    }}
                >
                    <i className='far fa-bell'></i>
                    <span className='badge badge-warning navbar-badge'>15</span>
                </a>
                <div
                    className={
                        'dropdown-menu dropdown-menu-lg dropdown-menu-right' +
                        (isShowDropdown ? ' show' : '')
                    }
                >
                    <span className='dropdown-item dropdown-header'>
                        15 Notifications
                    </span>
                    <div className='dropdown-divider'></div>
                    <a href='#' className='dropdown-item'>
                        <i className='fas fa-envelope mr-2'></i> 4 new messages
                        <span className='float-right text-muted text-sm'>
                            3 mins
                        </span>
                    </a>
                    <div className='dropdown-divider'></div>
                    <a href='#' className='dropdown-item'>
                        <i className='fas fa-users mr-2'></i> 8 friend requests
                        <span className='float-right text-muted text-sm'>
                            12 hours
                        </span>
                    </a>
                    <div className='dropdown-divider'></div>
                    <a href='#' className='dropdown-item'>
                        <i className='fas fa-file mr-2'></i> 3 new reports
                        <span className='float-right text-muted text-sm'>
                            2 days
                        </span>
                    </a>
                    <div className='dropdown-divider'></div>
                    <a href='#' className='dropdown-item dropdown-footer'>
                        See All Notifications
                    </a>
                </div>
            </li>
        </>
    )
}
export default TopBarNotifications