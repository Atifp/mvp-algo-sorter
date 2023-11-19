import {Link} from 'react-router-dom'

const Algorithms = () => {
    return (
        // Add the buttons to choose array size in this page
        <div>
            <div >
                <h1>Choose an algorithm from the following:</h1>
                <h2 > - Quadratic</h2>
                <div >
                    <Link to="/bubbleSort" >
                        <button >Bubble Sort</button>
                    </Link>
                </div>
                <div >
                    <Link to="/mergeSort" >
                        <button >Merge Sort</button>
                    </Link>
                </div>
                <div >
                    <Link to="/newBubbleSort" >
                        <button >New Bubble Sort</button>
                    </Link>
                </div>
                <button >
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    )
};

export default Algorithms;