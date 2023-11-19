import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useEffect, useState} from 'react'
import ArrayVisualizer from "../components/ArrayVisualizer/ArrayVisualizer";
import {Link} from "react-router-dom";
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import '../App.css'
import './bubbleSort.css'
import '../components/newBar.css'
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
        }, 500)
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
            <h1 className='mergeTitle'>Bubble Sort</h1>
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
                    <div className="chart-holder">
                        <div className="sorting-visualizer">
                            <div className="bars">
                                {dataArray.map((value, idx) => (
                                    <div
                                        className="bar"
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
                        </div>
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

// function sortArray() {
//     const sortingSteps = []
//     sortingSteps.push(createMergeStep("Running the array against Merge Sort...", [1], []));
//     //Now we need to get all the animations that need to occur on the graph
//     const combinedValues  = getMergeSortSteps(array, sortingSteps);
//     const animations = combinedValues[0];
//     sortingSteps.push(...combinedValues[1]);
//     // now I need to form the steps
//     for (let i = 0; i < animations.length; i++) {
//         //const currentStep = sortingSteps[i];
//         // if (animations.length <= 0) {
//         //     console.log("steps with no animations", currentStep);
//         //     setPseudoLine(currentStep.pseudoLineToHighlight)
//         //     setAlgoDescription(currentStep.algoDescription)
//         //     currentStep.completedStep = true
//         // } else{
//         const arrayBars = document.getElementsByClassName('array-bar');
//         //console.log("steps with animations", currentStep);
//         //const [_, checkHeight] = currentStep.animations
//         //if (checkHeight <= 23) {
//         if(i % 3 === 0 || i % 3 == 1) {
//             //currentStep.completedStep = true
//             const [indexOfBarOne, indexOfBarTwo] = animations
//             const styleOfBarOne = arrayBars[indexOfBarOne].style;
//             const styleOfBarTwo = arrayBars[indexOfBarTwo].style;
//             //setPseudoLine(currentStep.pseudoLineToHighlight)
//             //setAlgoDescription(currentStep.algoDescription)
//             const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//             setTimeout(() => {
//                 styleOfBarOne.backgroundColor = color;
//                 styleOfBarTwo.backgroundColor = color;
//             }, i * ANIMATION_SPEED_MS);
//         } else {
//             setTimeout(() => {
//                 //currentStep.completedStep = true
//                 const [indexOfBarOne, newHeight] = animations;
//                 const styleOfBarOne = arrayBars[indexOfBarOne].style;
//                 styleOfBarOne.height = `${newHeight}px`;
//                 arrayBars[indexOfBarOne].textContent = newHeight;
//                 //setPseudoLine(currentStep.pseudoLineToHighlight)
//                 //setAlgoDescription(currentStep.algoDescription)
//             }, i * ANIMATION_SPEED_MS);
//         }
//     }
// }

//import {useState} from 'react'
//import './mergeSort.css'
// import '../App.css'
// import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
// import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
// import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
// import Description from '../components/Description/Description'
// import PseudoCodeMerge from '../components/PseudoCode/PseudoCodeMerge'
//
// const MergeSort = () => {
//     const [array, setArray] = useState([]);
//     const [arraySize, setArraySize] = useState(0);
//     const [initialArray, setInitialArray] = useState([]);
//     const [algoDescription, setAlgoDescription] = useState("");
//     const [pseudoLine, setPseudoLine] =  useState([]);
//
//     const ANIMATION_SPEED_MS = 2000;
//     // This is the main color of the array bars.
//     const PRIMARY_COLOR = 'turquoise';
//     // This is the color of array bars that are being compared throughout the animations.
//     const SECONDARY_COLOR = 'red';
//
//     function createMergeStep(algoDescription, pseudoLineToHighlight, animations) {
//         return {
//             algoDescription: algoDescription,
//             pseudoLineToHighlight: pseudoLineToHighlight,
//             completedStep: false,
//             animations: animations
//         };
//     }
//
//     function getMergeSortSteps(mainArray, sortingSteps) {
//         const animations = [];
//
//         // If there's only one value, no need for any animations
//         if (mainArray.length <= 1) {
//             sortingSteps.push(createMergeStep("The array is of length 1, already sorted", [2,3], []));
//             return [animations, sortingSteps];
//         }
//         // don't want the changes to occur on the actual array
//         const copyArray = [...mainArray];
//
//         mergeSortHelper(mainArray, 0, mainArray.length - 1, copyArray, animations, sortingSteps);
//         return [animations, sortingSteps];
//     }
//
//     function mergeSortHelper(mainArray, startIdx, endIdx, copyArray, animations, sortingSteps) {
//         // If the start index is equal to the end index, it means the array has only one element and is already sorted
//         if (startIdx === endIdx) return;
//
//         // Calculate the middle index of the array
//         const middleIdx = Math.floor((startIdx + endIdx) / 2);
//
//         // Recursively call mergeSortHelper on the left and right halves of the array
//         sortingSteps.push(createMergeStep("Recursively call mergeSort on the left and right halves of the array to split them", [5,6], []));
//
//         mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations, sortingSteps);
//         mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations, sortingSteps);
//
//         // Perform the merging step
//         doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations, sortingSteps);
//     }
//
//     function doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations, sortingSteps) {
//         sortingSteps.push(createMergeStep("Merge the sub arrays, sorting them as they are being merged", [7,9], []));
//
//         sortingSteps.push(createMergeStep("Form an empty results array to store the sub arrays merged and sorted", [10,11], []));
//
//         let k = startIdx;
//         let i = startIdx;
//         let j = middleIdx + 1;
//
//         // Iterate through the sub-arrays and compare elements
//         while (i <= middleIdx && j <= endIdx) {
//             sortingSteps.push(createMergeStep("Iterate through the sub-arrays and compare elements", [12], []));
//             //Highlight the elements being compared
//             sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j]));
//             animations.push([i, j]);
//             // Revert the color after comparison
//             sortingSteps.push(createMergeStep(`Comparing ${copyArray[i]} and ${copyArray[j]}` , [13], [i, j]));
//             animations.push([i, j]);
//
//             // Compare and overwrite values in the original array
//             if (copyArray[i] <= copyArray[j]) {
//                 sortingSteps.push(createMergeStep(`Moving bar with value ${copyArray[i]}` , [13,14,15], [k, copyArray[i]]));
//                 animations.push([k, copyArray[i]]);
//                 mainArray[k++] = copyArray[i++];
//             } else {
//                 sortingSteps.push(createMergeStep(`Elements ${copyArray[i]} and ${copyArray[j]} have been reordered` , [16,17,18], [k, copyArray[j]]));
//                 animations.push([k, copyArray[j]]);
//                 mainArray[k++] = copyArray[j++];
//             }
//         }
//
//         // Handle remaining elements in the left subarray
//         while (i <= middleIdx) {
//             sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i]));
//             animations.push([i, i]);
//             sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [i, i]));
//             animations.push([i, i]);
//             sortingSteps.push(createMergeStep(`Add remaining elements of left sub-array to result` , [19], [k, copyArray[i]]));
//             animations.push([k, copyArray[i]]);
//             mainArray[k++] = copyArray[i++];
//         }
//
//         // Handle remaining elements in the right subarray
//         while (j <= endIdx) {
//             sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j]));
//             animations.push([j, j]);
//             sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [j, j]));
//             animations.push([j, j]);
//             sortingSteps.push(createMergeStep(`Add remaining elements of right sub-array to result` , [20], [k, copyArray[j]]));
//             animations.push([k, copyArray[j]]);
//             mainArray[k++] = copyArray[j++];
//         }
//     }
//
//
//     function sortArray() {
//         const sortingSteps = []
//         sortingSteps.push(createMergeStep("Running the array against Merge Sort...", [1], []));
//         //Now we need to get all the animations that need to occur on the graph
//         const combinedValues  = getMergeSortSteps(array, sortingSteps);
//         const animations = combinedValues[0];
//         sortingSteps.push(...combinedValues[1]);
//         sortingSteps.push(createMergeStep("Array is now sorted", [21], []));
//         sortingSteps.push(createMergeStep("Array is now sorted", [22], []));
//         // now I need to form the steps
//         for (let i = 0; i < sortingSteps.length; i++) {
//             const currentStep = sortingSteps[i];
//             if (currentStep.animations.length <= 0) {
//                 console.log("steps with no animations", currentStep);
//                 setPseudoLine(currentStep.pseudoLineToHighlight)
//                 setAlgoDescription(currentStep.algoDescription)
//                 currentStep.completedStep = true
//             } else {
//                 const arrayBars = document.getElementsByClassName('array-bar');
//                 console.log("steps with animations", currentStep);
//                 const [_, checkHeight] = currentStep.animations
//                 if (checkHeight <= 23) {
//                     currentStep.completedStep = true
//                     const [indexOfBarOne, indexOfBarTwo] = currentStep.animations
//                     const styleOfBarOne = arrayBars[indexOfBarOne].style;
//                     const styleOfBarTwo = arrayBars[indexOfBarTwo].style;
//                     setPseudoLine(currentStep.pseudoLineToHighlight)
//                     setAlgoDescription(currentStep.algoDescription)
//                     const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//                     setTimeout(() => {
//                         styleOfBarOne.backgroundColor = color;
//                         styleOfBarTwo.backgroundColor = color;
//                     }, i * ANIMATION_SPEED_MS);
//                 } else {
//                     setTimeout(() => {
//                         currentStep.completedStep = true
//                         const [indexOfBarOne, newHeight] = currentStep.animations;
//                         const styleOfBarOne = arrayBars[indexOfBarOne].style;
//                         styleOfBarOne.height = `${newHeight}px`;
//                         arrayBars[indexOfBarOne].textContent = newHeight;
//                         setPseudoLine(currentStep.pseudoLineToHighlight)
//                         setAlgoDescription(currentStep.algoDescription)
//                     }, i * ANIMATION_SPEED_MS);
//                 }
//             }
//         }
//     }
//
//     function stepArray() {
//         return undefined
//     }
//
//
//     return (
//         <div>
//             <h1 className='mergeTitle'>Merge Sort</h1>
//             <div className="app">
//                 <div className="button-container">
//                     <div className="inputButton">
//                         <InputArray array={array} setArray={setArray} setArraySize={setArraySize} setInitialArray={setInitialArray}></InputArray>
//                     </div>
//                     <div className="generate">
//                         <GenerateArray array={array} setArray={setArray} setNewArraySize={setArraySize} setInitialArray={setInitialArray}></GenerateArray>
//                     </div>
//                     <div className="select">
//                         <SelectArray setArray={setArray} setArraySize={setArraySize} setInitialArray={setInitialArray}></SelectArray>
//                     </div>
//                 </div>
//                 <div className="bars">
//                     {array.map((value, idx) => (
//                         <div
//                             className="array-bar"
//                             key={idx}
//                             style={{
//                                 height: `${value}px`,
//                                 backgroundColor: PRIMARY_COLOR,
//                             }}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="controlButtons">
//                     <button onClick={() => sortArray()}>Sort</button>
//                     <button onClick={() => stepArray()}>Step</button>
//                 </div>
//                 <div className="content-container">
//                     <div>
//                         <Description description={algoDescription} />
//                     </div>
//                     <div>
//                         <PseudoCodeMerge lineToHighlight={pseudoLine}></PseudoCodeMerge>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MergeSort;