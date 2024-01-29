import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, image, path }) => {
    return (
        <Link to={path} className="card-link">
            <div className="card-container">
                <img
                    src={image}
                    alt={title}
                    className="card-image"
                />
                <div className="card-title">
                    {title}
                </div>
            </div>
        </Link>
    );
};

export default Card;
