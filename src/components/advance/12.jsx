import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const FormBasicsExample = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <>
            <h2>Forms Example</h2>
            <article>
                <form>
                    <div className='mb-5'>
                        <label htmlFor='firstName' className='form-label'>
                            First Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='firstName'
                            name='firstName'
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='lastName' className='form-label'>
                            Last Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='lastName'
                            name='lastName'
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='email' className='form-label'>
                            E-Mail
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='email'
                            name='email'
                        />
                    </div>
                    <div className='mb-5'>
                        <button
                            className='btn btn-primary form-control'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </article>
        </>
    )
}
export default FormBasicsExample
