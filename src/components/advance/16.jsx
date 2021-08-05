import React, { useEffect, useRef, useReducer, useState } from 'react'
import 'regenerator-runtime'
import UseReducerModelExample from './16_model'

/**
 * THIS STUDY OF USEREDUCER IS INCOMPLETE
 * MUST RE-VISIT TO FINISH THIS
 */
const UseReducerExample = () => {
    const defaultEmptyPerson = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
    }
    const initialData = {
        id: 1,
        firstName: 'Jayesh',
        lastName: 'Garg',
        email: 'gargjayesh@live.com',
    }

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case 'ADD_EDIT':
                const newPeople = [...state.people, person]
                const newState = {
                    people: newPeople,
                    showModel: false,
                }
                console.log(newState)
                return newState
            case 'DELETE':
                console.log('person to be delete - ', person.id)
                return state
            case 'MODAL':
                return { ...state, showModel: true }
            default:
                throw new Error('Dont know what you are trying to do...')
        }
    }

    const initialState = {
        showModel: false,
        people: [initialData],
    }
    const [person, setPerson] = useState(defaultEmptyPerson)

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { id, firstName, lastName, email } = person
        if (id && firstName && lastName && email) {
            dispatch({ type: 'ADD_EDIT' })
        } else if (firstName && lastName && email) {
            let maxId = 0
            if (id == 0) {
                if (state.people.length != 0) {
                    const ids = state.people.map((p) => p.id)
                    maxId = ids.reduce((p1, p2) => (p1 > p2 ? p1 : p2))
                }
                maxId += 1
            } else {
                maxId = id
            }
            setPerson({ ...person, id: maxId })
            dispatch({ type: 'ADD_EDIT' })
        } else {
            dispatch({ type: 'MODAL' })
        }
    }

    const deletePerson = (deleteId) => {
        const delPerson = { ...person, id: deleteId }
        setPerson(delPerson)
        console.log('We are deleting = ', person, ',with id - ', deleteId)
        //dispatch({ type: 'DELETE' })
    }

    const editPerson = (editId) => {
        //filter can return multiple items, find returns first match only
        const person = state.people.find((p) => p.id == editId)
        setPerson(person)
    }

    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setPerson({ ...person, [field]: value }) //[field] converts the field value into json field dynamically
    }
    return (
        <>
            <h2>Forms : UseReducer Example</h2>
            <article>
                <form onSubmit={handleSubmit} className='row'>
                    <input type='hidden' id='id' name='id' value={person.id} />
                    <div className='mb-5 col-md-4'>
                        <label htmlFor='firstName' className='form-label'>
                            First Name
                        </label>
                        <input
                            className='form-control'
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='Enter your first name'
                            value={person.firstName}
                            onChange={handleChange}
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
                            placeholder='Enter your last name'
                            value={person.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-5 col-md-4'>
                        <label htmlFor='email' className='form-label'>
                            E-Mail
                        </label>
                        <input
                            className='form-control'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email address'
                            value={person.email}
                            onChange={handleChange}
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
            {state.showModel && (
                <UseReducerModelExample modelContent={person} />
            )}
            <article>
                <table className='table table-dark table-striped table-hover'>
                    <caption>List of users with email addresses</caption>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.people.map((p) => {
                            const { id, firstName, lastName, email } = p
                            return (
                                <tr key={id}>
                                    <th scope='row'>{id}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button
                                            className='btn btn-warning'
                                            onClick={() => {
                                                editPerson(id)
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => {
                                                deletePerson(id)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default UseReducerExample
