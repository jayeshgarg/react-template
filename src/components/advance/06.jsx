import React, { useEffect, useState } from 'react'

/**
 * Use effect is used when we want to execute some kind of side effect based on some other change
 * The work done by useEffect is outside the scope of the current component
 * For eg, page title is not in scope of current component and hence if we want to change it we can use useEffect hook
 * It runs after each and every render of the component
 * WE CAN USE AS MANY USEEFFECT FUNCTIONS AS WE LIKE IN A SINGLE COMPONENT
 */
const UseEffectConditionalExample = () => {
    const [value, setValue] = useState(100)

    /**
     * Condition useEffect can be achieved in 2 ways.
     * 1.putting if condition inside useEffect function
     * 2. using dependency argument of useEffect hook
     */
    useEffect(() => {
        console.log('useEffect called')

        //note here in below line we are using ` symbol instead of '
        document.title = `New Counter Value : ${value}`
    }, [value])
    /*
    Description of dependency argument of useEffect
    [] -> empty array means that it will execute only on initial render and not after that.
    [value] -> everytime the value of 'value' change the useEffect is invoked
     */
    useEffect(() => {
        console.log('another useEffect called')

        //note here in below line we are using ` symbol instead of '
    }, [])

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
export default UseEffectConditionalExample
