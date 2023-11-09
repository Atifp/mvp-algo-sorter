import InputArray from '../components/arrayChoiceButtons/inputArray/inputArray'
import {useEffect, useState} from 'react'
import ArrayVisualizer from "../components/ArrayVisualizer/ArrayVisualizer";
import {Link} from "react-router-dom";
import GenerateArray from '../components/arrayChoiceButtons/generateArray/generateArray'
import SelectArray from '../components/arrayChoiceButtons/selectArray/selectArray'
import '../App.css'
import './bubbleSort.css'
import BarChart from '../components/BarChart'
import PseudoCodeBubble from '../components/PseudoCode/PseudoCodeBubble'

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [showGraph, setShowGraph] = useState(false);
    const [pseudoLine, setPseudoLine] =  useState([])
    const [chartKey, setChartKey] = useState(0) // this forces the chart to re-render everytime the array changes
    const [sortIndex, setSortIndex] = useState([])
    const [barColor, setBarColor] = useState("")
    const [algoSteps, setAlgoSteps] = useState([]);
    const [arraySize, setArraySize] = useState(0)
    const [dataArray, setDataArray] = useState(array);


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

    function calculateBubbleSteps (){
        let myArray = []
        //deepcopy the array passed in
        const sortArray = [...array]
        // see if indices can be replaced with sortArray.length
        const indices = sortArray.map((_, index) => index);
        let stepNum = 0
        myArray.push(createStep(stepNum,indices,array,"Running the array against Bubble Sort...", [1],'rgba(0, 246, 246, 0.66)'))
        myArray.push(createStep(stepNum,indices,array,"Checking the array and finding the first element", [2],'rgba(0, 246, 246, 0.66)'))
        for (let i = 0; i < sortArray.length; i++) {
            // Last i elements are already in place
            for (let j = 0; j < sortArray.length - i - 1; j++) {
                // Checking if the item at present iteration
                // is greater than the next iteration
                if (sortArray[j] > sortArray[j + 1]) {
                    const theString = 'Elements that need to be changed ' + sortArray[j]+' with ' + sortArray[j + 1]
                    const tester = [...sortArray]
                    myArray.push(createStep(stepNum+=1,[j,j+1],tester,theString, [3],"red"))
                    // If the condition is true then swap them
                    const temp = sortArray[j]
                    sortArray[j] = sortArray[j + 1]
                    sortArray[j + 1] = temp
                    const tester2 = [...sortArray]
                    const changedString = 'Elements that have been changed ' + sortArray[j]+' with ' + sortArray[j + 1]
                    myArray.push(createStep(stepNum+=1,[j,j+1],tester2,changedString, [4,5],"green"))
                }
            }
        }
        myArray.push(createStep(stepNum+=1,indices,sortArray,'Array is now sorted',[6,7],'rgba(0, 255, 0, 0.6)'))
        myArray.push(createStep(stepNum,indices,sortArray,'Array is now sorted, end of bubble sort',[8],'rgba(0, 255, 0, 0.6)'))
        //after the steps are calculated, we then take the value known as algoSteps in Tab.js, set algoSteps = myArray
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

    //TODO Figure out how to add this in
    function handleOnclick() {
        let currentIndex = 0
        let loopInterval
        loopInterval = setInterval(() => {
            if (currentIndex< algoSteps.length) {
                const currentStep = algoSteps[currentIndex]
                setArray(currentStep.newArray)
                setBarColor(currentStep.barColor)
                //setAlgoDescription(currentStep.algoDescription)
                setSortIndex(currentStep.arrayOfBars)
                setPseudoLine(currentStep.pseudoLine)
                currentStep.completedStep = true
                currentIndex++
            } else {
                clearInterval(loopInterval)
            }
        }, 500)
    }
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

    useEffect(() => {
        const steps = calculateBubbleSteps();
        setAlgoSteps(steps);
    }, [array]);

    useEffect(() => {
        // Update the chartKey whenever the array changes
        setChartKey((prevKey) => prevKey + 1);
        setDataArray(array);
    }, [array])

    // this checks the size of the array, and only shows the tab when the array is a certain size
    useEffect(() => {
        checkArraySize();
    }, [array]);

    return (
        <div>
            <h1 className='bubbleTitle'>Bubble Sort</h1>
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
            <div className="buttons">
                <button onClick={handleOnclick}>Sort</button>
                <button>
                    <Link to="/algorithms">Back</Link>
                </button>
            </div>
            {showGraph &&
                <div >
                    <div className="chart">
                        <BarChart data={dataArray} key={chartKey} sortIndex={sortIndex} barColour={barColor}/>
                    </div>
                    <div>
                        <PseudoCodeBubble lineToHighlight={pseudoLine}></PseudoCodeBubble>
                    </div>
                </div>
            }
        </div>
    );
};

export default BubbleSort;