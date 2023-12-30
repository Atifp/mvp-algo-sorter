import "./Quiz.css"
import {useEffect, useRef, useState} from 'react'
import { easyBubbleData, mediumBubbleData, hardBubbleData,
        easyMergeData, mediumMergeData, hardMergeData,
        easySelectionData, mediumSelectionData, hardSelectionData,
        easyInsertionData, mediumInsertionData, hardInsertionData} from './data'
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [score, setScore] = useState(0);
    let [data,setData] = useState(null);
    let [question,setQuestion] = useState(null);
    let [lock, setLock] = useState(false);
    let [finished, setFinished] = useState(false)
    let [start, setStart] = useState(false)
    let [chooseAlgo, setChooseAlgo] = useState(false)
    let [chooseLevel, setChooseLevel] = useState(false)
    const [selectedAlgo, setSelectedAlgo] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let Easy = useRef(null);
    let Medium = useRef(null);
    let Hard = useRef(null);

    let BubbleSort = useRef(null);
    let SelectionSort = useRef(null);
    let MergeSort = useRef(null);
    let InsertionSort = useRef(null);

    //TODO Add in a beginning page to choose level and algorithm
    // Adjust the quiz to only let users select answers and at the end see which were right and wrong, not immediately
    // Add the reset functionality. Look at how to choose the different levels. Have one level that is a mix of easy medium and hard

    const option_array = [Option1, Option2, Option3, Option4];
    const level_option_array = [Easy, Medium, Hard];
    const algo_option_array = [BubbleSort, SelectionSort, MergeSort, InsertionSort];

    useEffect(() => {
        // This useEffect will run when data changes
        if (data && index >= 0 && index < data.length) {
            setStart(true);
            setQuestion(data[index]);
        }
    }, [data, index])
    const startQuiz = (level, algo) => {
        // Set the question data based on selected algorithm and level
        switch (`${level}_${algo}`) {
            case "Easy_BubbleSort":
                setData(easyBubbleData);
                break;
            case "Medium_BubbleSort":
                setData(mediumBubbleData);
                break;
            case "Hard_BubbleSort":
                setData(hardBubbleData);
                break;
            case "Easy_MergeSort":
                setData(easyMergeData);
                break;
            case "Medium_MergeSort":
                setData(mediumMergeData);
                break;
            case "Hard_MergeSort":
                setData(hardMergeData);
                break;
            case "Easy_SelectionSort":
                setData(easySelectionData);
                break;
            case "Medium_SelectionSort":
                setData(mediumSelectionData);
                break;
            case "Hard_SelectionSort":
                setData(hardSelectionData);
                break;
            case "Easy_InsertionSort":
                setData(easyInsertionData);
                break;
            case "Medium_InsertionSort":
                setData(mediumInsertionData);
                break;
            case "Hard_InsertionSort":
                setData(hardInsertionData);
                break;
            default:
                setData(null);
        }
    };
    const checkAns = (e, ans)=> {
        if (!lock) {
            if(question.ans === ans) {
                e.target.classList.add("correct")
                const num = score + 1
                setScore(num)
                setLock(true)
            } else {
                e.target.classList.add("incorrect")
                option_array[question.ans-1].current.classList.add("correct")
                setLock(true)
            }
        }
    }

    const checkSelectedAlgo = (e, algo)=> {
        algo_option_array.map((option)=>{
            option.current.classList.remove("selected");
            return null
        })
        e.target.classList.add("selected");
        setSelectedAlgo(algo);
        setChooseAlgo(true);
    }

    const checkSelectedLevel = (e, level)=> {
        level_option_array.map((option)=>{
            option.current.classList.remove("selected");
            return null
        })
        e.target.classList.add("selected");
        setSelectedLevel(level);
        setChooseLevel(true);
    }

    const resetQuiz = () =>{
        setScore(0)
        setIndex(0)
        setFinished(false)
        setQuestion(data[0])
    }

    const newQuiz = () =>{
        setScore(0)
        setIndex(0)
        setFinished(false)
        setQuestion(null)
        setData(null)
        setStart(false)
        setChooseLevel(false)
        setChooseAlgo(false)
    }

    const next = () => {
        setLock(false);
        if (index + 1 < data.length) {
            setIndex(index + 1);
            setQuestion(data[index + 1]);
        } else {
            setFinished(true);
        }
        option_array.forEach((option) => {
            option.current.classList.remove("correct");
            option.current.classList.remove("incorrect");
        });
    };

    return (
        <div className='containerQuiz'>
            {!start?
                <>
                    <h1>Choose a difficulty level:</h1>
                    <div>
                        <button ref={Easy} onClick={(e) => checkSelectedLevel(e, "Easy")} > Easy </button>
                        <button ref={Medium} onClick={(e) => checkSelectedLevel(e, "Medium")} > Medium </button>
                        <button ref={Hard} onClick={(e) => checkSelectedLevel(e, "Hard")} > Hard </button>
                    </div>
                    <h1>Choose an Algorithm:</h1>
                    <div>
                        <button ref={BubbleSort} onClick={(e) => checkSelectedAlgo(e, "BubbleSort")} > Bubble Sort </button>
                        <button ref={SelectionSort} onClick={(e) => checkSelectedAlgo(e, "SelectionSort")} > Selection Sort </button>
                        <button ref={MergeSort} onClick={(e) => checkSelectedAlgo(e, "MergeSort")} > Merge Sort </button>
                        <button ref={InsertionSort} onClick={(e) => checkSelectedAlgo(e, "InsertionSort")} > Insertion Sort </button>
                    </div>
                    {(chooseAlgo && chooseLevel)?
                        <button className="start" onClick={(e) => startQuiz(selectedLevel, selectedAlgo)}>
                        Start Quiz
                        </button>
                        :""}
                </>
                :
                <>
                    {!finished?
                        <>
                            <h2>{index+1}. {question.question}</h2>
                            <ul>
                                <li ref={Option1} onClick={(e) => checkAns(e,1)}>{question.option1}</li>
                                <li ref={Option2} onClick={(e) => checkAns(e,2)}>{question.option2}</li>
                                <li ref={Option3} onClick={(e) => checkAns(e,3)}>{question.option3}</li>
                                <li ref={Option4} onClick={(e) => checkAns(e,4)}>{question.option4}</li>
                            </ul>
                            <button onClick={next} disabled={!lock}>Next</button>
                            <div className="index">
                                {index+1} of {5} questions
                            </div>
                        </>
                        :
                        <>
                            <h1>Quiz Results</h1>
                            <h2>Your Score: {score} out of 5</h2>
                            <div>
                                <button onClick={resetQuiz}>Reset</button>
                                <button onClick={newQuiz}>New Quiz</button>
                            </div>
                        </>
                    }
                </>
            }
        </div>
    )
};

export default Quiz;