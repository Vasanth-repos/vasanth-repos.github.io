# API Reference & Data Contracts

## Data Contracts (`src/types/index.ts`)

### `Project`
- `id`: string
- `title`: string
- `category`: string
- `tagline`: string
- `description`: string
- `technologies`: string[]
- `status`: 'Completed' | 'Building' | 'Live' | 'Prototype'
- `problem`: string
- `solution`: string
- `architecture`: { overview: string; steps: { title: string; desc: string; icon: string }[] }
- `engineeringDecisions`: string[]
- `links`: { github?: string; demo?: string; docs?: string }

### `DsaTopic`
- `id`: string
- `title`: string
- `category`: string
- `count`: number
- `solvedPatterns`: string[]
- `difficulty`: { easy: number; medium: number; hard: number }
- `keyConcepts`: string[]
- `representativeProblem`: string
- `timeComplexityFocus`: string
