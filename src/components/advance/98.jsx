import React, { useEffect, useRef } from 'react'
import 'regenerator-runtime'

//useRef=> refVariable.current will hold the whole dom tree from the point where ref was made
//any standard operation on refVariable can be made that can be done over html dom
const HookUseRefSelfPracticeExample = () => {
    const refEmail = useRef(null)
    const refName = useRef(null)
    useEffect(() => {
        refEmail.current.focus()
        console.log(refName.current)
    }, [])
    return (
        <>
            <h1>Self Practice : useRef Example</h1>
            <input ref={refEmail} type='email' id='email' />
            <div ref={refName}>
                <h1>node1</h1>
                <h2>node2</h2>
                <h3>node3</h3>
            </div>
        </>
    )
}

export default HookUseRefSelfPracticeExample
