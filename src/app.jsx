import React from 'react'
import TopNavigationBar from './components/common/top_nav_bar'
import LeftNavigationBar from './components/common/left_nav_bar'
import ContentTemplate from './components/common/content-template'
import Footer from './components/common/footer'
import SplashScreen from './components/common/splash_screen'

const App = () => {
    return (
        <>
            <SplashScreen />
            <TopNavigationBar />
            <LeftNavigationBar />
            <ContentTemplate />
            <Footer />
        </>
    )
}

export default App
