import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

// this example shows how to encapsulate multiple inputs so that we dont have to maintain
// the state of too many individual fields at the component level
const FormBasicsMultipleInputExample = () => {
    const defaultEmptyPerson = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
    }
    const [person, setPerson] = useState(defaultEmptyPerson)
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const { id, firstName, lastName, email } = person
        if (firstName && lastName && email) {
            let maxId
            let newTotal
            if (id == 0) {
                newTotal = [...people]
                if (people.length != 0) {
                    const ids = people.map((p) => p.id)
                    maxId =
                        people.length > 0
                            ? ids.reduce((p1, p2) => (p1 > p2 ? p1 : p2))
                            : 0
                }
                maxId += 1
            } else {
                newTotal = people.filter((p) => p.id != id)
                maxId = id
            }
            newTotal.push({
                id: maxId,
                firstName,
                lastName,
                email,
            })
            setPeople([...newTotal].sort((p1, p2) => p1.id - p2.id))
            setPerson(defaultEmptyPerson)
        }
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

    const deletePerson = (deleteId) => {
        setPeople(
            people
                .filter((p) => p.id !== deleteId)
                .map((p) => ({ ...p, id: p.id > deleteId ? p.id - 1 : p.id }))
        )
    }

    const editPerson = (editId) => {
        //filter can return multiple items, find returns first match only
        const { id, firstName, lastName, email } = people.find(
            (p) => p.id == editId
        )
        setPerson({ id, firstName, lastName, email })
    }

    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setPerson({ ...person, [field]: value }) //[field] converts the field value into json field dynamically
    }

    return (
        <>
            <h2>Forms : Multi-input Example</h2>
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
                            type='text'
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
            <article>
                <table className='table'>
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
                        {people.map((person) => {
                            const { id, firstName, lastName, email } = person
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
export default FormBasicsMultipleInputExample
