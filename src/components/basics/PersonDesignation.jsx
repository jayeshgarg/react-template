import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const PersonDesignation = ({ designation }) => {
    return (
        <div
            onClick={() => {
                alert('I am a ' + designation)
            }}
        >
            <p>
                <FontAwesomeIcon icon={faBuilding} />
                &nbsp;{designation}
            </p>
        </div>
    )
}
export default PersonDesignation
