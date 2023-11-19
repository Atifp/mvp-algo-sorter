import React, {useState} from "react";
import "./Tab.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula }from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Tab() {
    const [toggleState, setToggleState] = useState(1);
    let implementation = []
    implementation[0] = "void bubble_sort(long arr[], long n) {\n" +
        "  long c, d, t;\n" +
        "\n" +
        "  for (c = 0 ; c < n - 1; c++) {\n" +
        "    for (d = 0 ; d < n - c - 1; d++) {\n" +
        "      if (arr[d] > arr[d+1]) {\n" +
        "        t = arr[d];\n" +
        "        arr[d] = arr[d+1];\n" +
        "        arr[d+1] = t;\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "}"
    implementation[1] = "void swap(int *xp, int *yp) {\n" +
        "    int temp = *xp;\n" +
        "    *xp = *yp;\n" +
        "    *yp = temp;\n" +
        "}\n" +
        "\n" +
        "\n" +
        "void bubbleSort(int arr[], int n) {\n" +
        "    int i, j;\n" +
        "    for (i = 0; i < n-1; i++)\n" +
        "        for (j = 0; j < n-i-1; j++)\n" +
        "            if (arr[j] > arr[j+1])\n" +
        "                swap(&arr[j], &arr[j+1]);\n" +
        "}"
    implementation[2] = "static void bubbleSort(int[] arr) {\n" +
        "    int n = arr.length;\n" +
        "    int temp = 0;\n" +
        "    for(int i=0; i < n; i++){\n" +
        "        for(int j=1; j < (n-i); j++){\n" +
        "            if(arr[j-1] > arr[j]){\n" +
        "                temp = arr[j-1];\n" +
        "                arr[j-1] = arr[j];\n" +
        "                arr[j] = temp;\n" +
        "            }\n" +
        "        }\n" +
        "    }\n" +
        "}\n"
    implementation[3] = "def bubbleSort(arr):\n" +
        "    n = len(arr)\n" +
        "    for i in range(n-1):\n" +
        "        for j in range(0, n-i-1):\n" +
        "            if arr[j] > arr[j+1]:\n" +
        "                arr[j], arr[j+1] = arr[j+1], arr[j]"
    // toggleTab once a tab is clicked, the index is set to the position of the tab
    // this then allows me to control the css of the tabs and assigning which should be active

    const customStyle = {
        backgroundColor: 'black',
        padding: 0,
        margin: 0,
        whiteSpace: 'pre-wrap', // This is important for preserving line breaks
    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    C
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    C++
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Java
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Python
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>C</h2>
                    <SyntaxHighlighter language="c" style={dracula} customStyle={{
                        background: "none",
                        padding: "10px"
                    }}>
                        {implementation[0]}
                    </SyntaxHighlighter>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>C++</h2>
                    <SyntaxHighlighter language="c" style={dracula} customStyle={{
                        background: "none",
                        padding: "10px"
                    }}>
                        {implementation[1]}
                    </SyntaxHighlighter>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Java</h2>
                    <SyntaxHighlighter language="java" style={dracula} customStyle={{
                        background: "none",
                        padding: "10px"
                    }}>
                        {implementation[2]}
                    </SyntaxHighlighter>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <h2>Python</h2>
                    <SyntaxHighlighter language="python" style={dracula} customStyle={{
                        background: "none",
                        padding: "10px"
                    }}>
                        {implementation[3]}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}



export default Tab;