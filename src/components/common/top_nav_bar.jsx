import React from 'react';
import TopNavBarSearchBox from './controls/top_nav_bar_search_box';
import TopBarMessages from './controls/top_bar_msg';
import TopBarNotifications from './controls/top_bar_noti';

const TopNavigationBar = () => {
    return (
        <nav className='main-header navbar navbar-expand navbar-dark'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' data-widget='pushmenu' href='#' role='button'>
                        <i className='fas fa-bars'></i>
                    </a>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                    <a href='#' className='nav-link'>
                        Home
                    </a>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                    <a href='#' className='nav-link'>
                        Contact
                    </a>
                </li>
            </ul>

            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <TopNavBarSearchBox />
                </li>
                <TopBarMessages />
                <TopBarNotifications />
            </ul>
        </nav>
    );
};
export default TopNavigationBar;
