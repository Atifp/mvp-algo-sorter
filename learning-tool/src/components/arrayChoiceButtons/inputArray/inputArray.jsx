import React, {useEffect, useState} from 'react'
import './inputArray.css';

function InputArray({ array, setArray, setArraySize }) {
    const [showDropdown, setShowDropdown] = useState(false)
    const handleArrayChange = (event) => {
        const newArray = event.target.value.split(',').map(Number) // Convert string input to array of numbers
        setArray(newArray)
        setArraySize(array.length)
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    };

    const clearArray = () => {
        setArray([])
        setArraySize(0)
    };

    return (
        <div className="App">
            <button id="inputButton" onClick={toggleDropdown}>
                Input Array
            </button>
            {showDropdown && (
                <div id="inputArrayForm">
                    <div>
                        <label htmlFor="arraySize">Enter the values for the array:</label>
                        <input type="text" id="arrayInput" value={array.join(',')} onChange={handleArrayChange} />
                        <button onClick={clearArray} id="clearArrayButton">clear</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InputArray;
