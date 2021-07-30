import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const FormBasicsExample = () => {
    const [firstName, setFirstName] = useState('Enter your first name')
    const [lastName, setLastName] = useState('Enter your last name')
    const [email, setEmail] = useState('Enter your email address')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        const name = e.target.localName + ' ' + e.target.nodeName
        console.log(name)
        const elements = [...e.target] //extracting form elements out of target
        elements.map((ele) => {
            console.log(ele.id + ':' + ele.value)
        })
    }
    return (
        <>
            <h2>Forms Example</h2>
            <article>
                <form onSubmit={handleSubmit} className='row'>
                    <div className='mb-5 col-md-4'>
                        <label htmlFor='firstName' className='form-label'>
                            First Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='mb-5 col-md-4'>
                        <label htmlFor='lastName' className='form-label'>
                            Last Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='mb-5 col-md-4'>
                        <label htmlFor='email' className='form-label'>
                            E-Mail
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='email'
                            name='email'
                            placeholder={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
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
            </article>
        </>
    )
}
export default FormBasicsExample
