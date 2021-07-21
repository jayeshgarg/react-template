import React from 'react'

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../App.css'

const PersonImage = ({ imageSrc }) => {
    return (
        <div>
            <img src={imageSrc} className='profile-image' />
        </div>
    )
}

export default PersonImage
