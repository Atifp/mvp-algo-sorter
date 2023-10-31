import {Link} from 'react-router-dom'
import "./home.css"
const Home = () => {
    return <>
        <div className="collectedTitle">
            <h1 className='title'>Visual {'\n'} Algorithm {'\n'} Sorter</h1>
        </div>
        <div >
            <button >
                <Link to="/algorithms">Sorting Algorithms</Link>
            </button>
        </div>
    </>
};

export default Home;