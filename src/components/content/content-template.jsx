import React from 'react';
import Breadcrumb from './../common/controls/breadcrumb/breadcrumb';

const ContentTemplate = () => {
    return (
        <div className='content-wrapper'>
            <Breadcrumb/>
            <div className='content'>
                <div className='container-fluid'>
                    <img src={'img/avatar.png'}/>
                    <input type='text'/>
                </div>
            </div>
        </div>
    );
};
export default ContentTemplate;
