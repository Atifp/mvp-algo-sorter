import React from 'react';
import homeIcon from './homeIcon.png';
import {Link} from 'react-router-dom' // Replace with the actual path to your image
import "./homeButton.css"

function HomeButton() {
    return (
        <>
            <Link to="/">
                <button className='homeButton'>
                    <img src={homeIcon} alt="Home Icon" />
                </button>
            </Link>
            <div className="header-text">
                <h1>Visual Algorithm Sorter</h1>
            </div>
        </>
    );
}

export default HomeButton