import React from 'react';
import './arrayVisualiser.css'

function ArrayVisualizer({ fullArray }) {
    let arrayString = fullArray[0]
    for (let i=1; i< fullArray.length; i++){
        arrayString = arrayString + " , " + fullArray[i]
    }
    return (
        <div>
            <div className='array'>
                Array to be sorted:  [ {arrayString} ] Elements: {fullArray.length}
            </div>
        </div>
    );
}

export default ArrayVisualizer;
