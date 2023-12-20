// algorithmImplementations.js

const implementations = {
    bubbleSortC: "void bubble_sort(long arr[], long n) {\n" +
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
    ,
    bubbleSortCpp: "void swap(int *xp, int *yp) {\n" +
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
        "}",
    bubbleSortJava:"static void bubbleSort(int[] arr) {\n" +
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
        "}\n",
    bubbleSortPython: "def bubbleSort(arr):\n" +
        "    n = len(arr)\n" +
        "    for i in range(n-1):\n" +
        "        for j in range(0, n-i-1):\n" +
        "            if arr[j] > arr[j+1]:\n" +
        "                arr[j], arr[j+1] = arr[j+1], arr[j]",
    mergeSortC:
        "void merge(int arr[], int l, int m, int r) {\n" +
        "    int i, j, k;\n" +
        "    int n1 = m - l + 1;\n" +
        "    int n2 = r - m;\n" +
        "    int L[n1], R[n2];\n" +
        "    for (i = 0; i < n1; i++)\n" +
        "        L[i] = arr[l + i];\n" +
        "    for (j = 0; j < n2; j++)\n" +
        "        R[j] = arr[m + 1 + j];\n" +
        "    i = 0;\n" +
        "    j = 0;\n" +
        "    k = l;\n" +
        "    while (i < n1 && j < n2) {\n" +
        "        if (L[i] <= R[j]) {\n" +
        "            arr[k] = L[i];\n" +
        "            i++;\n" +
        "        } else {\n" +
        "            arr[k] = R[j];\n" +
        "            j++;\n" +
        "        }\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (i < n1) {\n" +
        "        arr[k] = L[i];\n" +
        "        i++;\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (j < n2) {\n" +
        "        arr[k] = R[j];\n" +
        "        j++;\n" +
        "        k++;\n" +
        "    }\n" +
        "}\n" +
        "void mergeSort(int arr[], int l, int r) {\n" +
        "    if (l < r) {\n" +
        "        int m = l + (r - l) / 2;\n" +
        "        mergeSort(arr, l, m);\n" +
        "        mergeSort(arr, m + 1, r);\n" +
        "        merge(arr, l, m, r);\n" +
        "    }\n" +
        "}\n",

    mergeSortCpp:
        "void merge(int arr[], int l, int m, int r) {\n" +
        "    int i, j, k;\n" +
        "    int n1 = m - l + 1;\n" +
        "    int n2 = r - m;\n" +
        "    int L[n1], R[n2];\n" +
        "    for (i = 0; i < n1; i++)\n" +
        "        L[i] = arr[l + i];\n" +
        "    for (j = 0; j < n2; j++)\n" +
        "        R[j] = arr[m + 1 + j];\n" +
        "    i = 0;\n" +
        "    j = 0;\n" +
        "    k = l;\n" +
        "    while (i < n1 && j < n2) {\n" +
        "        if (L[i] <= R[j]) {\n" +
        "            arr[k] = L[i];\n" +
        "            i++;\n" +
        "        } else {\n" +
        "            arr[k] = R[j];\n" +
        "            j++;\n" +
        "        }\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (i < n1) {\n" +
        "        arr[k] = L[i];\n" +
        "        i++;\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (j < n2) {\n" +
        "        arr[k] = R[j];\n" +
        "        j++;\n" +
        "        k++;\n" +
        "    }\n" +
        "}\n" +
        "void mergeSort(int arr[], int l, int r) {\n" +
        "    if (l < r) {\n" +
        "        int m = l + (r - l) / 2;\n" +
        "        mergeSort(arr, l, m);\n" +
        "        mergeSort(arr, m + 1, r);\n" +
        "        merge(arr, l, m, r);\n" +
        "    }\n" +
        "}\n",

    mergeSortJava:
        "static void merge(int arr[], int l, int m, int r) {\n" +
        "    int i, j, k;\n" +
        "    int n1 = m - l + 1;\n" +
        "    int n2 = r - m;\n" +
        "    int L[] = new int[n1];\n" +
        "    int R[] = new int[n2];\n" +
        "    for (i = 0; i < n1; ++i)\n" +
        "        L[i] = arr[l + i];\n" +
        "    for (j = 0; j < n2; ++j)\n" +
        "        R[j] = arr[m + 1 + j];\n" +
        "    i = 0;\n" +
        "    j = 0;\n" +
        "    k = l;\n" +
        "    while (i < n1 && j < n2) {\n" +
        "        if (L[i] <= R[j]) {\n" +
        "            arr[k] = L[i];\n" +
        "            i++;\n" +
        "        } else {\n" +
        "            arr[k] = R[j];\n" +
        "            j++;\n" +
        "        }\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (i < n1) {\n" +
        "        arr[k] = L[i];\n" +
        "        i++;\n" +
        "        k++;\n" +
        "    }\n" +
        "    while (j < n2) {\n" +
        "        arr[k] = R[j];\n" +
        "        j++;\n" +
        "        k++;\n" +
        "    }\n" +
        "}\n" +
        "static void mergeSort(int arr[], int l, int r) {\n" +
        "    if (l < r) {\n" +
        "        int m = (l + r) / 2;\n" +
        "        mergeSort(arr, l, m);\n" +
        "        mergeSort(arr, m + 1, r);\n" +
        "        merge(arr, l, m, r);\n" +
        "    }\n" +
        "}\n",

    mergeSortPython:
        "def merge(arr, l, m, r):\n" +
        "    n1 = m - l + 1\n" +
        "    n2 = r - m\n" +
        "    L = [0] * (n1)\n" +
        "    R = [0] * (n2)\n" +
        "    for i in range(0, n1):\n" +
        "        L[i] = arr[l + i]\n" +
        "    for j in range(0, n2):\n" +
        "        R[j] = arr[m + 1 + j]\n" +
        "    i = 0\n" +
        "    j = 0\n" +
        "    k = l\n" +
        "    while i < n1 and j < n2:\n" +
        "        if L[i] <= R[j]:\n" +
        "            arr[k] = L[i]\n" +
        "            i += 1\n" +
        "        else:\n" +
        "            arr[k] = R[j]\n" +
        "            j += 1\n" +
        "        k += 1\n" +
        "    while i < n1:\n" +
        "        arr[k] = L[i]\n" +
        "        i += 1\n" +
        "        k += 1\n" +
        "    while j < n2:\n" +
        "        arr[k] = R[j]\n" +
        "        j += 1\n" +
        "        k += 1\n" +
        "\n" +
        "def mergeSort(arr, l, r):\n" +
        "    if l < r:\n" +
        "        m = (l + (r - 1)) // 2\n" +
        "        mergeSort(arr, l, m)\n" +
        "        mergeSort(arr, m + 1, r)\n" +
        "        merge(arr, l, m, r)\n",
    insertionSortC:
        "void insertionSort(int arr[], int n) {\n" +
        "    int i, key, j;\n" +
        "    for (i = 1; i < n; i++) {\n" +
        "        key = arr[i];\n" +
        "        j = i - 1;\n" +
        "        while (j >= 0 && arr[j] > key) {\n" +
        "            arr[j + 1] = arr[j];\n" +
        "            j = j - 1;\n" +
        "        }\n" +
        "        arr[j + 1] = key;\n" +
        "    }\n" +
        "}\n",

    insertionSortCpp:
        "void insertionSort(int arr[], int n) {\n" +
        "    int i, key, j;\n" +
        "    for (i = 1; i < n; i++) {\n" +
        "        key = arr[i];\n" +
        "        j = i - 1;\n" +
        "        while (j >= 0 && arr[j] > key) {\n" +
        "            arr[j + 1] = arr[j];\n" +
        "            j = j - 1;\n" +
        "        }\n" +
        "        arr[j + 1] = key;\n" +
        "    }\n" +
        "}\n",

    insertionSortJava:
        "static void insertionSort(int arr[]) {\n" +
        "    int n = arr.length;\n" +
        "    for (int i = 1; i < n; ++i) {\n" +
        "        int key = arr[i];\n" +
        "        int j = i - 1;\n" +
        "        while (j >= 0 && arr[j] > key) {\n" +
        "            arr[j + 1] = arr[j];\n" +
        "            j = j - 1;\n" +
        "        }\n" +
        "        arr[j + 1] = key;\n" +
        "    }\n" +
        "}\n",

    insertionSortPython:
        "def insertionSort(arr):\n" +
        "    for i in range(1, len(arr)):\n" +
        "        key = arr[i]\n" +
        "        j = i - 1\n" +
        "        while j >= 0 and arr[j] > key:\n" +
        "            arr[j + 1] = arr[j]\n" +
        "            j = j - 1\n" +
        "        arr[j + 1] = key\n",
    selectionSortC: "void selectionSort(int arr[], int n) {\n" +
        "    int i, j, min_idx;\n" +
        "    for (i = 0; i < n-1; i++) {\n" +
        "        min_idx = i;\n" +
        "        for (j = i+1; j < n; j++)\n" +
        "            if (arr[j] < arr[min_idx])\n" +
        "                min_idx = j;\n" +
        "        int temp = arr[min_idx];\n" +
        "        arr[min_idx] = arr[i];\n" +
        "        arr[i] = temp;\n" +
        "    }\n" +
        "}\n",
    selectionSortCpp: "void selectionSort(int arr[], int n) {\n" +
        "    int i, j, min_idx;\n" +
        "    for (i = 0; i < n-1; i++) {\n" +
        "        min_idx = i;\n" +
        "        for (j = i+1; j < n; j++)\n" +
        "            if (arr[j] < arr[min_idx])\n" +
        "                min_idx = j;\n" +
        "        int temp = arr[min_idx];\n" +
        "        arr[min_idx] = arr[i];\n" +
        "        arr[i] = temp;\n" +
        "    }\n" +
        "}\n",
    selectionSortJava: "static void selectionSort(int arr[]) {\n" +
        "    int n = arr.length;\n" +
        "    for (int i = 0; i < n-1; i++) {\n" +
        "        int min_idx = i;\n" +
        "        for (int j = i+1; j < n; j++)\n" +
        "            if (arr[j] < arr[min_idx])\n" +
        "                min_idx = j;\n" +
        "        int temp = arr[min_idx];\n" +
        "        arr[min_idx] = arr[i];\n" +
        "        arr[i] = temp;\n" +
        "    }\n" +
        "}\n",
    selectionSortPython: "def selectionSort(arr):\n" +
        "    for i in range(len(arr)):\n" +
        "        min_idx = i\n" +
        "        for j in range(i+1, len(arr)):\n" +
        "            if arr[j] < arr[min_idx]:\n" +
        "                min_idx = j\n" +
        "        arr[i], arr[min_idx] = arr[min_idx], arr[i]",
    // Add more algorithms as needed
};

export default implementations;
