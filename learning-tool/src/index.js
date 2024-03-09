import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import NoPageFound from './pages/NoPageFound';
import MergeSort from './pages/MergeSort';
import BubbleSort from './pages/BubbleSort';
import InsertionSort from './pages/InsertionSort';
import SelectionSort from './pages/SelectionSort';
import Quiz from './pages/Quiz/Quiz';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="bubbleSort" element={<BubbleSort />} />
                    <Route path="mergeSort" element={<MergeSort />} />
                    <Route path="insertionSort" element={<InsertionSort />} />
                    <Route path="selectionSort" element={<SelectionSort />} />
                    <Route path="algorithms" element={<Algorithms />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="*" element={<NoPageFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
