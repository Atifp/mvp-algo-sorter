import {useEffect, useState} from 'react'
import './mergeSort.css'
import '../App.css'
import '../components/newBar.css'
import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import Description from '../components/Description/Description'
import PseudoCodeMerge from '../components/PseudoCode/PseudoCodeMerge'
import Tab from '../components/Tabs/Tab'
import {Link} from 'react-router-dom'
import ArrayVisualizer from '../components/ArrayVisualizer/ArrayVisualizer'

const InsertionSort = () => {
    const [array, setArray] = useState([137,76,175,292,90,50,74]);
    const [sortIndex, setSortIndex] = useState([]);
    const [barColor, setBarColor] = useState("");
    const [algoSteps, setAlgoSteps] = useState();
    const [arraySize, setArraySize] = useState();
    const [initialArray, setInitialArray] = useState([]);
    const [algoDescription, setAlgoDescription] = useState("");
    const [pseudoLine, setPseudoLine] =  useState([]);
    const [showGraph, setShowGraph] = useState(false);
    const [showReset, setShowReset] = useState(false);

    const ANIMATION_SPEED_MS = 100;
    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';
    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    const createInsertionStep = (stepNumber, arrayOfBars, newArray, algoDescription, pseudoLine, barColor) => {
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

    // Function to calculate steps for insertion sort
    function calculateInsertionSteps() {
        let myArray = [];
        const sortArray = [...array];
        const indices = sortArray.map((_, index) => index);
        let stepNum = 0;

        myArray.push(createInsertionStep(stepNum, indices, array, "Running the array against Insertion Sort...", [1], 'rgba(0, 246, 246, 0.66)'));

        for (let i = 1; i < sortArray.length; i++) {
            const key = sortArray[i];
            let j = i - 1;

            while (j >= 0 && sortArray[j] > key) {
                const tester = [...sortArray];
                myArray.push(createInsertionStep(stepNum += 1, [j, j + 1], tester, `Comparing elements ${sortArray[j]} and ${sortArray[j + 1]}`, [2], "red"));

                sortArray[j + 1] = sortArray[j];

                const tester2 = [...sortArray];
                myArray.push(createInsertionStep(stepNum += 1, [j, j + 1], tester2, `Shifting ${sortArray[j]} to the right`, [3], "green"));

                j = j - 1;
            }

            sortArray[j + 1] = key;
            const tester3 = [...sortArray];
            myArray.push(createInsertionStep(stepNum += 1, [j + 1], tester3, `Placing ${key} in its correct position`, [4], "green"));
        }

        myArray.push(createInsertionStep(stepNum += 1, indices, sortArray, 'Array is now sorted', [5], 'rgba(0, 255, 0, 0.6)'));
        myArray.push(createInsertionStep(stepNum, indices, sortArray, 'Array is now sorted, end of insertion sort', [6], 'rgba(0, 255, 0, 0.6)'));

        return myArray;
    }




    // function getMergeSortSteps(mainArray, sortingSteps) {
    //     // If there's only one value, no need for any animations
    //     if (mainArray.length <= 1) {
    //         sortingSteps.push(createInsertionStep("The array is of length 1, already sorted", [2,3], [], false, false, PRIMARY_COLOR, false));
    //         return sortingSteps;
    //     }
    //     // don't want the changes to occur on the actual array
    //     const copyArray = [...mainArray];
    //
    //     mergeSortHelper(mainArray, 0, mainArray.length - 1, copyArray, sortingSteps);
    //     return sortingSteps;
    // }

    // function mergeSortHelper(mainArray, startIdx, endIdx, copyArray, sortingSteps) {
    //     // If the start index is equal to the end index, it means the array has only one element and is already sorted
    //     if (startIdx === endIdx) return;
    //
    //     // Calculate the middle index of the array
    //     const middleIdx = Math.floor((startIdx + endIdx) / 2);
    //
    //     // Recursively call mergeSortHelper on the left and right halves of the array
    //     sortingSteps.push(createInsertionStep("Recursively call mergeSort on the left and right halves of the array to split them", [5,6], [], false, false, PRIMARY_COLOR, false));
    //
    //     mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, sortingSteps);
    //     mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, sortingSteps);
    //
    //     // Perform the merging step
    //     doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, sortingSteps);
    // }

    // function doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, sortingSteps) {
    //     sortingSteps.push(createInsertionStep("Merge the sub arrays, sorting them as they are being merged", [7,9], [], false, false, PRIMARY_COLOR, false));
    //     sortingSteps.push(createInsertionStep("Form an empty results array to store the sub arrays merged and sorted", [10,11], [], false, false, PRIMARY_COLOR, false));
    //
    //     let k = startIdx;
    //     let i = startIdx;
    //     let j = middleIdx + 1;
    //
    //     // Iterate through the sub-arrays and compare elements
    //     while (i <= middleIdx && j <= endIdx) {
    //         sortingSteps.push(createInsertionStep("Iterate through the sub-arrays and compare elements", [12], [], false, false, 'purple', false));
    //         //Highlight the elements being compared
    //         sortingSteps.push(createInsertionStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, SECONDARY_COLOR, true));
    //         // Revert the color after comparison
    //         sortingSteps.push(createInsertionStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, PRIMARY_COLOR, false));
    //
    //         // Compare and overwrite values in the original array
    //         if (copyArray[i] <= copyArray[j]) {
    //             sortingSteps.push(createInsertionStep(`Moving bar with value ${copyArray[i]}` , [13,14,15], [k, copyArray[i]], true, false, PRIMARY_COLOR, true));
    //             mainArray[k++] = copyArray[i++];
    //         } else {
    //             sortingSteps.push(createInsertionStep(`Elements ${copyArray[i]} and ${copyArray[j]} have been reordered` , [16,17,18], [k, copyArray[j]], true, false, PRIMARY_COLOR, true));
    //             mainArray[k++] = copyArray[j++];
    //         }
    //     }
    //
    //     // Handle remaining elements in the left subarray
    //     while (i <= middleIdx) {
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, SECONDARY_COLOR, true));
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, PRIMARY_COLOR, false));
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of left sub-array to result` , [19], [k, copyArray[i]], true, false, PRIMARY_COLOR,true));
    //         mainArray[k++] = copyArray[i++];
    //     }
    //
    //     // Handle remaining elements in the right subarray
    //     while (j <= endIdx) {
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, SECONDARY_COLOR, true));
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, PRIMARY_COLOR, false));
    //         sortingSteps.push(createInsertionStep(`Add remaining elements of right sub-array to result` , [20], [k, copyArray[j]], true, false, PRIMARY_COLOR, true));
    //         mainArray[k++] = copyArray[j++];
    //     }
    // }

    // function calculateSteps() {
    //     const newSteps = [];
    //     newSteps.push(createInsertionStep("Running the array against Merge Sort...", [1], [], false, false, PRIMARY_COLOR, false));
    //     //Now we need to get all the animations that need to occur on the graph
    //     const copyArray = [...array]
    //     const additionalSteps = getMergeSortSteps(copyArray, newSteps);
    //     newSteps.push(...additionalSteps);
    //
    //     newSteps.push(createInsertionStep("Array is now sorted", [21,22], [], false, false,'rgba(0, 255, 0, 0.6)', false));
    //     return newSteps;
    // }

    // async function performSortStep(algoSteps, currentStepIndex) {
    //     const arrayBars = document.getElementsByClassName('array-bar');
    //     const currentStep = algoSteps[currentStepIndex];
    //
    //     if (currentStep.color === 'rgba(0, 255, 0, 0.6)') {
    //         await new Promise(resolve =>
    //             setTimeout(() => {
    //                 for (let j = 0; j < array.length; j++) {
    //                     const styleOfBar = arrayBars[j].style;
    //                     setPseudoLine(currentStep.pseudoLineToHighlight);
    //                     setAlgoDescription(currentStep.algoDescription);
    //                     styleOfBar.backgroundColor = currentStep.color;
    //                     currentStep.completedStep = true;
    //                     setShowReset(true)
    //                 }
    //                 resolve();
    //             }, ANIMATION_SPEED_MS)
    //         );
    //         return; // Skip the increment in case of 'green'
    //     }
    //
    //     if (!currentStep.isHeightChange && !currentStep.isColorChange) {
    //         await new Promise(resolve =>
    //             setTimeout(() => {
    //                 setPseudoLine(currentStep.pseudoLineToHighlight);
    //                 setAlgoDescription(currentStep.algoDescription);
    //                 currentStep.completedStep = true;
    //                 resolve();
    //             }, ANIMATION_SPEED_MS)
    //         );
    //     } else if (currentStep.isColorChange) {
    //         await new Promise(resolve =>
    //             setTimeout(() => {
    //                 const [indexOfBarOne, indexOfBarTwo] = currentStep.animations;
    //                 const styleOfBarOne = arrayBars[indexOfBarOne].style;
    //                 const styleOfBarTwo = arrayBars[indexOfBarTwo].style;
    //                 const color = currentStep.color;
    //                 setPseudoLine(currentStep.pseudoLineToHighlight);
    //                 setAlgoDescription(currentStep.algoDescription);
    //                 styleOfBarOne.backgroundColor = color;
    //                 styleOfBarTwo.backgroundColor = color;
    //                 currentStep.completedStep = true;
    //                 resolve();
    //             }, ANIMATION_SPEED_MS)
    //         );
    //     } else if (currentStep.isHeightChange) {
    //         await new Promise(resolve =>
    //             setTimeout(() => {
    //                 const [indexOfBarOne, newHeight] = currentStep.animations;
    //                 const styleOfBarOne = arrayBars[indexOfBarOne].style;
    //                 setPseudoLine(currentStep.pseudoLineToHighlight);
    //                 setAlgoDescription(currentStep.algoDescription);
    //                 styleOfBarOne.height = `${newHeight}px`;
    //                 arrayBars[indexOfBarOne].textContent = newHeight;
    //                 currentStep.completedStep = true;
    //                 resolve();
    //             }, ANIMATION_SPEED_MS)
    //         );
    //     }
    //
    //     // Increment outside of the 'green' check
    //     currentStepIndex++;
    // }


    // async function stepThrough(algoSteps, loop) {
    //     for (let currentStepIndex = 0; currentStepIndex < algoSteps.length; currentStepIndex++) {
    //         const newStep = algoSteps[currentStepIndex]
    //         if (!newStep.completedStep){
    //             await performSortStep(algoSteps, currentStepIndex);
    //             if (!loop){
    //                 break;
    //             }
    //         }
    //     }
    // }

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
        setShowReset(false);
    }

    useEffect(() => {
        checkArraySize();
        setAlgoSteps(calculateInsertionSteps);
    }, [array])


    return (
        <div>
            <h1 className='mergeTitle'>Insertion Sort</h1>
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
            <div >
                <button  className="backButton" >
                    <Link to="/algorithms">Back</Link>
                </button>
            </div>
            {showGraph && (
                <div className="chart-holder">
                    <div className="bars">
                        {array.map((value, idx) => (
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
                        <div className="controlButtons">
                            <button disabled={showReset} onClick={sortArrayFully}>Sort</button>
                            {/*<button disabled={showReset} onClick={() => stepThrough(algoSteps, false)}>Step</button>*/}
                            {showReset && <button onClick={resetArray}>Reset Array</button>}
                        </div>
                        <div className="content-container">
                            <div>
                                <Description description={algoDescription} />
                            </div>
                            <div>
                                <PseudoCodeMerge lineToHighlight={pseudoLine}></PseudoCodeMerge>
                            </div>
                        </div>
                    </div>
                    <div className="infoSectionMerge">
                        <div className="box">
                            <h2> Insertion Sort</h2>
                            <p>Time Complexity: O(n2) </p>
                            <p>Description: </p>
                            <p>I'm trying to see what happens with this page</p>
                            <p>Testing all of it</p>
                        </div>
                        <div className="tabBlock">
                            <Tab algoName={"insertionSort"}></Tab>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InsertionSort;