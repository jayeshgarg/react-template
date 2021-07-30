import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const url = 'https://api.github.com/users/QuincyLarson'

// shows usage of
// short-circuit operator and
// ternary operator
const ConditionalRenderingShortCircuitExample = () => {
    const [text, setText] = useState('')
    const [isError, setIsError] = useState(false)
    //short circuit evaluation similar to C-language
    const firstValue = text || 'hello world' // if text is true, then text else 'hello world'
    const secondValue = text && 'hello world' // if text is true, then 'hello world' else undefined/void

    useEffect(() => {
        console.log('10 got loaded')
        return () => {
            console.log('10 got unloaded')
        }
    }, [])

    return (
        <>
            <h1>short circuit example</h1>
            <h2>default = {text}</h2>
            <h2>first = {firstValue}</h2>
            <h2>second = {secondValue}</h2>
            {
                //ternary operator same as java => <expression> ? <true statements>:<false statements>
            }
            <h2>{isError ? 'Error' : 'No Error'}</h2>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setIsError(!isError)
                }}
            >
                Toggle Error
            </button>
        </>
    )
}
export default ConditionalRenderingShortCircuitExample
