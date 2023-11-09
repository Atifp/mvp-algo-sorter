import React from 'react';
import './pseudoCode.css'

function PseudoCodeBubble({lineToHighlight}) {
    return (
        <div className="PseudoCode">
        <p className={lineToHighlight[0] === 1 ? 'Highlight' : ''}>begin BubbleSort(list)</p>
             <p className={lineToHighlight[0] === 2 ? 'Highlight' : ''}>&emsp;for all elements of list</p>
            <p className={lineToHighlight[0] === 3 ? 'Highlight' : ''}>&emsp;&emsp;if list[i] > list[i+1]</p>
            <p className={lineToHighlight[0] === 4 ? 'Highlight' : ''}>&emsp;&emsp;&emsp;swap(list[i], list[i+1])</p>
            <p className={lineToHighlight[1] === 5 ? 'Highlight' : ''}>&emsp;&emsp;end if</p>
            <p className={lineToHighlight[0] === 6 ? 'Highlight' : ''}>&emsp;end for</p>
            <p className={lineToHighlight[1] === 7 ? 'Highlight' : ''}>return list</p>
            <p className={lineToHighlight[0] === 8 ? 'Highlight' : ''}>end BubbleSort</p>
        </div>
    );
}

export default PseudoCodeBubble;
