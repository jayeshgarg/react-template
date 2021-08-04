import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ messageSnapshot }) => {
    const priorityToColor = (priority) => {
        switch (priority) {
            case 5:
                return 'text-secondary'; //grey
            case 1:
                return 'text-info'; //faded blue
            case 2:
                return 'text-success'; //green
            case 3:
                return 'text-warning'; //orange
            case 4:
                return 'text-danger'; //red
        }
        return 'text-primary'; //bright blue
    };
    const { id, imgUrl, name, message, elapsedTime, target, priority } = messageSnapshot;
    return (
        <>
            <a href={target} className='dropdown-item'>
                <div className='media'>
                    <img src={imgUrl} alt='User Avatar' className='img-size-50 mr-3 img-circle' />
                    <div className='media-body'>
                        <h3 className='dropdown-item-title'>
                            {name}
                            <span className={'float-right text-sm ' + priorityToColor(priority)}>
                                <i className='fas fa-star'></i>
                            </span>
                        </h3>
                        <p className='text-sm'>{message}</p>
                        <p className='text-sm text-muted'>
                            <i className='far fa-clock mr-1'></i> {elapsedTime}
                        </p>
                    </div>
                </div>
            </a>
            <div className='dropdown-divider'></div>
        </>
    );
};

MessageItem.propTypes = {
    messageSnapshot: PropTypes.shape({
        id: PropTypes.number,
        imgUrl: PropTypes.string,
        name: PropTypes.string,
        message: PropTypes.string,
        elapsedTime: PropTypes.string,
        target: PropTypes.string,
        priority: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
    })
};

MessageItem.defaultProps = {
    messageSnapshot: {
        id: 1,
        imgUrl: 'static/img/user1-128x128.jpg',
        name: 'Brad Diesel',
        message: 'Call me whenever you can...',
        elapsedTime: '4 Hours Ago',
        target: '#',
        priority: 4
    }
};

export default MessageItem;
