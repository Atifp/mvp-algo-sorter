import "./algorithms.css"
import bubbles from '../components/assets/bubbles.jpg'
import merge from '../components/assets/merge.jpg'
import insertCoin from '../components/assets/insert.jpeg'
import selection from '../components/assets/selection.jpeg'
import quiz from '../components/assets/quiz.webp'
import Card from '../components/Card/Card'
import BackButton from '../components/buttons/backButton/backButton'

const Algorithms = () => {
    return (
        <div>
            <div className="algo-container">
                <h1>Choose an algorithm from the following:</h1>
            </div>
            <div className="algo-cards">
                <Card title="Bubble Sort" image={bubbles} path={"/bubbleSort"} ></Card>
                <Card title="Merge Sort" image={merge} path={"/mergeSort"} ></Card>
                <Card title="Insertion Sort" image={insertCoin} path={"/insertionSort"} ></Card>
                <Card title="Selection Sort" image={selection} path={"/selectionSort"} ></Card>
                <Card title="Quiz" image={quiz} path={"/quiz"} ></Card>
            </div>
            <BackButton path="/"></BackButton>
        </div>
    )
};

export default Algorithms;