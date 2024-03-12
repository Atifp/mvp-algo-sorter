export const easyBubbleData = [
    {
        question: "How does the Bubble Sort algorithm work?",
        option1: "By applying a mathematical formula to rearrange elements",
        option2: "By using a pivot element to divide the array into subarrays",
        option3: "By repeatedly swapping adjacent elements if they are in the wrong order",
        option4: "By performing a binary search to locate the correct position of elements",
        ans: 3,
    },
    {
        question: "What is the time complexity of Bubble Sort in the best-case scenario?",
        option1: "O(n^2)",
        option2: "O(n)",
        option3: "O(n log n)",
        option4: "O(1)",
        ans: 2,
    },
    {
        question: "What is the primary operation performed in each pass of Bubble Sort?",
        option1: "Finding the median",
        option2: "Dividing the array into two halves",
        option3: "Calculating the average of elements",
        option4: "Swapping adjacent elements",
        ans: 4,
    },
    {
        question: "In the best-case scenario, when is Bubble Sort most efficient?",
        option1: "When the array contains a small number of elements",
        option2: "When the array is sorted in reverse order",
        option3: "When the array is already sorted",
        option4: "When the array has a uniform distribution of values",
        ans: 3,
    },
    {
        question: "Explain the concept of a 'pass' in the Bubble Sort algorithm.",
        option1: "It represents the size of the subarray being sorted.",
        option2: "It is the process of selecting the pivot element for sorting.",
        option3: "It indicates the number of elements to be skipped during the sorting process.",
        option4: "It refers to a complete iteration through the array, comparing and swapping elements.",
        ans: 4,
    },
];

export const mediumBubbleData = [
    {
        question: "How would you optimize Bubble Sort to improve its performance?",
        option1: "Introduce parallel processing for faster execution",
        option2: "Increase the number of passes through the array",
        option3: "Apply dynamic programming techniques",
        option4: "Implement a mechanism to stop the algorithm if no swaps are performed in a pass",
        ans: 4,
    },
    {
        question: "Discuss the advantages and disadvantages of using Bubble Sort compared to other sorting algorithms.",
        option1: "Advantages: Bubble Sort is simple; Disadvantages: inefficiency for large lists",
        option2: "Advantages: fast execution; Disadvantages: complexity in code structure",
        option3: "Advantages: suitable for any list size; Disadvantages: limited applicability",
        option4: "Advantages: minimal memory usage; Disadvantages: high time complexity",
        ans: 1,
    },
    {
        question: "When might you choose to use Bubble Sort in a real-world scenario?",
        option1: "Sorting a large database of customer information",
        option2: "Sorting a small list of user names in an application",
        option3: "Sorting a list of phone numbers in a mobile device",
        option4: "Sorting a dataset for scientific research",
        ans: 2,
    },
    {
        question: "Explain the term 'stable sort' in the context of Bubble Sort.",
        option1: "It rearranges the elements randomly during the sorting process",
        option2: "It prioritizes sorting elements in descending order",
        option3: "It ensures that the smallest element is placed at the end of the array",
        option4: "It preserves the relative order of equal elements in the sorted output",
        ans: 4,
    },
    {
        question: "In what scenarios would you recommend using Bubble Sort over more advanced sorting algorithms?",
        option1: "When simplicity is a priority and the list is small",
        option2: "When the list is already sorted in descending order",
        option3: "When parallel processing capabilities are essential",
        option4: "When time complexity is the primary concern",
        ans: 1,
    },
];

export const hardBubbleData = [
    {
        question: "Compare and contrast Bubble Sort with the Merge Sort algorithm, highlighting their strengths and weaknesses.",
        option1: "Advantages: Bubble Sort is faster; Merge Sort is simpler; Disadvantages: Merge Sort requires more memory",
        option2: "Advantages: Bubble Sort is simple; Merge Sort is faster for large lists; Disadvantages: Bubble Sort is inefficient for large lists; Merge Sort is more complex",
        option3: "Advantages: Both are equally efficient; Disadvantages: Both have high time complexity",
        option4: "Advantages: Merge Sort is faster; Bubble Sort is more memory-efficient; Disadvantages: Merge Sort is more complex",
        ans: 2,
    },
    {
        question: "Propose an enhancement to the Bubble Sort algorithm to make it adaptable to different data distributions (e.g., nearly sorted lists or lists with duplicate values).",
        option1: "Implement a variation of Bubble Sort that recognizes nearly sorted lists and optimizes the sorting process",
        option2: "Introduce a mechanism to handle duplicate values efficiently during the sorting process",
        option3: "Modify the comparison operation to consider the distribution of values in the list",
        option4: "Implement a hybrid sorting algorithm that combines Bubble Sort with another algorithm for improved adaptability",
        ans: 1,
    },
    {
        question: "Discuss the impact of data distribution on the performance of Bubble Sort and propose strategies to mitigate its limitations.",
        option1: "Data distribution has a minimal impact on Bubble Sort, and no specific strategies are needed to mitigate its limitations.",
        option2: "Data distribution only impacts the best-case scenario of Bubble Sort, and choosing a different algorithm is not necessary.",
        option3: "Data distribution significantly affects Bubble Sort's efficiency, and strategies may include pre-sorting or choosing a different algorithm based on the distribution.",
        option4: "Bubble Sort performs well regardless of data distribution, and no strategies are required.",
        ans: 3,
    },
    {
        question: "Evaluate the stability of the Bubble Sort algorithm and explain how it ensures stability during the sorting process.",
        option1: "Bubble Sort is inherently stable, preserving the relative order of equal elements through careful swapping.",
        option2: "Bubble Sort may not be stable, as it depends on the specific implementation and input data.",
        option3: "Bubble Sort is only stable when sorting small lists.",
        option4: "Stability in Bubble Sort is not guaranteed and depends on the input data distribution.",
        ans: 1,
    },
    {
        question: "Propose modifications to Bubble Sort to make it suitable for parallel processing, and discuss the potential advantages and challenges of parallelizing the algorithm.",
        option1: "Bubble Sort is inherently parallelizable and does not require modifications; Advantages: Simplicity; Challenges: Limited speedup.",
        option2: "Implement a parallel version of Bubble Sort using multi-threading; Advantages: Increased efficiency; Challenges: Synchronization issues.",
        option3: "Parallel processing is not suitable for Bubble Sort, and a different algorithm should be chosen for parallelization; Advantages: None; Challenges: Complexity.",
        option4: "Introduce parallel processing by dividing the array into subarrays and sorting them concurrently; Advantages: Improved speed; Challenges: Increased complexity.",
        ans: 4,
    },
];

export const easyInsertionData = [
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

export const mediumInsertionData = [
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
        option2: "It preserves the relative order of equal elements in the sorted output",
        option3: "It prioritizes sorting elements in descending order",
        option4: "It ensures that the smallest element is placed at the end of the array",
        ans: 2,
    },
    {
        question: "In what scenarios would you recommend using Insertion Sort over more advanced sorting algorithms?",
        option1: "When the list is already sorted in descending order",
        option2: "When parallel processing capabilities are essential",
        option3: "When simplicity is a priority and the list is small",
        option4: "When time complexity is the primary concern",
        ans: 3,
    },
];

export const hardInsertionData = [
    {
        question: "Compare and contrast Insertion Sort with Merge Sort algorithm, highlighting their strengths and weaknesses.",
        option1: "Advantages: Insertion Sort is more memory-efficient; Merge Sort is faster for large lists; Disadvantages: Insertion Sort is slower; Merge Sort requires more memory",
        option2: "Advantages: Both have high time complexity; Disadvantages: Both are equally efficient",
        option3: "Advantages: Merge Sort is more memory-efficient; Insertion Sort is faster for large lists; Disadvantages: Merge Sort is slower; Insertion Sort requires more memory",
        option4: "Advantages: Insertion Sort is faster; Merge Sort is more memory-efficient; Disadvantages: Insertion Sort is slower; Merge Sort requires more memory",
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
        option1: "Data distribution has a minimal impact on Insertion Sort, and no specific strategies are needed to mitigate its limitations.",
        option2: "Data distribution only impacts the best-case scenario of Insertion Sort, and choosing a different algorithm is not necessary.",
        option3: "Data distribution significantly affects Insertion Sort's efficiency, and strategies may include pre-sorting or choosing a different algorithm based on the distribution.",
        option4: "Insertion Sort performs well regardless of data distribution, and no strategies are required.",
        ans: 3,
    },
    {
        question: "Evaluate the stability of the Insertion Sort algorithm and explain how it ensures stability during the sorting process.",
        option1: "Insertion Sort may not be stable, as it depends on the specific implementation and input data.",
        option2: "Insertion Sort is inherently stable, preserving the relative order of equal elements through careful insertion.",
        option3: "Insertion Sort is only stable when sorting small lists.",
        option4: "Stability in Insertion Sort is not guaranteed and depends on the input data distribution.",
        ans: 2,
    },
    {
        question: "Propose modifications to Insertion Sort to make it suitable for parallel processing, and discuss the potential advantages and challenges of parallelizing the algorithm.",
        option1: "Insertion Sort is inherently parallelizable and does not require modifications; Advantages: Simplicity; Challenges: Limited speedup.",
        option2: "Implement a parallel version of Insertion Sort using multi-threading; Advantages: Increased efficiency; Challenges: Synchronization issues.",
        option3: "Parallel processing is not suitable for Insertion Sort, and a different algorithm should be chosen for parallelization; Advantages: None; Challenges: Complexity.",
        option4: "Introduce parallel processing by dividing the array into subarrays and sorting them concurrently; Advantages: Improved speed; Challenges: Increased complexity.",
        ans: 4,
    },
];

export const easyMergeData = [
    {
        question: "What is the basic operation performed by the Merge Sort algorithm?",
        option1: "Swapping adjacent elements",
        option2: "Dividing the array into two halves",
        option3: "Finding the median",
        option4: "Merging two elements",
        ans: 4,
    },
    {
        question: "In Merge Sort, how is the process of dividing the array carried out?",
        option1: "By selecting a random element as the pivot",
        option2: "By splitting the array into two equal halves",
        option3: "By finding the smallest element and removing it",
        option4: "By swapping elements until they are in order",
        ans: 2,
    },
    {
        question: "What is the time complexity of Merge Sort in the worst-case scenario?",
        option1: "O(n)",
        option2: "O(n log n)",
        option3: "O(n^2)",
        option4: "O(1)",
        ans: 2,
    },
    {
        question: "What is the primary operation performed during the merge step of Merge Sort?",
        option1: "Swapping elements in the array",
        option2: "Finding the median element",
        option3: "Combining two sorted halves into a single sorted array",
        option4: "Dividing the array into subarrays",
        ans: 3,
    },
    {
        question: "In Merge Sort, when does the merging of subarrays occur?",
        option1: "After sorting each subarray",
        option2: "During the divide step",
        option3: "Before dividing the array",
        option4: "At the beginning of the algorithm",
        ans: 1,
    },
];

export const mediumMergeData = [
    {
        question: "How does Merge Sort ensure its time complexity remains efficient for large datasets?",
        option1: "By using parallel processing",
        option2: "By dividing the array into subarrays of constant size",
        option3: "By dynamically adjusting the pivot element",
        option4: "By dividing the array into two halves recursively",
        ans: 4,
    },
    {
        question: "What is the significance of the 'divide and conquer' strategy employed by Merge Sort?",
        option1: "It ensures the array is divided into equal halves",
        option2: "It reduces the problem of sorting a large array into simpler subproblems",
        option3: "It increases the time complexity of the algorithm",
        option4: "It only works efficiently for already sorted arrays",
        ans: 2,
    },
    {
        question: "In Merge Sort, what is the purpose of the merge step?",
        option1: "To divide the array into two halves",
        option2: "To swap elements within the array",
        option3: "To combine two sorted halves into a single sorted array",
        option4: "To find the smallest element in the array",
        ans: 3,
    },
    {
        question: "Explain the concept of 'stable sort' in the context of Merge Sort.",
        option1: "It rearranges the elements randomly during the sorting process",
        option2: "It ensures that the smallest element is placed at the end of the array",
        option3: "It preserves the relative order of equal elements in the sorted output",
        option4: "It prioritizes sorting elements in descending order",
        ans: 3,
    },
    {
        question: "What is the role of recursion in the Merge Sort algorithm?",
        option1: "Recursion is not used in Merge Sort",
        option2: "Recursion helps in dividing the problem into smaller subproblems",
        option3: "Recursion is used to swap elements within the array",
        option4: "Recursion is employed only during the merge step",
        ans: 2,
    },
];

export const hardMergeData = [
    {
        question: "Compare and contrast Merge Sort with the Insertion Sort algorithm, highlighting their strengths and weaknesses.",
        option1: "Advantages: Merge Sort is more memory-efficient; Insertion Sort is faster for large lists; Disadvantages: Merge Sort is slower; Insertion Sort requires more memory",
        option2: "Advantages: Both have high time complexity; Disadvantages: Both are equally efficient",
        option3: "Advantages: Insertion Sort is more memory-efficient; Merge Sort is faster for large lists; Disadvantages: Insertion Sort is slower; Merge Sort requires more memory",
        option4: "Advantages: Merge Sort is faster; Insertion Sort is more memory-efficient; Disadvantages: Merge Sort is slower; Insertion Sort requires more memory",
        ans: 1,
    },
    {
        question: "Propose an enhancement to the Merge Sort algorithm to make it adaptable to different data distributions (e.g., nearly sorted lists or lists with duplicate values).",
        option1: "Introduce a mechanism to handle duplicate values efficiently during the sorting process",
        option2: "Implement a variation of Merge Sort that recognizes nearly sorted lists and optimizes the sorting process",
        option3: "Modify the comparison operation to consider the distribution of values in the list",
        option4: "Implement a hybrid sorting algorithm that combines Merge Sort with another algorithm for improved adaptability",
        ans: 2,
    },
    {
        question: "Discuss the impact of data distribution on the performance of Merge Sort and propose strategies to mitigate its limitations.",
        option1: "Data distribution significantly affects Merge Sort's efficiency, and strategies may include pre-sorting or choosing a different algorithm based on the distribution.",
        option2: "Data distribution has a minimal impact on Merge Sort, and no specific strategies are needed to mitigate its limitations.",
        option3: "Data distribution only impacts the best-case scenario of Merge Sort, and choosing a different algorithm is not necessary.",
        option4: "Merge Sort performs well regardless of data distribution, and no strategies are required.",
        ans: 1,
    },
    {
        question: "Evaluate the stability of the Merge Sort algorithm and explain how it ensures stability during the sorting process.",
        option1: "Merge Sort may not be stable, as it depends on the specific implementation and input data.",
        option2: "Merge Sort is only stable when sorting small lists.",
        option3: "Merge Sort is inherently stable, preserving the relative order of equal elements through careful merging.",
        option4: "Stability in Merge Sort is not guaranteed and depends on the input data distribution.",
        ans: 3,
    },
    {
        question: "Propose modifications to Merge Sort to make it suitable for parallel processing, and discuss the potential advantages and challenges of parallelizing the algorithm.",
        option1: "Merge Sort is inherently parallelizable and does not require modifications; Advantages: Simplicity; Challenges: Limited speedup.",
        option2: "Implement a parallel version of Merge Sort using multi-threading; Advantages: Increased efficiency; Challenges: Synchronization issues.",
        option3: "Parallel processing is not suitable for Merge Sort, and a different algorithm should be chosen for parallelization; Advantages: None; Challenges: Complexity.",
        option4: "Introduce parallel processing by dividing the array into subarrays and sorting them concurrently; Advantages: Improved speed; Challenges: Increased complexity.",
        ans: 4,
    },
];

export const easySelectionData = [
    {
        question: "What is the basic operation performed by the Selection Sort algorithm?",
        option1: "Swapping adjacent elements",
        option2: "Selecting the minimum element and swapping it with the first element",
        option3: "Finding the median",
        option4: "Merging two elements",
        ans: 2,
    },
    {
        question: "In Selection Sort, how are elements compared for sorting?",
        option1: "By comparing their values directly",
        option2: "By calculating their average",
        option3: "By applying a mathematical formula",
        option4: "By using a hash function",
        ans: 1,
    },
    {
        question: "What is the time complexity of Selection Sort in the worst-case scenario?",
        option1: "O(n)",
        option2: "O(n log n)",
        option3: "O(n^2)",
        option4: "O(1)",
        ans: 3,
    },
    {
        question: "What is the primary operation performed during each iteration of Selection Sort?",
        option1: "Swapping adjacent elements",
        option2: "Comparing all elements in the array",
        option3: "Selecting the minimum element",
        option4: "Dividing the array into subarrays",
        ans: 3,
    },
    {
        question: "In Selection Sort, what is the role of the 'minimum' element?",
        option1: "The minimum element represents the median of the array",
        option2: "The minimum element is the element being swapped with the first element",
        option3: "The minimum element is the largest element in the array",
        option4: "The minimum element is used for swapping adjacent elements",
        ans: 2,
    },
];

export const mediumSelectionData = [
    {
        question: "How does Selection Sort compare to Bubble Sort in terms of efficiency?",
        option1: "Selection Sort is generally faster than Bubble Sort",
        option2: "Bubble Sort is generally faster than Selection Sort",
        option3: "Both algorithms have similar efficiency",
        option4: "Efficiency depends on the specific input data",
        ans: 2,
    },
    {
        question: "Discuss the advantages and disadvantages of using Selection Sort compared to other sorting algorithms.",
        option1: "Advantages: Selection Sort is simple; Disadvantages: inefficiency for large lists",
        option2: "Advantages: fast execution; Disadvantages: complexity in code structure",
        option3: "Advantages: suitable for any list size; Disadvantages: limited applicability",
        option4: "Advantages: minimal memory usage; Disadvantages: high time complexity",
        ans: 1,
    },
    {
        question: "When might you choose to use Selection Sort in a real-world scenario?",
        option1: "Sorting a small list of user names in an application",
        option2: "Sorting a large database of customer information",
        option3: "Sorting a list of phone numbers in a mobile device",
        option4: "Sorting a dataset for scientific research",
        ans: 1,
    },
    {
        question: "Explain the term 'stable sort' in the context of Selection Sort.",
        option1: "It rearranges the elements randomly during the sorting process",
        option2: "It prioritizes sorting elements in descending order",
        option3: "It ensures that the smallest element is placed at the end of the array",
        option4: "It preserves the relative order of equal elements in the sorted output",
        ans: 4,
    },
    {
        question: "In what scenarios would you recommend using Selection Sort over more advanced sorting algorithms?",
        option1: "When the list is already sorted in descending order",
        option2: "When parallel processing capabilities are essential",
        option3: "When simplicity is a priority and the list is small",
        option4: "When time complexity is the primary concern",
        ans: 3,
    },
];

export const hardSelectionData = [
    {
        question: "Compare and contrast Selection Sort with the Bubble Sort algorithm, highlighting their strengths and weaknesses.",
        option1: "Advantages: Both have high time complexity; Disadvantages: Both are equally efficient",
        option2: "Advantages: Selection Sort is more memory-efficient; Bubble Sort is faster for large lists; Disadvantages: Selection Sort is slower; Bubble Sort requires more memory",
        option3: "Advantages: Bubble Sort is more memory-efficient; Selection Sort is faster for large lists; Disadvantages: Bubble Sort is slower; Selection Sort requires more memory",
        option4: "Advantages: Selection Sort is faster; Bubble Sort is more memory-efficient; Disadvantages: Selection Sort is slower; Bubble Sort requires more memory",
        ans: 2,
    },
    {
        question: "Propose an enhancement to the Selection Sort algorithm to make it adaptable to different data distributions (e.g., nearly sorted lists or lists with duplicate values).",
        option1: "Implement a variation of Selection Sort that recognizes nearly sorted lists and optimizes the sorting process",
        option2: "Introduce a mechanism to handle duplicate values efficiently during the sorting process",
        option3: "Modify the comparison operation to consider the distribution of values in the list",
        option4: "Implement a hybrid sorting algorithm that combines Selection Sort with another algorithm for improved adaptability",
        ans: 1,
    },
    {
        question: "Discuss the impact of data distribution on the performance of Selection Sort and propose strategies to mitigate its limitations.",
        option1: "Data distribution has a minimal impact on Selection Sort, and no specific strategies are needed to mitigate its limitations.",
        option2: "Data distribution only impacts the best-case scenario of Selection Sort, and choosing a different algorithm is not necessary.",
        option3: "Selection Sort performs well regardless of data distribution, and no strategies are required.",
        option4: "Data distribution significantly affects Selection Sort's efficiency, and strategies may include pre-sorting or choosing a different algorithm based on the distribution.",
        ans: 4,
    },
    {
        question: "Evaluate the stability of the Selection Sort algorithm and explain how it ensures stability during the sorting process.",
        option1: "Selection Sort is inherently stable, preserving the relative order of equal elements through careful selection.",
        option2: "Selection Sort may not be stable, as it depends on the specific implementation and input data.",
        option3: "Selection Sort is only stable when sorting small lists.",
        option4: "Stability in Selection Sort is not guaranteed and depends on the input data distribution.",
        ans: 1,
    },
    {
        question: "Propose modifications to Selection Sort to make it suitable for parallel processing, and discuss the potential advantages and challenges of parallelizing the algorithm.",
        option1: "Selection Sort is inherently parallelizable and does not require modifications; Advantages: Simplicity; Challenges: Limited speedup.",
        option2: "Implement a parallel version of Selection Sort using multi-threading; Advantages: Increased efficiency; Challenges: Synchronization issues.",
        option3: "Introduce parallel processing by dividing the array into subarrays and sorting them concurrently; Advantages: Improved speed; Challenges: Increased complexity.",
        option4: "Parallel processing is not suitable for Selection Sort, and a different algorithm should be chosen for parallelization; Advantages: None; Challenges: Complexity.",
        ans: 3,
    },
];

