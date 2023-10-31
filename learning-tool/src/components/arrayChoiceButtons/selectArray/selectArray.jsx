import React, { useState } from 'react';
import './selectArray.css';

function SelectArray({setArray, setArraySize}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [stringArray, setStringArray] = useState("");
    const handleArrayChange = (event) => {
        const newArray = event.target.value.split(',').map(Number); // Convert string input to array of numbers
        setStringArray(event.target.value);
        setArray(newArray);
        setArraySize(newArray.length);
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <button onClick={toggleDropdown} id={ 'selectButton'} className={`selectArrayButton`}>
                Select Array
            </button>
            {showDropdown && (
                <div id="dropdownForm" style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 htmlFor="arraySize" style={{ display: 'flex', fontSize: 12}}>Choose Array: </h3>
                    <select id="arraySize" value={stringArray} onChange={handleArrayChange} >
                        <option value=" ">empty</option>
                        <option value="35,30,27,22,20,17,15,13,10,5">low to high</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            )}
        </div>
    );
}

export default SelectArray;
