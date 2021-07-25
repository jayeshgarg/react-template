import React from 'react'

const UseStateArrayExample = () => {
    const data = [
        { id: 1, name: 'Jayesh' },
        { id: 2, name: 'Pooja' },
        { id: 3, name: 'Aaratrika' },
        { id: 4, name: 'Aaratrika' },
        { id: 5, name: 'Aaratrika' },
    ]

    const [people, setPeople] = React.useState(data)

    function removePerson(id) {
        setPeople(people.filter((person) => person.id !== id))
    }

    function addPerson() {
        let newPerson = window.prompt('Enter the name of the new person : ')
        const existingPeople = people.filter(
            (person) => person.name == newPerson
        )
        if (existingPeople.length == 0) {
            const ids = people.map((person) => person.id)
            const maxId =
                people.length > 0
                    ? ids.reduce((p1, p2) => (p1 > p2 ? p1 : p2))
                    : 1
            let newTotal = people
            newTotal.push({ id: maxId + 1, name: newPerson })
            console.log(newTotal)
            setPeople([...newTotal])
        } else {
            alert('Duplicate person!!!')
        }
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
                Reset
            </button>
            <button className='btn btn-success' onClick={() => addPerson()}>
                Add new person
            </button>
        </div>
    )
}

export default UseStateArrayExample
