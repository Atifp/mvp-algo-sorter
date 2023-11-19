import React, {useEffect, useState} from 'react'
import './generateArray.css';
import ArraySizeSlider from './arraySizeSlider'

function GenerateArray({ array, setArray, setNewArraySize, setInitialArray}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [arraySize, setArraySize] = useState(array.length);
    const generateArray = () => {
        const randArray = [];
        while(randArray.length < arraySize) {
            const num = Math.floor(Math.random()* (300 - 24 + 1) + 24);
            if (randArray.indexOf(num) === -1) {
                randArray.push(num);
            }
        }
        setArray(randArray);
        setInitialArray(randArray);
        return array;
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    };

    const handleArraySize = (value) => {
        setArraySize(value);
        setNewArraySize(value);
    };

    // this generates a new array depending on the change in the slider
    useEffect(() => {
        generateArray();
    }, [arraySize]);


    return (
        <div >
            <button onClick={toggleDropdown} className="generateArrayButton">
                Generate Array
            </button>
            {showDropdown && (
                <div className="generateArrayForm">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ArraySizeSlider value={arraySize} onChange={handleArraySize} min={"5"} max={"20"} style={{ marginRight: '10px' }} />
                            <button onClick={() => generateArray()} className="generateRandomArrayButton">Change Values</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GenerateArray;
