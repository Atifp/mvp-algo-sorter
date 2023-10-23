import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useState} from 'react'
import ArrayVisualizer from "../components/arrayChoiceButtons/ArrayVisualizer";
import {Link} from "react-router-dom";

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(0)

    const bubbleSortAlgorithm = () => {

    }
    return (
        <div >
            <h1>Bubble Sort</h1>
            <div className="buttons">
                <div className="inputButton">
                    <InputArray array={array} setArray={setArray} setArraySize={setArraySize}></InputArray>
                </div>
            </div>
            <button onClick={bubbleSortAlgorithm}>Sort</button>
            <ArrayVisualizer fullArray={array}></ArrayVisualizer>
            <button >
                <Link to="/algorithms">Back</Link>
            </button>
        </div>
    );
};

export default BubbleSort;