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
import BackButton from '../components/buttons/backButton/backButton'

const MergeSort = () => {
    const [array, setArray] = useState([137,76,175,292,90,50,74]);
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

    function createMergeStep(algoDescription, pseudoLineToHighlight, animations, isHeightChange, isColorChange, color, isMergeStep) {
        return {
            algoDescription: algoDescription,
            pseudoLineToHighlight: pseudoLineToHighlight,
            completedStep: false,
            animations: animations,
            isHeightChange: isHeightChange,
            isColorChange: isColorChange,
            color: color,
            isMergeStep: isMergeStep,
        };
    }

    function getMergeSortSteps(mainArray, sortingSteps) {
        // If there's only one value, no need for any animations
        if (mainArray.length <= 1) {
            sortingSteps.push(createMergeStep("The array is of length 1, already sorted", [2,3], [], false, false, PRIMARY_COLOR, false));
            return sortingSteps;
        }
        // don't want the changes to occur on the actual array
        const copyArray = [...mainArray];

        mergeSortHelper(mainArray, 0, mainArray.length - 1, copyArray, sortingSteps);
        return sortingSteps;
    }

    function mergeSortHelper(mainArray, startIdx, endIdx, copyArray, sortingSteps) {
        // If the start index is equal to the end index, it means the array has only one element and is already sorted
        if (startIdx === endIdx) return;

        // Calculate the middle index of the array
        const middleIdx = Math.floor((startIdx + endIdx) / 2);

        // Recursively call mergeSortHelper on the left and right halves of the array
        sortingSteps.push(createMergeStep("Recursively call mergeSort on the left and right halves of the array to split them", [5,6], [], false, false, PRIMARY_COLOR, false));

        mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, sortingSteps);
        mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, sortingSteps);

        // Perform the merging step
        doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, sortingSteps);
    }

    function doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, sortingSteps) {
        sortingSteps.push(createMergeStep("Merge the sub arrays, sorting them as they are being merged", [7,9], [], false, false, PRIMARY_COLOR, false));
        sortingSteps.push(createMergeStep("Form an empty results array to store the sub arrays merged and sorted", [10,11], [], false, false, PRIMARY_COLOR, false));

        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;

        // Iterate through the sub-arrays and compare elements
        while (i <= middleIdx && j <= endIdx) {
            sortingSteps.push(createMergeStep("Iterate through the sub-arrays and compare elements", [12], [], false, false, 'purple', false));
            //Highlight the elements being compared
            sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, SECONDARY_COLOR, true));
            // Revert the color after comparison
            sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, PRIMARY_COLOR, false));

            // Compare and overwrite values in the original array
            if (copyArray[i] <= copyArray[j]) {
                sortingSteps.push(createMergeStep(`Moving bar with value ${copyArray[i]}` , [13,14,15], [k, copyArray[i]], true, false, PRIMARY_COLOR, true));
                mainArray[k++] = copyArray[i++];
            } else {
                sortingSteps.push(createMergeStep(`Elements ${copyArray[i]} and ${copyArray[j]} have been reordered` , [16,17,18], [k, copyArray[j]], true, false, PRIMARY_COLOR, true));
                mainArray[k++] = copyArray[j++];
            }
        }

        // Handle remaining elements in the left subarray
        while (i <= middleIdx) {
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, SECONDARY_COLOR, true));
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, PRIMARY_COLOR, false));
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [k, copyArray[i]], true, false, PRIMARY_COLOR,true));
            mainArray[k++] = copyArray[i++];
        }

        // Handle remaining elements in the right subarray
        while (j <= endIdx) {
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, SECONDARY_COLOR, true));
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, PRIMARY_COLOR, false));
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [k, copyArray[j]], true, false, PRIMARY_COLOR, true));
            mainArray[k++] = copyArray[j++];
        }
    }

    function calculateSteps() {
        const newSteps = [];
        newSteps.push(createMergeStep("Running the array against Merge Sort...", [1], [], false, false, PRIMARY_COLOR, false));
        //Now we need to get all the animations that need to occur on the graph
        const copyArray = [...array]
        const additionalSteps = getMergeSortSteps(copyArray, newSteps);
        newSteps.push(...additionalSteps);

        newSteps.push(createMergeStep("Array is now sorted", [21,22], [], false, false,'rgba(0, 255, 0, 0.6)', false));
        return newSteps;
    }

    async function performSortStep(algoSteps, currentStepIndex) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const currentStep = algoSteps[currentStepIndex];

        if (currentStep.color === 'rgba(0, 255, 0, 0.6)') {
            await new Promise(resolve =>
                setTimeout(() => {
                    for (let j = 0; j < array.length; j++) {
                        const styleOfBar = arrayBars[j].style;
                        setPseudoLine(currentStep.pseudoLineToHighlight);
                        setAlgoDescription(currentStep.algoDescription);
                        styleOfBar.backgroundColor = currentStep.color;
                        currentStep.completedStep = true;
                        setShowReset(true)
                    }
                    resolve();
                }, ANIMATION_SPEED_MS)
            );
            return; // Skip the increment in case of 'green'
        }

        if (!currentStep.isHeightChange && !currentStep.isColorChange) {
            await new Promise(resolve =>
                setTimeout(() => {
                    setPseudoLine(currentStep.pseudoLineToHighlight);
                    setAlgoDescription(currentStep.algoDescription);
                    currentStep.completedStep = true;
                    resolve();
                }, ANIMATION_SPEED_MS)
            );
        } else if (currentStep.isColorChange) {
            await new Promise(resolve =>
                setTimeout(() => {
                    const [indexOfBarOne, indexOfBarTwo] = currentStep.animations;
                    const styleOfBarOne = arrayBars[indexOfBarOne].style;
                    const styleOfBarTwo = arrayBars[indexOfBarTwo].style;
                    const color = currentStep.color;
                    setPseudoLine(currentStep.pseudoLineToHighlight);
                    setAlgoDescription(currentStep.algoDescription);
                    styleOfBarOne.backgroundColor = color;
                    styleOfBarTwo.backgroundColor = color;
                    currentStep.completedStep = true;
                    resolve();
                }, ANIMATION_SPEED_MS)
            );
        } else if (currentStep.isHeightChange) {
            await new Promise(resolve =>
                setTimeout(() => {
                    const [indexOfBarOne, newHeight] = currentStep.animations;
                    const styleOfBarOne = arrayBars[indexOfBarOne].style;
                    setPseudoLine(currentStep.pseudoLineToHighlight);
                    setAlgoDescription(currentStep.algoDescription);
                    styleOfBarOne.height = `${newHeight}px`;
                    arrayBars[indexOfBarOne].textContent = newHeight;
                    currentStep.completedStep = true;
                    resolve();
                }, ANIMATION_SPEED_MS)
            );
        }

        // Increment outside of the 'green' check
        currentStepIndex++;
    }


    async function stepThrough(algoSteps, loop) {
        for (let currentStepIndex = 0; currentStepIndex < algoSteps.length; currentStepIndex++) {
            const newStep = algoSteps[currentStepIndex]
            if (!newStep.completedStep){
                await performSortStep(algoSteps, currentStepIndex);
                if (!loop){
                    break;
                }
            }
        }
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
        setAlgoSteps(calculateSteps);
    }, [array])


    return (
        <div>
            <h1 className='mergeTitle'>Merge Sort</h1>
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
                        {array.map((value, idx) => (
                            <div
                                className="array-bar"
                                key={idx}
                                style={{
                                    height: `${value}px`,
                                    backgroundColor: PRIMARY_COLOR,
                                    marginRight: value.isMergeStep ? '90px' : '2px', // Add extra margin for merge steps
                                }}
                            >
                                {value}
                            </div>
                        ))}
                        <div className="controlButtons">
                            <button disabled={showReset} onClick={() => stepThrough(algoSteps, true)} className="greenButton" data-testid="sort-button">Sort</button>
                            <button disabled={showReset} onClick={() => stepThrough(algoSteps, false)} className="orangeButton" data-testid="step-button">Step</button>
                            {showReset && <button onClick={resetArray} className="redButton">Reset</button>}
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
                            <h2>Merge Sort</h2>
                            <p>Description: Merge Sort works by recursively dividing the array into halves, sorting each half, and then merging the sorted halves. Its predictable time complexity makes it suitable for a wide range of applications, especially when stability and consistent performance are important.</p>
                            <p>Use Cases: Merge Sort is efficient for large datasets and provides stable, consistent performance across different input scenarios.</p>
                            <p>Drawbacks: Additional space requirement for merging; may not be the most efficient for small datasets due to its recursive nature.</p>
                        </div>
                        <div className="tabBlock">
                            <Tab algoName={"mergeSort"}></Tab>
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
                                        <td>O(n log n)</td>
                                        <td>O(n)</td>
                                    </tr>
                                    <tr>
                                        <td>Average</td>
                                        <td>O(n log n)</td>
                                        <td>O(n)</td>
                                    </tr>
                                    <tr>
                                        <td>Worst</td>
                                        <td>O(n log n)</td>
                                        <td>O(n)</td>
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

export default MergeSort;