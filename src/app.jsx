import React, {useEffect, useRef, useState} from 'react';
import TopNavigationBar from './components/common/controls/top_nav/top_nav_bar';
import LeftNavigationBar from './components/common/controls/left_nav/left_nav_bar';
import ContentTemplate from './components/content/content-template';
import Footer from './components/common/controls/footer/footer';
import SplashScreen from './components/common/splash/splash_screen';

const App = () => {
    const [isSplashVisible, setSplashVisible] = useState(true)
    const [isDarkMode, setDarkMode] = useState(true)//by default dark mode is enabled
    const [isLeftNavCollapsed, setCollapsedStateOfLeftNav] = useState(true)//by default its not collapsed
    const isDarkModeButtonDisabled = false;
    const [isOpen, setOpen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSplashVisible(false);
        }, 1000);
    }, [isSplashVisible])

    const darkModeHandler = () => {
        setDarkMode(!isDarkMode);
    }

    const handleOutsideClick = (e) => {
        console.log("do we want sidebar open? = ", isLeftNavCollapsed);
        if (isLeftNavCollapsed && leftNavRef && leftNavRef.current && !leftNavRef.current.contains(e.target)) {
            if (isLeftNavCollapsed) {
                document.body.classList.remove('sidebar-collapse');
            } else {
                document.body.classList.add('sidebar-collapse');
            }
        }
    };
    const leftNavRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick, false);
        };
    }, []);

    return (
        <div className={`wrapper ${isDarkMode ? "dark-mode" : ""}`}>
            {
                isSplashVisible ? <SplashScreen/> : <></>
            }
            <TopNavigationBar darkModeHandler={darkModeHandler}
                              isDarkMode={isDarkMode}
                              isDarkModeButtonDisabled={isDarkModeButtonDisabled}
                              isSidebarOpen={isLeftNavCollapsed}
                              setSidebarOpen={setCollapsedStateOfLeftNav}
            />
            <LeftNavigationBar outsideClickRef={leftNavRef}/>
            <ContentTemplate/>
            <Footer/>
        </div>
    );
};

export default App;
