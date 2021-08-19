import React, {useEffect, useRef, useState} from 'react';
import TopNavBarSearchBox from './../top_nav/search/top_nav_bar_search_box.jsx';
import TopBarMessages from './message/top_bar_msg';
import TopBarNotifications from './notification/top_bar_noti';
import ToggleDarkModeButton from "./dark_mode/toggle_dark_mode";
import PropTypes from "prop-types";

const TopNavigationBar = ({isDarkMode, darkModeHandler, isDarkModeButtonDisabled, isSidebarOpen, setSidebarOpen}) => {
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.remove('sidebar-collapse');
        } else {
            document.body.classList.add('sidebar-collapse');
        }
    }, [isSidebarOpen])

    return (
        <nav className='main-header navbar navbar-expand navbar-dark'>
            <ul className='navbar-nav'>
                <li className='nav-item' onClick={() => {
                    console.log("setting sidebar to ", !isSidebarOpen);
                    setSidebarOpen(!isSidebarOpen)
                }}>
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
                <TopNavBarSearchBox/>
                <TopBarMessages/>
                <TopBarNotifications/>
                <ToggleDarkModeButton darkModeHandler={darkModeHandler} isDarkMode={isDarkMode}
                                      isDisabled={isDarkModeButtonDisabled}/>
            </ul>
        </nav>
    );
};
TopNavigationBar.propTypes = {
    darkModeHandler: PropTypes.func,
    isDarkMode: PropTypes.bool,
    isDarkModeButtonDisabled: PropTypes.bool
};

TopNavigationBar.defaultProps = {
    darkModeHandler: () => {
        console.log('Top navigation toggle dark mode option used!');
    },
    isDarkMode: true,
    isDarkModeButtonDisabled: false
};
export default TopNavigationBar;
