import "./home.css"
import Card from '../components/Card/Card'
import laptop from '../components/assets/algorithms.jpg'
const Home = () => {
    const cardStyle = {
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        // Add other styles as needed
    };

    return (
    <>
        <div className="collectedTitle">
            <h1 className='mainTitle'>Visual {'\n'} Algorithm {'\n'} Sorter</h1>
        </div>
        <div style={cardStyle}>
            <Card title="Sorting Algorithms" image={laptop} path={"/algorithms"} ></Card>
        </div>
    </>)
};

export default Home;