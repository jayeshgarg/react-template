import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const ToggleDarkModeButton = ({isDarkMode, darkModeHandler, isDisabled}) => {

    const [isChecked, setChecked] = useState(isDarkMode);

    const changeHandler = (e) => {
        setChecked(e.target.checked);
        darkModeHandler(e);
    }

    return (
        <li className='nav-item'>
            <div className="nav-link">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                           disabled={isDisabled} onChange={changeHandler} checked={isChecked}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
                </div>
            </div>
        </li>
    )
}

ToggleDarkModeButton.propTypes = {
    darkModeHandler: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool,
    isDisabled: PropTypes.bool
};

ToggleDarkModeButton.defaultProps = {
    darkModeHandler: () => {
        console.log('Top navigation toggle dark mode option used!');
    },
    isDarkMode: true,
    isDisabled: false
};
export default ToggleDarkModeButton
