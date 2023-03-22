
export interface Todo {
    id: number,
    userId: number,
    title: string,
    completed: boolean,
}

export interface Submission {
    name: string,
    score: number,
    date: string,
    passed: boolean,
}

export type SubmissionMap = Map<string, Submission>;
