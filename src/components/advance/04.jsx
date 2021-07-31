import React, { useState } from 'react'

const HookUseStateFunctionExample = () => {
    const [counter, setCounter] = useState(100)
    const [counter2, setCounter2] = useState(100)

    const resetValue = () => setCounter(100)

    const increaseLater = () => {
        //this will capture the counter2 value as soon as it is clicked and hence multi-clicking wont work and will execute only once
        //setTimeout(() => setCounter2(counter2 + 1), 2000)

        //if we want all our multi-clicks to queue up and execute as soon as timeout occurs, we need to use sync approach
        //also all queued up clicks will get to keep their individual timer value
        setTimeout(() => {
            console.log()
            setCounter2((previousValue) => previousValue + 1)
            //which essentially means that setCounter2 has 2 signatures i.e. setCounter2(newValue), setCounter2(function)
        }, 2000)
    }

    return (
        <span>
            <div>
                <h2>Regular Counter</h2>
                <h1>{counter}</h1>
                <button
                    className='btn btn-success people-grid'
                    onClick={() => {
                        setCounter(counter + 1)
                    }}
                >
                    Increase
                </button>
                <button
                    className='btn btn-warning people-grid'
                    onClick={resetValue}
                >
                    Reset
                </button>
                <button
                    className='btn btn-danger people-grid'
                    onClick={() => {
                        setCounter(counter - 1)
                    }}
                >
                    Decrease
                </button>
            </div>
            <div>
                <h2>Complex counter</h2>
                <h1>{counter2}</h1>
                <button
                    className='btn btn-success people-grid'
                    onClick={increaseLater}
                >
                    Increase Later
                </button>
            </div>
        </span>
    )
}
//increase and decrease = by direct inline function call
//reset = by passing function reference of an external function
export default HookUseStateFunctionExample
