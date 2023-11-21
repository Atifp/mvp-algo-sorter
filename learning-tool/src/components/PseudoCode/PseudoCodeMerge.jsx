import React, {useEffect, useRef} from 'react'
import './pseudoCode.css'

function PseudoCodeMerge({lineToHighlight}) {
    const highlightedLineRef = useRef(null);

    useEffect(() => {
        if (highlightedLineRef.current) {
            const container = highlightedLineRef.current.parentElement;
            const containerRect = container.getBoundingClientRect();
            const lineRect = highlightedLineRef.current.getBoundingClientRect();

            const isInView = lineRect.top >= containerRect.top && lineRect.bottom <= containerRect.bottom;

            if (!isInView) {
                if (lineToHighlight[0] >= 12) {
                    // Scroll to the bottom
                    container.scrollTop = container.scrollHeight;
                } else {
                    // Scroll to the top
                    container.scrollTop = 0;
                }
            }
        }
    }, [lineToHighlight]);
    return (
        <div className="PseudoCodeMerge">
        <p ref={lineToHighlight[0] === 1 ? highlightedLineRef : null} className={lineToHighlight[0] === 1 ? 'Highlight' : ''}>begin mergeSort(arr):</p>
             <p ref={lineToHighlight[0] === 2 ? highlightedLineRef : null}  className={lineToHighlight[0] === 2 ? 'Highlight' : ''}>&emsp;if length of arr &lt; 1 </p>
            <p ref={lineToHighlight[1] === 3 ? highlightedLineRef : null} className={lineToHighlight[1] === 3 ? 'Highlight' : ''}>&emsp;&emsp;return arr</p>
            <p ref={lineToHighlight[0] === 4 ? highlightedLineRef : null} className={lineToHighlight[0] === 4 ? 'Highlight' : ''}>&emsp;middle = floor(length of arr / 2)</p>
            <p ref={lineToHighlight[0] === 5 ? highlightedLineRef : null} className={lineToHighlight[0] === 5 ? 'Highlight' : ''}>&emsp;left = mergeSort(subarray from index 0 to middle - 1)</p>
            <p ref={lineToHighlight[1] === 6 ? highlightedLineRef : null} className={lineToHighlight[1] === 6 ? 'Highlight' : ''}>&emsp;right = mergeSort(subarray from index middle to end)</p>
            <p ref={lineToHighlight[0] === 7 ? highlightedLineRef : null} className={lineToHighlight[0] === 7 ? 'Highlight' : ''}>&emsp;return merge(left, right)</p>
            <p ref={lineToHighlight[0] === 8 ? highlightedLineRef : null} className={lineToHighlight[0] === 8 ? 'Highlight' : ''}></p>
            <p ref={lineToHighlight[1] === 9 ? highlightedLineRef : null} className={lineToHighlight[1] === 9 ? 'Highlight' : ''}>merge(left, right):</p>
            <p ref={lineToHighlight[0] === 10 ? highlightedLineRef : null} className={lineToHighlight[0] === 10 ? 'Highlight' : ''}>result = []</p>
            <p ref={lineToHighlight[1] === 11 ? highlightedLineRef : null} className={lineToHighlight[1] === 11 ? 'Highlight' : ''}>leftIndex,rightIndex = 0</p>
            <p ref={lineToHighlight[0] === 12 ? highlightedLineRef : null} className={lineToHighlight[0] === 12 ? 'Highlight' : ''}> while leftIndex &lt; length of left and rightIndex &lt; length of right</p>
            <p ref={lineToHighlight[0] === 13 ? highlightedLineRef : null} className={lineToHighlight[0] === 13 ? 'Highlight' : ''}>&emsp;if left[leftIndex] &lt;= right[rightIndex]</p>
            <p ref={lineToHighlight[1] === 14 ? highlightedLineRef : null} className={lineToHighlight[1] === 14 ? 'Highlight' : ''}>&emsp;&emsp;append left[leftIndex] to result</p>
            <p ref={lineToHighlight[2] === 15 ? highlightedLineRef : null} className={lineToHighlight[2] === 15 ? 'Highlight' : ''}>&emsp;&emsp;increment leftIndex</p>
            <p ref={lineToHighlight[0] === 16 ? highlightedLineRef : null} className={lineToHighlight[0] === 16 ? 'Highlight' : ''}>&emsp;else</p>
            <p ref={lineToHighlight[1] === 17 ? highlightedLineRef : null} className={lineToHighlight[1] === 17 ? 'Highlight' : ''}>&emsp;&emsp;append right[rightIndex] to result</p>
            <p ref={lineToHighlight[2] === 18 ? highlightedLineRef : null} className={lineToHighlight[2] === 18 ? 'Highlight' : ''}>&emsp;&emsp;increment rightIndex</p>
            <p ref={lineToHighlight[0] === 19 ? highlightedLineRef : null} className={lineToHighlight[0] === 19 ? 'Highlight' : ''}>append remaining elements of left to result</p>
            <p ref={lineToHighlight[0] === 20 ? highlightedLineRef : null} className={lineToHighlight[0] === 20 ? 'Highlight' : ''}>append remaining elements of right to result</p>
            <p ref={lineToHighlight[0] === 21 ? highlightedLineRef : null} className={lineToHighlight[0] === 21 ? 'Highlight' : ''}>return result</p>
            <p ref={lineToHighlight[1] === 22 ? highlightedLineRef : null} className={lineToHighlight[1] === 22 ? 'Highlight' : ''}>end mergeSort</p>
        </div>
    );
}
export default PseudoCodeMerge;
