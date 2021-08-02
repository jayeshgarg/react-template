import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({
    footerTextRight,
    footerTextLeft,
    link,
    linkText,
    copyright,
}) => {
    return (
        <footer className='main-footer'>
            <div className='float-right d-none d-sm-inline'>
                {footerTextRight}
            </div>
            <strong>
                {copyright} <a href={link}>{linkText}</a>.
            </strong>{' '}
            {footerTextLeft}
        </footer>
    )
}

Footer.propTypes = {
    footerTextRight: PropTypes.string,
    footerTextLeft: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    copyright: PropTypes.string,
}
Footer.defaultProps = {
    footerTextRight: 'Footer text right',
    footerTextLeft: 'Footer text left',
    link: 'https://www.google.com',
    linkText: 'Google.com',
    copyright: 'Copyright \u00a9 2014-2021',
}
export default Footer
