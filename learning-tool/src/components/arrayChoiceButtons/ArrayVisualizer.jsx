import React from 'react';

function ArrayVisualizer({ fullArray }) {
    let arrayString = fullArray[0]
    for (let i=1; i< fullArray.length; i++){
        arrayString = arrayString + " , " + fullArray[i]
    }
    return (
        <div> Array to be sorted:  [ {arrayString} ] </div>
    );
}

export default ArrayVisualizer;
