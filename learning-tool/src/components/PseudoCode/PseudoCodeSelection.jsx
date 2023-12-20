import React from 'react';
import './pseudoCode.css'

function PseudoCodeSelection({lineToHighlight}) {
    return (
        <div className="PseudoCodeMerge">
            <p className={lineToHighlight[0] === 1 ? 'Highlight' : ''}>begin SelectionSort(list)</p>
            <p className={lineToHighlight[0] === 2 ? 'Highlight' : ''}>&emsp;for i from 0 to length of list - 1</p>
            <p className={lineToHighlight[0] === 3 ? 'Highlight' : ''}>&emsp;&emsp;minIndex = i</p>
            <p className={lineToHighlight[0] === 4 ? 'Highlight' : ''}>&emsp;&emsp;for j from i+1 to length of list</p>
            <p className={lineToHighlight[1] === 5 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;if list[j] &lt; list[minIndex]</p>
            <p className={lineToHighlight[0] === 6 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;&emsp;minIndex = j</p>
            <p className={lineToHighlight[0] === 7 ? 'Highlight' : ''}>&emsp;&emsp;if i !== minIndex</p>
            <p className={lineToHighlight[1] === 8 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;swap(list[i], list[minIndex])</p>
            <p className={lineToHighlight[0] === 9 ? 'Highlight' : ''}>return list</p>
            <p className={lineToHighlight[1] === 10 ? 'Highlight' : ''}>end SelectionSort</p>
        </div>
    );

}

export default PseudoCodeSelection;
