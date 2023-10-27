import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useState} from 'react'
import ArrayVisualizer from "../components/arrayChoiceButtons/ArrayVisualizer";
import {Link} from "react-router-dom";
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import '../App.css'

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(0)

    function bubbleSort() {
        const arrayToSort = [...array]
        const n = array.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                // Compare adjacent elements
                if (arrayToSort[j] > arrayToSort[j + 1]) {
                    // Swap them
                    const temp = arrayToSort[j];
                    arrayToSort[j] = arrayToSort[j + 1];
                    arrayToSort[j + 1] = temp;
                }
            }
        }
        setArray(arrayToSort)
    }
    return (
        <div>
            <h1 className='title'>Bubble Sort</h1>
            <div className="buttons">
                <div className="inputButton">
                    <InputArray array={array} setArray={setArray} setArraySize={setArraySize}></InputArray>
                </div>
                <div className="generate">
                    <GenerateArray array={array} setArray={setArray} setNewArraySize={setArraySize}></GenerateArray>
                </div>
                <div className="select">
                    <SelectArray setArray={setArray} setArraySize={setArraySize} ></SelectArray>
                </div>
            </div>
            <div className="visualAlgo">
                <ArrayVisualizer fullArray={array}></ArrayVisualizer>
            </div>
            <button onClick={bubbleSort}>Sort</button>
            <button >
                <Link to="/algorithms">Back</Link>
            </button>
        </div>
    );
};

export default BubbleSort;