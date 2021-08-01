import React from 'react'
import TopNavigationBar from './components/common/navbar'
import LeftNavigationBar from './components/common/leftNavigationBar'
import ContentTemplate from './components/common/content-template'
import Footer from './components/common/footer'

const App = () => {
    return (
        <>
            <TopNavigationBar />
            <LeftNavigationBar />
            <ContentTemplate />
            <Footer />
        </>
    )
}

export default App
