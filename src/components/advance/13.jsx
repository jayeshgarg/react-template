import React, { useEffect, useState } from 'react'
import 'regenerator-runtime'

const FormBasicsListAdditionExample = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState(0)

    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const elements = [...e.target] //extracting form elements out of target
        //console.log(elements)
        let firstName, lastName, email, id
        elements.map((ele) => {
            if (ele.id == 'firstName') {
                firstName = ele.value
            }
            if (ele.id == 'lastName') {
                lastName = ele.value
            }
            if (ele.id == 'email') {
                email = ele.value
            }
            if (ele.id == 'id') {
                id = ele.value
                //console.log('person id =', id)
            }
        })
        if (firstName && lastName && email) {
            let maxId = 0

            let newTotal
            if (id == 0) {
                newTotal = [...people]
                if (people.length != 0) {
                    const ids = people.map((person) => person.id)
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
            setFirstName('')
            setLastName('')
            setEmail('')
            setId(0)
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
        setPeople(people.filter((person) => person.id !== deleteId))
    }

    const editPerson = (editId) => {
        //filter can return multiple items, find returns first match only
        const editPerson = people.find((p) => p.id == editId)
        console.log(editPerson)
        setId(editPerson.id)
        setFirstName(editPerson.firstName)
        setLastName(editPerson.lastName)
        setEmail(editPerson.email)
    }

    return (
        <>
            <h2>Forms Example</h2>
            <article>
                <form onSubmit={handleSubmit} className='row'>
                    <input type='hidden' id='id' name='id' value={id} />
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
                            value={firstName}
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
                            placeholder='Enter your last name'
                            value={lastName}
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
                            placeholder='Enter your email address'
                            value={email}
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
export default FormBasicsListAdditionExample
