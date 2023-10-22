import {Link} from 'react-router-dom'

const Home = () => {
    return <>
        <h1 >Visual {'\n'} Algorithm {'\n'} Sorter</h1>
        <div >
            <button >
                <Link to="/algorithms">Sorting Algorithms</Link>
            </button>
        </div>
    </>
};

export default Home;