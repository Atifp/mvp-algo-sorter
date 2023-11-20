import {useEffect, useState} from 'react'
import './mergeSort.css'
import '../App.css'
import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import Description from '../components/Description/Description'
import PseudoCodeMerge from '../components/PseudoCode/PseudoCodeMerge'

const MergeSort = () => {
    const [array, setArray] = useState([]);
    const [algoSteps, setAlgoSteps] = useState([]);
    const [arraySize, setArraySize] = useState(0);
    const [initialArray, setInitialArray] = useState([]);
    const [algoDescription, setAlgoDescription] = useState("");
    const [pseudoLine, setPseudoLine] =  useState([]);

    const ANIMATION_SPEED_MS = 50;
    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';
    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    function createMergeStep(algoDescription, pseudoLineToHighlight, animations, isHeightChange, isColorChange, color) {
        return {
            algoDescription: algoDescription,
            pseudoLineToHighlight: pseudoLineToHighlight,
            completedStep: false,
            animations: animations,
            isHeightChange: isHeightChange,
            isColorChange: isColorChange,
            color: color
        };
    }

    function getMergeSortSteps(mainArray, sortingSteps) {
        const animations = [];

        // If there's only one value, no need for any animations
        if (mainArray.length <= 1) {
            sortingSteps.push(createMergeStep("The array is of length 1, already sorted", [2,3], [], false, false, PRIMARY_COLOR));
            return sortingSteps;
        }
        // don't want the changes to occur on the actual array
        const copyArray = [...mainArray];

        mergeSortHelper(mainArray, 0, mainArray.length - 1, copyArray, animations, sortingSteps);
        return sortingSteps;
    }

    function mergeSortHelper(mainArray, startIdx, endIdx, copyArray, animations, sortingSteps) {
        // If the start index is equal to the end index, it means the array has only one element and is already sorted
        if (startIdx === endIdx) return;

        // Calculate the middle index of the array
        const middleIdx = Math.floor((startIdx + endIdx) / 2);

        // Recursively call mergeSortHelper on the left and right halves of the array
        sortingSteps.push(createMergeStep("Recursively call mergeSort on the left and right halves of the array to split them", [5,6], [], false, false, PRIMARY_COLOR));

        mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations, sortingSteps);
        mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations, sortingSteps);

        // Perform the merging step
        doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations, sortingSteps);
    }

    function doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations, sortingSteps) {
        sortingSteps.push(createMergeStep("Merge the sub arrays, sorting them as they are being merged", [7,9], [], false, false, PRIMARY_COLOR));
        sortingSteps.push(createMergeStep("Form an empty results array to store the sub arrays merged and sorted", [10,11], [], false, false, PRIMARY_COLOR));

        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;

        // Iterate through the sub-arrays and compare elements
        while (i <= middleIdx && j <= endIdx) {
            sortingSteps.push(createMergeStep("Iterate through the sub-arrays and compare elements", [12], [], false, false, SECONDARY_COLOR));
            //Highlight the elements being compared
            sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, PRIMARY_COLOR));
            animations.push([i, j]);
            // Revert the color after comparison
            sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j], false, true, PRIMARY_COLOR));
            animations.push([i, j]);

            // Compare and overwrite values in the original array
            if (copyArray[i] <= copyArray[j]) {
                sortingSteps.push(createMergeStep(`Moving bar with value ${copyArray[i]}` , [13,14,15], [k, copyArray[i]], true, false, PRIMARY_COLOR));
                animations.push([k, copyArray[i]]);
                mainArray[k++] = copyArray[i++];
            } else {
                sortingSteps.push(createMergeStep(`Elements ${copyArray[i]} and ${copyArray[j]} have been reordered` , [16,17,18], [k, copyArray[j]], true, false, SECONDARY_COLOR));
                animations.push([k, copyArray[j]]);
                mainArray[k++] = copyArray[j++];
            }
        }

        // Handle remaining elements in the left subarray
        while (i <= middleIdx) {
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, SECONDARY_COLOR));
            animations.push([i, i]);
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i], false, true, PRIMARY_COLOR));
            animations.push([i, i]);
            sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [k, copyArray[i]], true, false, PRIMARY_COLOR));
            animations.push([k, copyArray[i]]);
            mainArray[k++] = copyArray[i++];
        }

        // Handle remaining elements in the right subarray
        while (j <= endIdx) {
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, SECONDARY_COLOR));
            animations.push([j, j]);
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j], false, true, PRIMARY_COLOR));
            animations.push([j, j]);
            sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [k, copyArray[j]], true, false, PRIMARY_COLOR));
            animations.push([k, copyArray[j]]);
            mainArray[k++] = copyArray[j++];
        }
    }

    function calculateSteps() {
        const newSteps = [];
        newSteps.push(createMergeStep("Running the array against Merge Sort...", [1], [], false, false, PRIMARY_COLOR));
        //Now we need to get all the animations that need to occur on the graph
        const copyArray = [...array]
        const additionalSteps = getMergeSortSteps(copyArray, newSteps);
        newSteps.push(...additionalSteps);

        newSteps.push(createMergeStep("Array is now sorted", [21], [], false, false,'green'));
        newSteps.push(createMergeStep("Array is now sorted", [22], [], false, false,'green'));
        return newSteps;
    }

    async function sortArray(algoSteps) {
        // now I need to form the steps
        for (let i = 0; i < algoSteps.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const currentStep = algoSteps[i];
            if (currentStep.color === 'green'){
                await new Promise(resolve =>
                    setTimeout(() => {
                        for (let j = 0; j < array.length; j++) {
                            const styleOfBar = arrayBars[j].style;
                            setPseudoLine(currentStep.pseudoLineToHighlight);
                            setAlgoDescription(currentStep.algoDescription);
                            styleOfBar.backgroundColor = currentStep.color;
                            currentStep.completedStep = true;
                        }
                        resolve();
                    },  ANIMATION_SPEED_MS)
                );


            }
            if (!currentStep.isHeightChange && !currentStep.isColorChange) {
                await new Promise(resolve =>
                    setTimeout(() => {
                        setPseudoLine(currentStep.pseudoLineToHighlight);
                        setAlgoDescription(currentStep.algoDescription);
                        currentStep.completedStep = true;
                        resolve();
                    },  ANIMATION_SPEED_MS)
                );
            } else if (currentStep.isColorChange) {
                await new Promise(resolve =>
                    setTimeout(() => {
                        const [indexOfBarOne, indexOfBarTwo] = currentStep.animations
                        const styleOfBarOne = arrayBars[indexOfBarOne].style;
                        const styleOfBarTwo = arrayBars[indexOfBarTwo].style;
                        const color = currentStep.color
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
        }
    }

    function stepArray() {
        return undefined
    }

    useEffect(() => {
        setAlgoSteps(calculateSteps)
    }, [array])


    return (
        <div>
            <h1 className='mergeTitle'>Merge Sort</h1>
            <div className="app">
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
                <div className="bars">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                height: `${value}px`,
                                backgroundColor: PRIMARY_COLOR,
                            }}
                        >
                            {value}
                        </div>
                    ))}
                </div>
                <div className="controlButtons">
                    <button onClick={() => sortArray(algoSteps)}>Sort</button>
                    <button onClick={() => stepArray()}>Step</button>
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
        </div>
    );
};

export default MergeSort;