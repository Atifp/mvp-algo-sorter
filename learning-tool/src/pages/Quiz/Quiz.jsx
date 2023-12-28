import "./Quiz.css"
import {useRef, useState} from 'react'
import { easyData } from './bubbleSortData'
const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question,setQuestion] = useState(easyData[index]);
    let [lock, setLock] = useState(false);
    let [finished, setFinished] = useState(false)
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    //TODO Add in a beginning page to choose level and algorithm
    // Adjust the quiz to only let users select answers and at the end see which were right and wrong, not immediately
    // Add the reset functionality. Look at how to choose the different levels. Have one level that is a mix of easy medium and hard

    const option_array = [Option1, Option2, Option3, Option4];
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
        </div>
    )
};

export default Quiz;