import React from 'react'

const HookUseStateObjectExample = () => {
    const [person, setPerson] = React.useState({
        name: 'Jayesh',
        age: 33,
        message: 'This is a message',
    })

    function changeMessage() {
        let newMessage = window.prompt('Enter new message:')
        if (newMessage != undefined && newMessage != '') {
            //spread operator is used below to copy all values from original object except message
            const updatedPerson = { ...person, message: newMessage }
            setPerson(updatedPerson)
        }
    }

    return (
        <span>
            <h3>Name : {person.name}</h3>
            <h3>Age : {person.age}</h3>
            <h3>Message : {person.message}</h3>
            <button className='btn btn-primary' onClick={() => changeMessage()}>
                Change Message
            </button>
        </span>
    )
}

export default HookUseStateObjectExample
