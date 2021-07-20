import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const people = [
    {
        name: 'John Doe',
        designation: 'Software Developer',
        imageSrc: 'https://i.shgcdn.com/bbd237d9-1b9e-4798-9604-ed8936af7b03/',
    },
    {
        name: 'Jane Doe',
        designation: 'Software Tester',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KRy8zTwwh83W-MxGkUNgvhhN08WLjwGWYQ&usqp=CAU',
    },
]

function App() {
    let ctr = 1
    return (
        <section>
            {people.map((person) => {
                return (
                    <Person
                        key={ctr++}
                        name={person.name}
                        designation={person.designation}
                        imageSrc={person.imageSrc}
                    />
                )
            })}
        </section>
    )
}

const Person = ({ name, designation, imageSrc }) => {
    return (
        <div className='align-all card-bg'>
            <PersonImage imageSrc={imageSrc} />
            <PersonName name={name} />
            <PersonDesignation designation={designation} />
        </div>
    )
}
const PersonImage = ({ imageSrc }) => {
    return (
        <div className='align-all'>
            <img src={imageSrc} style={{ width: '100px', height: '100px' }} />
        </div>
    )
}
const PersonName = ({ name }) => {
    return (
        <div>
            <h2 className='align-all'>{name}</h2>
        </div>
    )
}
const PersonDesignation = ({ designation }) => {
    return (
        <div>
            <p className='align-all'>{designation}</p>
        </div>
    )
}

export default App
