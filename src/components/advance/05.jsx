import React, { useEffect, useState } from 'react'

/**
 * Use effect is used when we want to execute some kind of side effect based on some other change
 * The work done by useEffect is outside the scope of the current component
 * For eg, page title is not in scope of current component and hence if we want to change it we can use useEffect hook
 * It runs after each and every render of the component
 */
const UseEffectExample = () => {
    const [value, setValue] = useState(100)

    useEffect(() => {
        //note here in below line we are using ` symbol instead of '
        document.title = `New Counter Value : ${value}`
    })
    return (
        <div>
            <h1>UserEffect Tutorial</h1>
            <h2>Counter Value : {value}</h2>
            <button
                className='btn btn-primary'
                onClick={() => setValue(value + 1)}
            >
                Click Me!!!
            </button>
        </div>
    )
}
export default UseEffectExample
