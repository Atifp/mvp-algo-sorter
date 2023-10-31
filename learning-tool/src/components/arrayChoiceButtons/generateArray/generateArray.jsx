import React, {useEffect, useState} from 'react'
import './generateArray.css';
import ArraySizeSlider from './arraySizeSlider'

function GenerateArray({ array, setArray, setNewArraySize}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [arraySize, setArraySize] = useState(array.length);
    const generateArray = () => {
        const randArray = []
        while(randArray.length < arraySize) {
            const num = Math.floor(Math.random()*100)
            if (randArray.indexOf(num) === -1) {
                randArray.push(num)
            }
        }
        setArray(randArray)
        return array
    };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    };

    const handleArraySize = (value) => {
        setArraySize(value)
        setNewArraySize(value)
    };

    // this generates a new array depending on the change in the slider
    useEffect(() => {
        generateArray();
    }, [arraySize]);


    return (
        <div className="App">
            <button id="generateArrayButton" onClick={toggleDropdown} className="generateArrayButton">
                Generate Array
            </button>
            {showDropdown && (
                <div id="generateArrayForm">
                    <div>
                        <div className='sliderInfo' style={{ display: 'flex', alignItems: 'center' }}>
                            <ArraySizeSlider value={arraySize} onChange={handleArraySize} min={"5"} max={"30"} style={{ marginRight: '10px' }} />
                            <button onClick={() => generateArray()} className="generateRandomArrayButton">Change Values</button>
                        </div>
                        <h3> Elements: {arraySize}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GenerateArray;
