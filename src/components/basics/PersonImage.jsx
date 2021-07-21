import React from 'react'

const PersonImage = ({ imageSrc }) => {
    return (
        <div>
            <img src={imageSrc} className='profile-image' />
        </div>
    )
}

export default PersonImage
