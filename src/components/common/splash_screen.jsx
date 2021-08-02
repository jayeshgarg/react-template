import React from 'react'
import PropTypes from 'prop-types'

const SplashScreen = ({ imgUrl, altText }) => {
    return (
        <div className='preloader flex-column justify-content-center align-items-center'>
            <img
                className='animation__wobble'
                src={imgUrl}
                alt={altText}
                height='60'
                width='60'
            />
        </div>
    )
}
SplashScreen.propTypes = {
    imgUrl: PropTypes.string,
    altText: PropTypes.string,
}
SplashScreen.defaultProps = {
    imgUrl: 'img/AdminLTELogo.png',
    altText: 'AdminLTELogo',
}
export default SplashScreen
