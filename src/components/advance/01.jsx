import React from 'react'

const UseStateExample = () => {
    const [title, setTitle] = React.useState('Some Random Title')

    const handleClick = () => {
        if (title === 'Some Random Title') setTitle('New Update Title')
        else setTitle('Some Random Title')
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button
                type='button'
                className='btn btn-primary'
                onClick={handleClick}
            >
                Change Title
            </button>
        </React.Fragment>
    )
}

export default UseStateExample
