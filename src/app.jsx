import React, { Component } from 'react'
import './App.css'
import logo from './../public/logo192.png'

function App() {
    return (
        <section>
            <h1>hello</h1>
            <Person />
            <Message />
            <img src={require('./../public/logo192.png')} />
            <img src={logo} />
        </section>
    )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
    return <p>This is my message123</p>
}

export default App
