import React from 'react';
import PropTypes from 'prop-types';

const TopNavBarSearchBox = ({searchButtonHandler}) => {
    return (
        <>
            <li className='nav-item'>
                <a className='nav-link' data-widget='navbar-search' href='#' role='button'>
                    <i className='fas fa-search'></i>
                </a>
                <div className='navbar-search-block'>
                    <form className='form-inline'>
                        <div className='input-group input-group-sm'>
                            <input
                                className='form-control form-control-navbar'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <div className='input-group-append'>
                                <button className='btn btn-navbar' type='submit' onClick={searchButtonHandler}>
                                    <i className='fas fa-search'></i>
                                </button>
                                <button className='btn btn-navbar' type='button' data-widget='navbar-search'>
                                    <i className='fas fa-times'></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        </>
    );
};

TopNavBarSearchBox.propTypes = {
    searchButtonHandler: PropTypes.func
};
TopNavBarSearchBox.defaultProps = {
    searchButtonHandler: (e) => {
        e.preventDefault();
        console.log('Top navigation search option used!');
    }
};
export default TopNavBarSearchBox;
