import React, { useEffect, useRef } from 'react'
import 'regenerator-runtime'
// preserves value of form fields through re-render
// DOES NOT trigger re-render
// purpose is to target DOM nodes/elements

const HookUseRefExample = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)
    }
    useEffect(() => {
        refContainer.current.focus()
    }) //since useRef doesn't trigger re-render, we can use useEffect in these cases with empty dependency
    return (
        <>
            <h1>Hook : UseRef Example</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor='firstName' className='form-label'>
                        Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter your name'
                        ref={refContainer}
                    />
                </div>
                <div className='mb-5'>
                    <button
                        className='btn btn-primary form-control'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div ref={divContainer}>Hello World</div>
        </>
    )
}
export default HookUseRefExample
