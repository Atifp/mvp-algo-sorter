import React from 'react';
import './generateArray.css'
function ArraySizeSlider({ value, onChange, min, max }) {
    const handleChange = (event) => {
        const value = event.target.value;
        onChange(value);
    };
    return (
        <div className='ArraySizeSlider'>
            <input
                type="range"
                id="array-size"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default ArraySizeSlider;