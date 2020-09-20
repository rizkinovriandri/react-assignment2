import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
    return (
        <div>
            <img src={props.url}
                alt="Avatar"
                className="avatar" 
            />
        </div>
    );
}

export default Avatar;