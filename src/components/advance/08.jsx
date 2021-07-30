import React, { useEffect, useState } from 'react'
import regeneratorRuntime from 'regenerator-runtime'

const url = 'https://api.github.com/users'

/**
 * Use effect is used when we want to execute some kind of side effect based on some other change
 * The work done by useEffect is outside the scope of the current component
 * For eg, page title is not in scope of current component and hence if we want to change it we can use useEffect hook
 * It runs after each and every render of the component
 * WE CAN USE AS MANY USEEFFECT FUNCTIONS AS WE LIKE IN A SINGLE COMPONENT
 */
const UseEffectFetchDataExample = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        //console.log(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h1>UserEffect Fetch Data Tutorial</h1>
            <h2>GitHub Users</h2>
            <div className='people-grid'>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user
                    return (
                        <a key={id} href={html_url}>
                            <div className='person'>
                                <img
                                    src={avatar_url}
                                    className='profile-image'
                                />
                                <h2>{login}</h2>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default UseEffectFetchDataExample
/*
REMEMBER:
useState - trigger re-render -> triggers useEffect -> now if we have any king of modification to state(useState) then
there will be a infinite loop

Hence use [] as dependency in use effect to break that loop
 */
