import React from 'react'
import Person from './Person'

const people = [
    {
        id: 1,
        name: 'John Doe',
        designation: 'Software Developer',
        imageSrc: 'https://i.shgcdn.com/bbd237d9-1b9e-4798-9604-ed8936af7b03/',
    },
    {
        id: 2,
        name: 'Jane Doe',
        designation: 'Software Tester',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KRy8zTwwh83W-MxGkUNgvhhN08WLjwGWYQ&usqp=CAU',
    },
    {
        id: 3,
        name: 'Jane Doe',
        designation: 'Software Tester',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KRy8zTwwh83W-MxGkUNgvhhN08WLjwGWYQ&usqp=CAU',
    },
    {
        id: 4,
        name: 'Jane Doe',
        designation: 'Software Tester',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KRy8zTwwh83W-MxGkUNgvhhN08WLjwGWYQ&usqp=CAU',
    },
    {
        id: 5,
        name: 'Jane Doe',
        designation: 'Software Tester',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KRy8zTwwh83W-MxGkUNgvhhN08WLjwGWYQ&usqp=CAU',
    },
]

const People = () => {
    return (
        <section className='people-grid'>
            {people.map((person) => {
                return <Person key={person.id} {...person} />
            })}
        </section>
    )
}

export default People

// ...person = its a spread operator, what it does is it extracts all the parameters in person and sends them as individual prop
// in this way => name={person.name} so that all the parameters are directly accessible in child directly from props
