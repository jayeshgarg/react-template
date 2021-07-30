import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const url = 'https://api.github.com/users/QuincyLarson'

const ConditionalRenderingMultipleReturnsExample = () => {
    const [loading, setLoading] = useState(true)

    const loadUser = async () => {
        const response = await fetch(url)
        const user = await response.json()
        console.log(user)
        setLoading(false)
    }

    useEffect(() => {
        loadUser()
    }, [])
    if (loading) {
        return <h1>Loading</h1>
    } else {
        return <h1>Loaded</h1>
    }
}

export default ConditionalRenderingMultipleReturnsExample
