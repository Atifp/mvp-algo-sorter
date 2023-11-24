import React, { useState } from "react";
import "./Tab.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import implementations from './algorithmImplementation';

function Tab({algoName}) {
    const [toggleState, setToggleState] = useState(1);

    // Define the algorithm keys
    const algorithmKeys = [
        `${algoName}C`, `${algoName}Cpp`, `${algoName}Java`, `${algoName}Python`,
    ];

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                {algorithmKeys.map((key, index) => (
                    <button
                        key={index}
                        className={toggleState === index + 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(index + 1)}
                    >
                        {key === `${algoName}Cpp` ? 'C++' : key.replace(`${algoName}`, '')} {/* Extract the algorithm name */}
                    </button>
                ))}
            </div>

            <div className="content-tabs">
                {algorithmKeys.map((key, index) => (
                    <div
                        key={index}
                        className={toggleState === index + 1 ? "content  active-content" : "content"}
                    >
                        <h2>{key === `${algoName}Cpp` ? 'C++' : key.replace(`${algoName}`, '')}</h2> {/* Extract the algorithm name */}
                        <SyntaxHighlighter language={key === `${algoName}Cpp` ? 'c' : key.replace(`${algoName}`, '').toLowerCase()} style={dracula} customStyle={{
                            background: "none",
                            padding: "10px"
                        }}>
                            {implementations[key]}
                        </SyntaxHighlighter>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tab;
