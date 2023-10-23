import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useState} from 'react'

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(0)

    return (
        <div >
            <h1>Bubble Sort</h1>
            <div className="buttons">
                <div className="inputButton">
                    <InputArray array={array} setArray={setArray} setArraySize={setArraySize}></InputArray>
                </div>
            </div>
        </div>
    );
};

export default BubbleSort;