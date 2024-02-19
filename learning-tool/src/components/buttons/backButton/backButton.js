import React from 'react';
import backIcon from './backIcon.png';
import {Link} from 'react-router-dom' // Replace with the actual path to your image
import "./backButton.css"

function BackButton({path}) {
    return (
        <>
            <Link to={path}>
                <button className='backButton'>
                    <img src={backIcon} alt="Back Icon" />
                </button>
            </Link>
        </>
    );
}

export default BackButton