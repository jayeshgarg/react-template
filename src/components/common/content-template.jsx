import React from 'react';
import Breadcrumb from './breadcrumb';

const ContentTemplate = () => {
    return (
        <div className='content-wrapper'>
            <Breadcrumb />
            <div className='content'>
                <div className='container-fluid'>
                    <img src={'img/avatar.png'} />
                </div>
            </div>
        </div>
    );
};
export default ContentTemplate;
