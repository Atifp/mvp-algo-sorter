import {useEffect, useState} from 'react'
import './mergeSort.css'
import '../App.css'
import '../components/newBar.css'
import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import Description from '../components/Description/Description'
import PseudoCodeInsertion from '../components/PseudoCode/PseudoCodeInsertion'
import Tab from '../components/Tabs/Tab'
import ArrayVisualizer from '../components/ArrayVisualizer/ArrayVisualizer'
import BackButton from '../components/buttons/backButton/backButton'

const InsertionSort = () => {
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
    };

    // Function to calculate steps for insertion sort
    function calculateInsertionSteps() {
        let myArray = [];
        const sortArray = [...array];
        const indices = sortArray.map((_, index) => index);
        let stepNum = 0;

        myArray.push(createInsertionStep(stepNum, indices, array, "Running the array against Insertion Sort...", [1], 'rgba(0,246,246,0.85)'));

        for (let i = 1; i < sortArray.length; i++) {
            const sortArray2 = [...sortArray];
            myArray.push(createInsertionStep(stepNum, indices, sortArray2, "Getting the ith element in the array", [2,3], 'rgba(0,246,246,0.85)'));
            const key = sortArray[i];
            myArray.push(createInsertionStep(stepNum, [i], sortArray2, `Checking position of key with value ${sortArray[i]}`, [2,3], 'rgba(246,168,0,0.98)'));
            let j = i - 1;
            const indicesToLeft = Array.from({ length: i }, (_, index) => index);
            myArray.push(createInsertionStep(stepNum += 1, indicesToLeft, sortArray2, `Checking elements to the left of  bar ${i+1}`, [4,5], "red"));

            while (j >= 0 && sortArray[j] > key) {
                const tester = [...sortArray];
                myArray.push(createInsertionStep(stepNum += 1, [j, j + 1], tester, `Comparing elements ${key} and ${sortArray[j]}`, [4,5], 'rgba(246,168,0,0.98)'));

                sortArray[j + 1] = sortArray[j];

                const tester2 = [...sortArray];
                myArray.push(createInsertionStep(stepNum += 1, [j, j + 1], tester2, `Shifting ${sortArray[j]} to the right`, [6,7], 'rgba(246,168,0,0.98)'));

                j = j - 1;
            }

            sortArray[j + 1] = key;
            const tester3 = [...sortArray];
            myArray.push(createInsertionStep(stepNum += 1, [j + 1], tester3, `Placing ${key} in its correct position`, [8,9], "green"));
        }
        myArray.push(createInsertionStep(stepNum, indices, sortArray, 'Array is now sorted, end of insertion sort', [10], 'rgba(0, 255, 0, 0.6)'));

        return myArray;
    }

    function sortArray() {
        let currentIndex = 0
        let loopInterval
        loopInterval = setInterval(() => {
            if (currentIndex< algoSteps.length) {
                const currentStep = algoSteps[currentIndex];
                setArray(currentStep.newArray);
                setDataArray(currentStep.newArray);
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
            if (currentStep.pseudoLine[0] === 10){
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
            styleOfBar.backgroundColor = 'rgba(0,246,246,0.85)';
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
        setAlgoSteps(calculateInsertionSteps());
    }, [array])

    useEffect(() => {
        setDataArray(array);
    }, [array])

    useEffect(() => {
        checkArraySize();
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
                                    backgroundColor: barColor && sortIndex.includes(idx) ? barColor : 'rgba(0,246,246,0.85)',
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
                                <PseudoCodeInsertion lineToHighlight={pseudoLine}></PseudoCodeInsertion>
                            </div>
                        </div>
                    </div>
                    <div className="infoSectionMerge">
                        <div className="box">
                            <h2> Insertion Sort</h2>
                            <p>Description: Insertion Sort builds the sorted array one element at a time by repeatedly taking an element from the unsorted part and inserting it into its correct position. While efficient for small or partially sorted datasets, its time complexity makes it less suitable for large datasets.</p>
                            <p>Use Cases: Insertion Sort is suitable for small datasets or mostly sorted datasets due to its simplicity and adaptive nature.</p>
                            <p>Drawbacks: Inefficient for large datasets; not suitable for random or reverse-sorted arrays.</p>
                        </div>
                        <div className="tabBlock">
                            <Tab algoName={"insertionSort"}></Tab>
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
                                        <td>O(n)</td>
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

export default InsertionSort;