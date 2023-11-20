import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useEffect, useState} from 'react'
import ArrayVisualizer from "../components/ArrayVisualizer/ArrayVisualizer";
import {Link} from "react-router-dom";
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import '../App.css'
import './bubbleSort.css'
import PseudoCodeBubble from '../components/PseudoCode/PseudoCodeBubble'
import Description from '../components/Description/Description'
import Tab from '../components/Tabs/Tab'

const NewBubbleSort = () => {
    const [array, setArray] = useState([]);
    const [initialArray, setInitialArray] = useState([]);
    const [showGraph, setShowGraph] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const [pseudoLine, setPseudoLine] =  useState([]);
    const [sortIndex, setSortIndex] = useState([]);
    const [barColor, setBarColor] = useState("");
    const [algoSteps, setAlgoSteps] = useState([]);
    const [arraySize, setArraySize] = useState(0);
    const [dataArray, setDataArray] = useState(array);
    const [algoDescription, setAlgoDescription] = useState("")


    const createStep = (stepNumber, arrayOfBars, newArray, algoDescription, pseudoLine, barColor) => {
        return {
            stepNumber: stepNumber,
            arrayOfBars: arrayOfBars,
            newArray: newArray,
            algoDescription: algoDescription,
            barColor: barColor,
            pseudoLine: pseudoLine,
            completedStep: false
        }
    }

    function calculateBubbleSteps() {
        let myArray = [];
        // deepcopy the array passed in
        const sortArray = [...array];
        // see if indices can be replaced with sortArray.length
        const indices = sortArray.map((_, index) => index);
        let stepNum = 0;
        myArray.push(createStep(stepNum, indices, array, "Running the array against Bubble Sort...", [1], 'rgba(0, 246, 246, 0.66)'));
        myArray.push(createStep(stepNum, indices, array, "Checking the array and finding the first element", [2], 'rgba(0, 246, 246, 0.66)'));
        for (let i = 0; i < sortArray.length; i++) {
            // Last i elements are already in place
            for (let j = 0; j < sortArray.length - i - 1; j++) {
                // Checking if the item at present iteration
                // is greater than the next iteration
                if (sortArray[j] > sortArray[j + 1]) {
                    const tester = [...sortArray];
                    myArray.push(createStep(stepNum += 1, [j, j + 1], tester, `Comparing elements ${sortArray[j]} and ${sortArray[j + 1]}`, [3], "red"));
                    // If the condition is true then swap them
                    const temp = sortArray[j];
                    sortArray[j] = sortArray[j + 1];
                    sortArray[j + 1] = temp;
                    const tester2 = [...sortArray];
                    myArray.push(createStep(stepNum += 1, [j, j + 1], tester2, `Swapping elements ${sortArray[j]} and ${sortArray[j + 1]}`, [4, 5], "green"));
                }
            }
        }
        myArray.push(createStep(stepNum += 1, indices, sortArray, 'Array is now sorted', [6, 7], 'rgba(0, 255, 0, 0.6)'));
        myArray.push(createStep(stepNum, indices, sortArray, 'Array is now sorted, end of bubble sort', [8], 'rgba(0, 255, 0, 0.6)'));
        // after the steps are calculated, we then take the value known as algoSteps in Tab.jsx, set algoSteps = myArray
        return myArray;
    }

    function checkArraySize () {
        if (arraySize >= 5){
            setShowGraph(true)
        }else {
            setShowGraph(false)
        }
        setArraySize(array.length)
    }

    function sortArrayFully() {
        let currentIndex = 0
        let loopInterval
        loopInterval = setInterval(() => {
            if (currentIndex< algoSteps.length) {
                const currentStep = algoSteps[currentIndex];
                setArray(currentStep.newArray);
                setBarColor(currentStep.barColor);
                setAlgoDescription(currentStep.algoDescription)
                setSortIndex(currentStep.arrayOfBars);
                setPseudoLine(currentStep.pseudoLine);
                currentStep.completedStep = true;
                currentIndex++;
            } else {
                clearInterval(loopInterval)
                setShowReset(true)
            }
        }, 300)
    }

    const stepThroughSorting = async (loop) => {
        for (let i=0;i<algoSteps.length;i++){
            const currentStep = algoSteps[i];
            if (currentStep.completedStep === false) {
                setDataArray(currentStep.newArray);
                setBarColor(currentStep.barColor);
                setAlgoDescription(currentStep.algoDescription);
                setSortIndex(currentStep.arrayOfBars);
                setPseudoLine(currentStep.pseudoLine);
                currentStep.completedStep = true;
                if (!loop) {
                    break;
                }
            }
            if (currentStep.pseudoLine[0] === 6){
                setShowReset(true)
            }
        }
    };

    function resetArray() {
        for(let i=0; i< algoSteps.length;i++) {
            const currentStep = algoSteps[i];
            if (currentStep.completedStep === true) {
                currentStep.completedStep = false;
            }
        }
        const initialStep = algoSteps[0];
        setSortIndex(initialStep.arrayOfBars);
        setDataArray(initialArray);
        setArray(initialArray);
        setAlgoDescription(initialStep.algoDescription);
        setBarColor(initialStep.barColor);
        setPseudoLine(initialStep.pseudoLine);
        initialStep.completedStep = true;
        setShowReset(false)
    }


    useEffect(() => {
        const steps = calculateBubbleSteps();
        setAlgoSteps(steps);
    }, [array]);

    useEffect(() => {
        setDataArray(array);
    }, [array])

    // this checks the size of the array, and only shows the tab when the array is a certain size
    useEffect(() => {
        checkArraySize();
    }, [array]);

    return (
        <div>
            <h1 className='algoTitle'>Bubble Sort</h1>
            <div className="buttons">
                <div className="inputButton">
                    <InputArray array={array} setArray={setArray} setArraySize={setArraySize} setInitialArray={setInitialArray}></InputArray>
                </div>
                <div className="generate">
                    <GenerateArray array={array} setArray={setArray} setNewArraySize={setArraySize} setInitialArray={setInitialArray}></GenerateArray>
                </div>
                <div className="select">
                    <SelectArray setArray={setArray} setArraySize={setArraySize} setInitialArray={setInitialArray}></SelectArray>
                </div>
            </div>
            <div className="visualAlgo">
                <ArrayVisualizer fullArray={array}></ArrayVisualizer>
            </div>
            <div >
                <button  className="backButton" >
                    <Link to="/algorithms">Back</Link>
                </button>
            </div>
            {showGraph && (
                <div className="chart-container">
                    <div className="bars">
                        {dataArray.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}px`,
                                    backgroundColor: barColor && sortIndex.includes(idx) ? barColor : 'turquoise',
                                }}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                    <div className="content-container">
                        <div>
                            <Description description={algoDescription} />
                        </div>
                        <div>
                            <PseudoCodeBubble lineToHighlight={pseudoLine}></PseudoCodeBubble>
                        </div>
                        <div className="bubbleControlButtons">
                            <button onClick={sortArrayFully}>Sort</button>
                            <button onClick={() => stepThroughSorting(false)}>Step</button>
                            {showReset && <button onClick={resetArray}>Reset Array</button>}
                        </div>
                    </div>
                    <div className="infoSection">
                        <div className="box">
                            <h2> Bubble Sort</h2>
                            <p>Time Complexity: O(n2) </p>
                            <p>Description: </p>
                            <p>I'm trying to see what happens with this page</p>
                            <p>Testing all of it</p>
                        </div>
                        <div className="tabBlock">
                            <Tab></Tab>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewBubbleSort;