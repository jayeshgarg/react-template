import React from 'react'
import { useParams } from 'react-router-dom'

const RouterParameterExample = () => {
    const { name } = useParams()
    return (
        <>
            <h1>Router Parameter Example</h1>
            <h2>{name}</h2>
        </>
    )
}
export default RouterParameterExample
