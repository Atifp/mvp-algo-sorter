import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Algorithms from "./pages/Algorithms";
import NoPageFound from "./pages/NoPageFound";
import reportWebVitals from './reportWebVitals'
import MergeSort from './pages/MergeSort'
import BubbleSort from './pages/BubbleSort'
import InsertionSort from './pages/InsertionSort'
import SelectionSort from './pages/SelectionSort'
import Quiz from './pages/Quiz/Quiz'

export default function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();