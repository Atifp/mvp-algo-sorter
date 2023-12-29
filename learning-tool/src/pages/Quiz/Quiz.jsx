import "./Quiz.css"
import {useRef, useState} from 'react'
import { easyData } from './bubbleSortData'
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question,setQuestion] = useState(easyData[index]);
    let [lock, setLock] = useState(false);
    let [finished, setFinished] = useState(false)
    let [chooseAlgo, setChooseAlgo] = useState(false)
    let [chooseLevel, setChooseLevel] = useState(false)
    const [selectedAlgo, setSelectedAlgo] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedAlgoButton, setSelectedAlgoButton] = useState(null);
    const [selectedLevelButton, setSelectedLevelButton] = useState(null);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let Easy = useRef(null);
    let Medium = useRef(null);
    let Hard = useRef(null);
    let Mixed = useRef(null);

    let BubbleSort = useRef(null);
    let SelectionSort = useRef(null);
    let MergeSort = useRef(null);
    let InsertionSort = useRef(null);

    //TODO Add in a beginning page to choose level and algorithm
    // Adjust the quiz to only let users select answers and at the end see which were right and wrong, not immediately
    // Add the reset functionality. Look at how to choose the different levels. Have one level that is a mix of easy medium and hard

    const option_array = [Option1, Option2, Option3, Option4];
    const level_option_array = [Easy, Medium, Hard, Mixed];
    const algo_option_array = [BubbleSort, SelectionSort, MergeSort, InsertionSort];
    const startQuiz = (level, levelButtonRef) => {
        if (selectedLevelButton && selectedLevelButton.style !== null) {
            selectedLevelButton.style.backgroundColor = '';
        }
        setChooseLevel(true);

        // Set the question data based on selected algorithm and level
        switch (level) {
            case "Easy":
                setQuestion(easyData[index]);
                break;
            case "Medium":
                setQuestion(easyData[index]);
                break;
            case "Hard":
                setQuestion(easyData[index]);
                break;
            default:
                setQuestion({});
        }
        setSelectedLevelButton(levelButtonRef);
        setSelectedLevel(level);

        if (levelButtonRef && levelButtonRef.style) {
            levelButtonRef.style.backgroundColor = '#00ea02'; // Change to the desired color
        }
    };
    const checkAns = (e, ans)=> {
        if (!lock) {
            if(question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true)
            } else {
                e.target.classList.add("incorrect")
                option_array[question.ans-1].current.classList.add("correct")
                setLock(true)
            }
        }
    }

    const checkSelectedAlgo = (e)=> {
        algo_option_array.map((option)=>{
            option.current.classList.remove("selected");
            return null
        })
        e.target.classList.add("selected");
    }

    const checkSelectedLevel = (e)=> {
        level_option_array.map((option)=>{
            option.current.classList.remove("selected");
            return null
        })
        e.target.classList.add("selected");
    }

    const next = () => {
        setIndex(index+1);
        setQuestion(easyData[index]);
        setLock(false);
        option_array.map((option)=>{
            option.current.classList.remove("correct")
            option.current.classList.remove("incorrect")
            return null
        })
    }

    return (
        <div className='containerQuiz'>
            {!chooseAlgo && !chooseLevel?
                <>
                    <h1>Choose a difficulty level:</h1>
                    <div>
                        <button ref={Easy} onClick={(e) => checkSelectedLevel(e)} > Easy </button>
                        <button ref={Medium} onClick={(e) => checkSelectedLevel(e)} > Medium </button>
                        <button ref={Hard} onClick={(e) => checkSelectedLevel(e)} > Hard </button>
                        <button ref={Mixed} onClick={(e) => checkSelectedLevel(e)} > Mixed </button>
                    </div>
                    <h1>Choose an Algorithm:</h1>
                    <div>
                        <button ref={BubbleSort} onClick={(e) => checkSelectedAlgo(e)} > Bubble Sort </button>
                        <button ref={SelectionSort} onClick={(e) => checkSelectedAlgo(e)} > Selection Sort </button>
                        <button ref={MergeSort} onClick={(e) => checkSelectedAlgo(e)} > Merge Sort </button>
                        <button ref={InsertionSort} onClick={(e) => checkSelectedAlgo(e)} > Insertion Sort </button>
                    </div>
                    <button>
                        Start Quiz
                    </button>
                </>
                :
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
                        {index+1} of {easyData.length} questions
                    </div>
                </>
            }
        </div>
    )
};

export default Quiz;