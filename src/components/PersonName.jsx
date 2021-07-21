import React from 'react'

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const PersonName = ({ name }) => {
    return (
        <div>
            <h2>
                <FontAwesomeIcon icon={faUser} size='xs' />
                &nbsp;
                {name}
            </h2>
        </div>
    )
}

export default PersonName
