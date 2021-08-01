import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'
import PropTypes from 'prop-types'
// preserves value of form fields through re-render
// DOES NOT trigger re-render
// purpose is to target DOM nodes/elements

const SelfPractice = () => {
    const defaultEmptyPerson = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
    }
    const [person, setPerson] = useState(defaultEmptyPerson)
    const [people, setPeople] = useState([])

    const editPerson = (id) => {
        console.log('Edit Person :', id)
    }
    const deletePerson = (id) => {
        console.log('Delete Person :', id)
    }
    const changeHandler = () => {
        console.log('Handle Text Change')
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Add Person')
    }

    useEffect(() => {
        const initialData = [
            {
                id: 1,
                firstName: 'Jayesh',
                lastName: 'Garg',
                email: 'gargjayesh@live.com',
            },
        ]
        setPeople(initialData)
    }, [])

    return (
        <>
            <h1>Self Practice</h1>
            <NewPersonForm
                person={person}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
            />
            <PeopleList
                people={people}
                editPerson={editPerson}
                deletePerson={deletePerson}
            />
        </>
    )
}
export default SelfPractice
//--New Person Form--------------------------------------------------
const NewPersonForm = ({ person, changeHandler, submitHandler }) => {
    return (
        <>
            <form onSubmit={submitHandler} className='row'>
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
                        onChange={changeHandler}
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
                        onChange={changeHandler}
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
                        onChange={changeHandler}
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
        </>
    )
}

NewPersonForm.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
        email: PropTypes.string.isRequired,
    }),
    changeHandler: PropTypes.func,
    submitHandler: PropTypes.func,
}

//--People List--------------------------------------------------
const PeopleList = ({ people, editPerson, deletePerson }) => {
    return (
        <>
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
                    {people.map((p) => {
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
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(NewPersonForm.propTypes.person),
    editPerson: PropTypes.func,
    deletePerson: PropTypes.func,
}
