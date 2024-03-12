import {useEffect, useState} from 'react'
import './mergeSort.css'
import '../App.css'
import '../components/newBar.css'
import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import Description from '../components/Description/Description'
import Tab from '../components/Tabs/Tab'
import ArrayVisualizer from '../components/ArrayVisualizer/ArrayVisualizer'
import PseudoCodeSelection from '../components/PseudoCode/PseudoCodeSelection'
import BackButton from '../components/buttons/backButton/backButton'

const SelectionSort = () => {
    const [array, setArray] = useState([137,76,175,292,90,50,74]);
    const [dataArray, setDataArray] = useState(array);
    const [sortIndex, setSortIndex] = useState([]);
    const [barColor, setBarColor] = useState("");
    const [algoSteps, setAlgoSteps] = useState([]);
    const [arraySize, setArraySize] = useState();
    const [initialArray, setInitialArray] = useState([]);
    const [algoDescription, setAlgoDescription] = useState("");
    const [pseudoLine, setPseudoLine] =  useState([]);
    const [showGraph, setShowGraph] = useState(false);
    const [showReset, setShowReset] = useState(false);

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';
    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    const createStep = (arrayOfBars, newArray, algoDescription, pseudoLine, barColor) => {
        return {
            arrayOfBars: arrayOfBars,
            newArray: newArray,
            algoDescription: algoDescription,
            barColor: barColor,
            pseudoLine: pseudoLine,
            completedStep: false,
        }
    };

    function calculateSelectionSteps() {
        let myArray = [];
        let copyArray = [...array];
        const indices = array.map((_, index) => index);
        myArray.push(createStep(indices, copyArray, "Running the array against Selection Sort...", [1], PRIMARY_COLOR));
        myArray.push(createStep(indices, copyArray, "Finding the minimum element in the unsorted region", [2, 3], PRIMARY_COLOR));
        for (let i = 0; i < array.length; i++) {
            let minIndex = i;
            myArray.push(createStep([minIndex], copyArray, `Set bar ${copyArray[minIndex]} as min index`, [3], SECONDARY_COLOR));

            for (let j = i + 1; j < array.length; j++) {
                myArray.push(createStep([minIndex,j], copyArray, `Comparing bar ${copyArray[minIndex]} and bar ${copyArray[j]}`, [4,5], SECONDARY_COLOR));
                if (copyArray[j] < copyArray[minIndex]) {
                    minIndex = j;
                    myArray.push(createStep([minIndex], copyArray, `Set bar ${copyArray[minIndex]} as min index`, [6], SECONDARY_COLOR));
                }
            }

            myArray.push(createStep([minIndex], copyArray, `Selecting the minimum element ${copyArray[minIndex]}`, [6], "red"));
            const swapArray = [...copyArray];
            const temp = swapArray[minIndex];
            swapArray[minIndex] = swapArray[i];
            swapArray[i] = temp;

            if (i !== minIndex) {
                myArray.push(createStep([minIndex, i], copyArray, `Swapping elements ${copyArray[minIndex]} and ${copyArray[i]}`, [7, 8], "red"));
                myArray.push(createStep([minIndex, i], swapArray, `Elements ${swapArray[minIndex]} and ${swapArray[i]} are swapped`, [7, 8], "green"));
            } else {
                myArray.push(createStep([i], copyArray, `Bar ${copyArray[minIndex]} in the correct position`, [7, 8], "green"));
            }
            copyArray = swapArray
        }

        myArray.push(createStep(indices, copyArray, 'Array is now sorted', [9, 10], 'rgba(0, 255, 0, 0.6)'));
        myArray.push(createStep(indices, copyArray, 'Array is now sorted, end of selection sort', [9, 10], 'rgba(0, 255, 0, 0.6)'));
        return myArray;
    }


    function sortArray() {
        let currentIndex = 0
        let loopInterval
        loopInterval = setInterval(() => {
            if (currentIndex < algoSteps.length) {
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
    };

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
            if (currentStep.pseudoLine[1] === 10){
                setShowReset(true)
            }
        }
    };

    function checkArraySize () {
        if (arraySize >= 5){
            setShowGraph(true)
        }else {
            setShowGraph(false)
        }
        setArraySize(array.length)
    }

    function resetArray() {
        for (let i = 0; i < algoSteps.length; i++) {
            const currentStep = algoSteps[i];
            currentStep.completedStep = false;
        }
        for (let j = 0; j < array.length; j++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const styleOfBar = arrayBars[j].style;
            styleOfBar.backgroundColor = PRIMARY_COLOR;
            styleOfBar.height = `${initialArray[j]}px`;
            arrayBars[j].textContent = initialArray[j];
        }
        setPseudoLine([1]);
        setAlgoDescription("");
        setArray(initialArray);
        setDataArray(initialArray);
        setShowReset(false);
    }

    useEffect(() => {
        const steps = calculateSelectionSteps();
        setAlgoSteps(steps);
    }, [array])

    useEffect(() => {
        setDataArray(array);
    }, [array])

    useEffect(() => {
        checkArraySize();
    }, [array])


    return (
        <div>
            <h1 className='mergeTitle'>Selection Sort</h1>
            <div className="button-container">
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
                <ArrayVisualizer setArray={setArray} setArraySize={setArraySize} fullArray={array}></ArrayVisualizer>
            </div>
            <BackButton path="/algorithms"></BackButton>
            {showGraph && (
                <div className="chart-holder">
                    <div className="bars">
                        {dataArray.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}px`,
                                    backgroundColor: barColor && sortIndex.includes(idx) ? barColor : 'turquoise',
                                    marginRight: '3px',
                                }}
                            >
                                {value}
                            </div>
                        ))}
                        <div className="controlButtons">
                            <button disabled={showReset} onClick={sortArray} className="greenButton" data-testid="sort-button">Sort</button>
                            <button disabled={showReset} onClick={() => stepThroughSorting(false)} className="orangeButton" data-testid="step-button">Step</button>
                            {showReset && <button onClick={resetArray} className="redButton">Reset</button>}
                        </div>
                        <div className="content-container">
                            <div>
                                <Description description={algoDescription} />
                            </div>
                            <div>
                                <PseudoCodeSelection lineToHighlight={pseudoLine}></PseudoCodeSelection>
                            </div>
                        </div>
                    </div>
                    <div className="infoSectionMerge">
                        <div className="box">
                            <h2> Selection Sort</h2>
                            <p>Description: Selection Sort works by dividing the array into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first unsorted element. While simple, its time complexity makes it less efficient for large datasets.</p>
                            <p>Use Cases: Selection Sort is suitable for small datasets or when memory is limited due to its simplicity and in-place nature.</p>
                            <p>Drawbacks: Inefficient for large datasets; not suitable for already partially sorted arrays.</p>
                        </div>
                        <div className="tabBlock">
                            <Tab algoName={"selectionSort"}></Tab>
                            <div>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Case</th>
                                        <th>Time Complexity</th>
                                        <th>Space Complexity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Best</td>
                                        <td>O(n<sup>2</sup>)</td>
                                        <td>O(1)</td>
                                    </tr>
                                    <tr>
                                        <td>Average</td>
                                        <td>O(n<sup>2</sup>)</td>
                                        <td>O(1)</td>
                                    </tr>
                                    <tr>
                                        <td>Worst</td>
                                        <td>O(n<sup>2</sup>)</td>
                                        <td>O(1)</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectionSort;