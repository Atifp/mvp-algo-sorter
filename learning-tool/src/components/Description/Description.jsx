import React from 'react';
import "./description.css";

function Description({ description }) {
    return (
        <div className="description">
            <div> {description} </div>
        </div>
    );
}

export default Description;
