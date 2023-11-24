import React from 'react';
import './arrayVisualiser.css';
import ClearArray from '../arrayChoiceButtons/clearArray/clearArray'

function ArrayVisualizer({ fullArray, setArray, setArraySize }) {
    const arrayString = fullArray.join(', ');

    return (
        <div className='array-container'>
            <div className='prefix-text'>Array to be sorted: [</div>
            <div className={`array-values ${fullArray.length > 17 ? 'scrollable' : ''}`}>
                {arrayString}
            </div>
            <div className='suffix-text'>] Elements: {fullArray.length}</div>
            <ClearArray setArray={setArray} setArraySize={setArraySize}></ClearArray>
        </div>
    );
}

export default ArrayVisualizer;
