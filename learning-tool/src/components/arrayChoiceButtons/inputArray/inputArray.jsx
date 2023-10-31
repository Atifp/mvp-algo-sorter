import React, {useEffect, useState} from 'react'
import './inputArray.css';
import ClearArray from '../clearArray/clearArray'

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

    return (
        <div className="App">
            <button className="myInputButton" onClick={toggleDropdown}>
                Input Array
            </button>
            {showDropdown && (
                <div className="inputArrayForm">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <input type="text" value={array.join(',')} onChange={handleArrayChange} className="inputArray" />
                        <ClearArray setArray={setArray} setArraySize={setArraySize} ></ClearArray>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InputArray;
