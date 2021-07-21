import React from 'react'

import PersonImage from './PersonImage'
import PersonName from './PersonName'
import PersonDesignation from './PersonDesignation'

const Person = ({ name, designation, imageSrc }) => {
    const clickHandler = (e) => {
        console.log('Hello ' + name + '!!!')
        console.log(e)
        console.log(e.target)
    }
    const mouseOverEvent = (e) => {
        console.log('You clicked on : ' + e.target.nodeName)
    }
    return (
        <article
            className='person'
            onClick={clickHandler}
            onMouseOver={mouseOverEvent}
        >
            <PersonImage imageSrc={imageSrc} />
            <PersonName name={name} />
            <PersonDesignation designation={designation} />
        </article>
    )
}

export default Person
