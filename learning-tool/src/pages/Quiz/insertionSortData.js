export const easyInsertionSortData = [
    {
        question: "What is the basic operation performed by the Insertion Sort algorithm?",
        option1: "Swapping adjacent elements",
        option2: "Inserting an element into its correct position in a sorted subarray",
        option3: "Finding the median",
        option4: "Merging two elements",
        ans: 2,
    },
    {
        question: "In Insertion Sort, how are elements compared for sorting?",
        option1: "By comparing their values directly",
        option2: "By calculating their average",
        option3: "By applying a mathematical formula",
        option4: "By using a hash function",
        ans: 1,
    },
    {
        question: "What is the time complexity of Insertion Sort in the worst-case scenario?",
        option1: "O(n)",
        option2: "O(n log n)",
        option3: "O(n^2)",
        option4: "O(1)",
        ans: 3,
    },
    {
        question: "What is the primary operation performed during each iteration of Insertion Sort?",
        option1: "Swapping adjacent elements",
        option2: "Comparing all elements in the array",
        option3: "Inserting an element into its correct position",
        option4: "Dividing the array into subarrays",
        ans: 3,
    },
    {
        question: "In Insertion Sort, what is the role of the 'key' element?",
        option1: "The key element represents the median of the array",
        option2: "The key element is the element being inserted into its correct position",
        option3: "The key element is the largest element in the array",
        option4: "The key element is used for swapping adjacent elements",
        ans: 2,
    },
];

export const mediumInsertionSortData = [
    {
        question: "How does Insertion Sort compare to Bubble Sort in terms of efficiency?",
        option1: "Insertion Sort is generally faster than Bubble Sort",
        option2: "Bubble Sort is generally faster than Insertion Sort",
        option3: "Both algorithms have similar efficiency",
        option4: "Efficiency depends on the specific input data",
        ans: 4,
    },
    {
        question: "Discuss the advantages and disadvantages of using Insertion Sort compared to other sorting algorithms.",
        option1: "Advantages: Insertion Sort is simple; Disadvantages: inefficiency for large lists",
        option2: "Advantages: fast execution; Disadvantages: complexity in code structure",
        option3: "Advantages: suitable for any list size; Disadvantages: limited applicability",
        option4: "Advantages: minimal memory usage; Disadvantages: high time complexity",
        ans: 1,
    },
    {
        question: "When might you choose to use Insertion Sort in a real-world scenario?",
        option1: "Sorting a small list of user names in an application",
        option2: "Sorting a large database of customer information",
        option3: "Sorting a list of phone numbers in a mobile device",
        option4: "Sorting a dataset for scientific research",
        ans: 1,
    },
    {
        question: "Explain the term 'stable sort' in the context of Insertion Sort.",
        option1: "It rearranges the elements randomly during the sorting process",
        option2: "It prioritizes sorting elements in descending order",
        option3: "It ensures that the smallest element is placed at the end of the array",
        option4: "It preserves the relative order of equal elements in the sorted output",
        ans: 4,
    },
    {
        question: "In what scenarios would you recommend using Insertion Sort over more advanced sorting algorithms?",
        option1: "When simplicity is a priority and the list is small",
        option2: "When the list is already sorted in descending order",
        option3: "When parallel processing capabilities are essential",
        option4: "When time complexity is the primary concern",
        ans: 1,
    },
];

export const hardInsertionSortData = [
    {
        question: "Compare and contrast Insertion Sort with the Quick Sort algorithm, highlighting their strengths and weaknesses.",
        option1: "Advantages: Insertion Sort is more memory-efficient; Quick Sort is faster for large lists; Disadvantages: Insertion Sort is slower; Quick Sort requires more memory",
        option2: "Advantages: Both have high time complexity; Disadvantages: Both are equally efficient",
        option3: "Advantages: Quick Sort is more memory-efficient; Insertion Sort is faster for large lists; Disadvantages: Quick Sort is slower; Insertion Sort requires more memory",
        option4: "Advantages: Insertion Sort is faster; Quick Sort is more memory-efficient; Disadvantages: Insertion Sort is slower; Quick Sort requires more memory",
        ans: 1,
    },
    {
        question: "Propose an enhancement to the Insertion Sort algorithm to make it adaptable to different data distributions (e.g., nearly sorted lists or lists with duplicate values).",
        option1: "Implement a variation of Insertion Sort that recognizes nearly sorted lists and optimizes the sorting process",
        option2: "Introduce a mechanism to handle duplicate values efficiently during the sorting process",
        option3: "Modify the comparison operation to consider the distribution of values in the list",
        option4: "Implement a hybrid sorting algorithm that combines Insertion Sort with another algorithm for improved adaptability",
        ans: 1,
    },
    {
        question: "Discuss the impact of data distribution on the performance of Insertion Sort and propose strategies to mitigate its limitations.",
        option1: "Data distribution significantly affects Insertion Sort's efficiency, and strategies may include pre-sorting or choosing a different algorithm based on the distribution.",
        option2: "Data distribution has a minimal impact on Insertion Sort, and no specific strategies are needed to mitigate its limitations.",
        option3: "Data distribution only impacts the best-case scenario of Insertion Sort, and choosing a different algorithm is not necessary.",
        option4: "Insertion Sort performs well regardless of data distribution, and no strategies are required.",
        ans: 1,
    },
    {
        question: "Evaluate the stability of the Insertion Sort algorithm and explain how it ensures stability during the sorting process.",
        option1: "Insertion Sort is inherently stable, preserving the relative order of equal elements through careful insertion.",
        option2: "Insertion Sort may not be stable, as it depends on the specific implementation and input data.",
        option3: "Insertion Sort is only stable when sorting small lists.",
        option4: "Stability in Insertion Sort is not guaranteed and depends on the input data distribution.",
        ans: 1,
    },
    {
        question: "Propose modifications to Insertion Sort to make it suitable for parallel processing, and discuss the potential advantages and challenges of parallelizing the algorithm.",
        option1: "Introduce parallel processing by dividing the array into subarrays and sorting them concurrently; Advantages: Improved speed; Challenges: Increased complexity.",
        option2: "Insertion Sort is inherently parallelizable and does not require modifications; Advantages: Simplicity; Challenges: Limited speedup.",
        option3: "Implement a parallel version of Insertion Sort using multi-threading; Advantages: Increased efficiency; Challenges: Synchronization issues.",
        option4: "Parallel processing is not suitable for Insertion Sort, and a different algorithm should be chosen for parallelization; Advantages: None; Challenges: Complexity.",
        ans: 1,
    },
];
