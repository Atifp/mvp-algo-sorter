import React, { useState } from 'react';
import './selectArray.css';

function SelectArray({setArray, setArraySize, setInitialArray}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [stringArray, setStringArray] = useState("");
    const handleArrayChange = (event) => {
        const newArray = event.target.value.split(',').map(Number); // Convert string input to array of numbers
        setStringArray(event.target.value);
        setArray(newArray);
        setInitialArray(newArray);
        setArraySize(newArray.length);
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <button onClick={toggleDropdown} className="selectArrayButton">
                Select Array
            </button>
            {showDropdown && (
                <div className="dropDownMenu">
                    <select  value={stringArray} onChange={handleArrayChange} size="3">
                        <option value=" " >empty</option>
                        <option value="305,300,270,202,200,170,115,103,100,95">low to high</option>
                        <option value="270,109,30,170,46,87,93,95">small</option>
                        <option value="73,279,86,156,165,207,105,68,209,79,256,58">medium</option>
                        <option value="131,214,113,132,32,229,167,208,180,266,280,253,147,87,231,262,222,119,199,144">large</option>
                        <option value="200,220,230,240,250,240,230,220,200">peak in the middle</option>
                        <option value="225,220,215,210,205,210,215,220,225">peak in the middle with troughs</option>
                        <option value="210,215,220,225,220,215,210">symmetric peak</option>
                        <option value="205,215,225,235,245,235,225,215,205">zigzag pattern</option>
                        <option value="27,67,81,107,125,287,164,139,90">partially sorted</option>
                    </select>
                </div>
            )}
        </div>
    );
}

export default SelectArray;
