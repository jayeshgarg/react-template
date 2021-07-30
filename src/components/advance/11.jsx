import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

import Panel from './10'

const ConditionalRenderingShowHideExample = () => {
    const [show, setShow] = useState(false)

    const showHide = () => {
        setShow(!show)
    }

    return (
        <>
            <h1>Show/Hide example</h1>
            <button className='btn btn-primary' onClick={showHide}>
                {show ? 'Show' : 'Hide'}
            </button>
            {!show && <Panel />}
        </>
    )
}
export default ConditionalRenderingShowHideExample
