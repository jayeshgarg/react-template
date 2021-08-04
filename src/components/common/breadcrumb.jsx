import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ pageTitle, crumbs }) => {
    return (
        <div className='content-header'>
            <div className='container-fluid'>
                <div className='row mb-2'>
                    <div className='col-sm-6'>
                        <h1 className='m-0'>{pageTitle}</h1>
                    </div>
                    <div className='col-sm-6'>
                        <ol className='breadcrumb float-sm-right'>
                            {crumbs.map((c) => {
                                return (
                                    <li key={c.id} className={'breadcrumb-item ' + (c.isActive ? 'active' : '')}>
                                        {c.linkUrl ? <a href={c.linkUrl}>{c.linkName}</a> : <>{c.linkName}</>}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};
Breadcrumb.propTypes = {
    pageTitle: PropTypes.string,
    crumbs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            linkName: PropTypes.string,
            linkUrl: PropTypes.string
        })
    )
};
Breadcrumb.defaultProps = {
    pageTitle: 'Page Title',
    crumbs: [
        { id: 1, linkName: 'Home', linkUrl: '#', isActive: false },
        { id: 2, linkName: 'Template Page', linkUrl: '', isActive: true }
    ]
};
export default Breadcrumb;
