import React, { useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './home'
import About from './about'
import Error from './error'
import Parameter from './parameter'

const RouterExample = () => {
    useEffect(() => {
        const temp = {
            id: 1,
            name: 'Jayesh',
            designation: 'Software Engineer',
        }
        console.log(
            Object.entries(temp).map((k) => {
                let e = {}
                e[k[0]] = k[1]
                return e
            })
        )
        console.log('a' == 'A'.toLowerCase())
        console.log('1' == 1)
        console.log('1' === 1)
    }, [])
    return (
        <>
            <BrowserRouter>
                <ul className='navbar navbar-dark'>
                    <li className='navbar-nav'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-nav'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='navbar-nav'>
                        <Link to='/somError'>Some Error Page</Link>
                    </li>
                    <li className='navbar-nav'>
                        <Link to='/parameter/jayesh'>
                            Parameter Passing - Jayesh
                        </Link>
                    </li>
                    <li className='navbar-nav'>
                        <Link to='/parameter/pooja'>
                            Parameter Passing - Pooja
                        </Link>
                    </li>
                    <li className='navbar-nav'>
                        <Link to='/parameter/aaru'>
                            Parameter Passing - Aaratrika
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    {
                        // whatever we name the variable here in ROUTE will exactly same received in target component
                    }
                    <Route path='/parameter/:name' children={<Parameter />} />
                    <Route path='*' component={Error} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default RouterExample
