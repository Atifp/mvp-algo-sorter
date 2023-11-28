import React, {useEffect, useRef} from 'react'
import './pseudoCode.css'

function PseudoCodeInsertion({lineToHighlight}) {
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
        <div className="PseudoCode">
        <p ref={lineToHighlight[0] === 1 ? highlightedLineRef : null} className={lineToHighlight[0] === 1 ? 'Highlight' : ''}>begin insertionSort(arr):</p>
             <p ref={lineToHighlight[0] === 2 ? highlightedLineRef : null}  className={lineToHighlight[0] === 2 ? 'Highlight' : ''}>&emsp;for i from 1 to length of arr - 1 do</p>
            <p ref={lineToHighlight[1] === 3 ? highlightedLineRef : null} className={lineToHighlight[1] === 3 ? 'Highlight' : ''}>&emsp;&emsp;key = arr[i]</p>
            <p ref={lineToHighlight[0] === 4 ? highlightedLineRef : null} className={lineToHighlight[0] === 4 ? 'Highlight' : ''}>&emsp;&emsp;j = i - 1</p>
            <p ref={lineToHighlight[1] === 5 ? highlightedLineRef : null} className={lineToHighlight[1] === 5 ? 'Highlight' : ''}>&emsp;&emsp;while j >= 0 and arr[j] > key do</p>
            <p ref={lineToHighlight[0] === 6 ? highlightedLineRef : null} className={lineToHighlight[0] === 6 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;arr[j + 1] = arr[j]</p>
            <p ref={lineToHighlight[1] === 7 ? highlightedLineRef : null} className={lineToHighlight[1] === 7 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;j = j - 1</p>
            <p ref={lineToHighlight[0] === 8 ? highlightedLineRef : null} className={lineToHighlight[0] === 8 ? 'Highlight' : ''}>&emsp;&emsp;arr[j + 1] = key</p>
            <p ref={lineToHighlight[1] === 9 ? highlightedLineRef : null} className={lineToHighlight[1] === 9 ? 'Highlight' : ''}>&emsp;&emsp;increment i and loop</p>
            <p ref={lineToHighlight[0] === 10 ? highlightedLineRef : null} className={lineToHighlight[0] === 10 ? 'Highlight' : ''}>end mergeSort</p>
        </div>
    );
}
export default PseudoCodeInsertion;
