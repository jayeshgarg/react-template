import React from 'react'

const UseStateArrayExample = () => {
    const data = [
        { id: 1, name: 'Jayesh' },
        { id: 2, name: 'Pooja' },
        { id: 3, name: 'Aaratrika' },
    ]

    const [people, setPeople] = React.useState(data)

    function removePerson(id) {
        setPeople(people.filter((person) => person.id !== id))
    }

    return (
        <div className='people-grid'>
            {people.map((person) => {
                const { id, name } = person
                return (
                    <div key={id} className='person'>
                        <h2>{name}</h2>
                        <button
                            className='btn btn-danger'
                            onClick={() => removePerson(id)}
                        >
                            Delete
                        </button>
                    </div>
                )
            })}
            <button className='btn btn-warning' onClick={() => setPeople([])}>
                reset
            </button>
        </div>
    )
}

export default UseStateArrayExample
