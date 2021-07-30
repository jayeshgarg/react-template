import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const url = 'https://api.github.com/users/QuincyLarson'

const ConditionalRenderingMultipleReturnsExample = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('Default User')

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        //loading the data in useEffect instead of writing a new function
        fetch(url)
            .then((resp) => {
                console.log(resp.status)
                if (resp.status == 200) {
                    return resp.json()
                } else {
                    throw new Error('Error from server')
                }
            })
            .then((user) => {
                console.log(user)
                setUser(user.login)
                setIsError(false)
                setIsLoading(false)
                return user
            })
            .catch((err) => {
                setIsError(true)
                setIsLoading(false)
                console.log(err)
            })
    }, [])
    if (isLoading) {
        console.log('loading...')
        return <h1>Loading</h1>
    } else {
        if (isError) {
            console.log('error came...')
            return <h1>Error</h1>
        } else {
            console.log('data loaded...')
            console.log(user)
            return <h1>{user}</h1>
        }
    }
}

export default ConditionalRenderingMultipleReturnsExample
