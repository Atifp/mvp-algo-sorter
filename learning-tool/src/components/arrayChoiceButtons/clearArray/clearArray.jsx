import React from 'react'
import './clearArray.css'

function ClearArray({setArray, setArraySize}) {
    const clearArray = () => {
        setArray([]);
        setArraySize(0);
    };

    return (
        <div className="App">
            <button onClick={clearArray} className="myClearArrayButton">clear</button>
        </div>
    )
};

export default ClearArray;