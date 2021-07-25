import React, { useEffect, useState } from 'react'

/**
 * Use effect is used when we want to execute some kind of side effect based on some other change
 * The work done by useEffect is outside the scope of the current component
 * For eg, page title is not in scope of current component and hence if we want to change it we can use useEffect hook
 * It runs after each and every render of the component
 * WE CAN USE AS MANY USEEFFECT FUNCTIONS AS WE LIKE IN A SINGLE COMPONENT
 */
const UseEffectCleanupExample = () => {
    const [size, setSize] = useState(window.innerWidth)
    const [sizeDesc, setSizeDesc] = useState('Wide')

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        // cleanup or in other words destructor method
        // useEffect can only return one of 2 things, Void or destructor function
        return () => {
            // this cleanup is very important in multi component environment so that we dont end up leaving residual
            // event listeners or hooks and start having unwanted effects
            // TIP : Always keep this clean up in place even if its empty or just console log
            console.log('cleanup')
            window.removeEventListener('resize', checkSize)
        }
    })

    const checkSize = () => {
        setSize(window.innerWidth)
        if (size > 900) {
            console.log('Size = Wide')
            setSizeDesc('Wide')
        } else {
            console.log('Size = Narrow')
            setSizeDesc('Narrow')
        }
    }

    return (
        <div>
            <h1>UserEffect Cleanup Tutorial</h1>
            <h3>Current Window Size : {size}</h3>
            <h3>Current Window Size Description : {sizeDesc}</h3>
        </div>
    )
}
export default UseEffectCleanupExample
