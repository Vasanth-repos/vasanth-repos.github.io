import { DsaTopic } from '../types';

export const DSA_TOPICS: DsaTopic[] = [
  {
    id: 'dp',
    title: 'Dynamic Programming',
    category: 'Optimization',
    count: 78,
    solvedPatterns: ['0/1 Knapsack', 'Longest Common Subsequence', 'Matrix Chain Multiplication', 'DP on Trees', 'Bitmask DP'],
    difficulty: { easy: 18, medium: 46, hard: 14 },
    keyConcepts: ['Optimal Substructure', 'Overlapping Subproblems', 'Memoization vs Tabulation', 'State Space Reduction'],
    representativeProblem: 'Longest Palindromic Substring / Edit Distance',
    timeComplexityFocus: 'O(N^2) or O(N*W) with O(N) space optimization',
    notes: 'Mastered 2D state transitions and rolling array memory optimizations.'
  },
  {
    id: 'graphs',
    title: 'Graphs & Disjoint Sets',
    category: 'Network & Topology',
    count: 65,
    solvedPatterns: ['BFS / DFS Traversal', "Dijkstra's Shortest Path", "Kruskal's / Prim's MST", 'Topological Sort', "Tarjan's Bridges & SCC", 'Union-Find / DSU with Path Compression'],
    difficulty: { easy: 12, medium: 41, hard: 12 },
    keyConcepts: ['Cycle Detection', 'Bipartite Checking', 'Minimum Spanning Trees', 'Connected Components'],
    representativeProblem: 'Course Schedule II / Network Delay Time / Critical Connections',
    timeComplexityFocus: 'O(V + E) for standard traversals, O(E log V) for Dijkstra & Kruskal',
    notes: 'Extensively applied in routing simulations and dependency resolution engines.'
  },
  {
    id: 'trees',
    title: 'Binary Trees & BST',
    category: 'Hierarchical Structures',
    count: 62,
    solvedPatterns: ['Level Order (BFS)', 'Inorder/Preorder/Postorder (DFS)', 'Lowest Common Ancestor (LCA)', 'Tree Serialization', 'Diameter of Tree', 'BST Validation'],
    difficulty: { easy: 24, medium: 32, hard: 6 },
    keyConcepts: ['Recursive Invariants', 'Morris Traversal (O(1) Space)', 'Binary Search Property', 'Subtree Aggregation'],
    representativeProblem: 'Binary Tree Maximum Path Sum / Validate BST',
    timeComplexityFocus: 'O(N) time with O(H) recursion stack space',
    notes: 'Solid intuition on bottom-up vs top-down recursive propagation.'
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window & 2-Pointers',
    category: 'Sequential Processing',
    count: 55,
    solvedPatterns: ['Fixed Size Window', 'Dynamic Shrink/Expand Window', 'Opposite Direction 2-Pointers', 'Fast & Slow Runner (Floyd Cycle)'],
    difficulty: { easy: 20, medium: 29, hard: 6 },
    keyConcepts: ['Monotonic Frequency Maps', 'Shrink Condition Invariants', 'At Most K Strategy', 'In-Place Array Mutation'],
    representativeProblem: 'Minimum Window Substring / Trapping Rain Water',
    timeComplexityFocus: 'Strict O(N) linear time, O(K) auxiliary space',
    notes: 'Intuitive grasp of left/right pointer coordination without nested passes.'
  },
  {
    id: 'binary-search',
    title: 'Binary Search & BS on Answer',
    category: 'Search & Divide',
    count: 48,
    solvedPatterns: ['Standard Array BS', 'Rotated Sorted Array', 'Binary Search on Search Space / Answer', 'Median of Two Sorted Arrays'],
    difficulty: { easy: 16, medium: 26, hard: 6 },
    keyConcepts: ['Monotonic Feasibility Functions', 'Mid Calculation without Overflow (low + (high - low)/2)', 'Boundary Conditions (< vs <=)'],
    representativeProblem: 'Koko Eating Bananas / Search in Rotated Sorted Array',
    timeComplexityFocus: 'O(log N) runtime, O(1) memory space',
    notes: 'Expert in turning complex optimization problems into binary decision functions.'
  },
  {
    id: 'heaps-priority-queue',
    title: 'Heaps & Monotonic Structures',
    category: 'Ordering & Streams',
    count: 42,
    solvedPatterns: ['Top K Frequent Elements', 'Merge K Sorted Lists', 'Running Median (Dual Heaps)', 'Monotonic Stack (Next Greater Element)', 'Monotonic Queue'],
    difficulty: { easy: 10, medium: 26, hard: 6 },
    keyConcepts: ['Min/Max Heap Invariants', 'C++ priority_queue Custom Comparators', 'Amortized O(1) Stack Processing'],
    representativeProblem: 'Find Median from Data Stream / Largest Rectangle in Histogram',
    timeComplexityFocus: 'O(N log K) for K elements, O(N) amortized for monotonic stack',
    notes: 'Frequently utilized in real-time ranking and continuous data ingestion tasks.'
  },
  {
    id: 'backtracking',
    title: 'Backtracking & Recursion',
    category: 'Exhaustive Search',
    count: 36,
    solvedPatterns: ['Permutations & Subsets', 'N-Queens', 'Sudoku Solver', 'Word Search', 'Combination Sum'],
    difficulty: { easy: 6, medium: 22, hard: 8 },
    keyConcepts: ['Choice -> Explore -> Unchoose Paradigm', 'Pruning Branches Early', 'State Restoration'],
    representativeProblem: 'N-Queens / Word Break II / Palindrome Partitioning',
    timeComplexityFocus: 'O(K^N) or O(N!) bounded tightly by pruning predicates',
    notes: 'Sharp discipline in bounding search state trees to pass tight runtime limits.'
  },
  {
    id: 'arrays-strings-hashing',
    title: 'Arrays, Strings & Hashing',
    category: 'Foundations',
    count: 85,
    solvedPatterns: ['Prefix Sums', 'Kadane’s Max Subarray', 'Hash Map Indexing', 'String Rolling Hash (Rabin-Karp)', 'Bit Manipulation Tricks'],
    difficulty: { easy: 35, medium: 42, hard: 8 },
    keyConcepts: ['O(1) Average Lookup', 'Prefix Frequency Arrays', 'Bitwise XOR & Shift Properties', 'In-Place Swapping'],
    representativeProblem: 'Subarray Sum Equals K / Longest Consecutive Sequence',
    timeComplexityFocus: 'O(N) linear time, O(N) or O(1) space',
    notes: 'Rock-solid fundamentals across low-level array memory layouts and bitwise arithmetic.'
  }
];
