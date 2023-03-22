import axios, { AxiosResponse } from "axios"

import {Todo, Submission} from './types';

const getTodos = async (): Promise<Todo[]> => {
    const todos: AxiosResponse<Todo[]> = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(todos.data);
    const todosD: Todo[] = todos.data;
    return todosD;
    throw 1;
    // return todos;
}

const getTodoById = (todoList: Todo[], id: number): Todo | undefined => {
    return todoList.find(item => item.id == id);
}

async function todoMain() {
    const todoList = await getTodos();

    const todo15 = getTodoById(todoList, 15);
    console.log(todo15);
}

const addSubmission = (array: Submission[], newName: string, newScore: number, newDate: string): void => {
    const passed = newScore >= 60;
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed,
    });
}

function deleteSubmissionByIndex(array: Submission[], index: number): void {
    array.splice(index, 1);
}

function findSubmissionByName(array: Submission[], name: string): Submission|undefined {
    return array.find((s: Submission): boolean => s.name === name);
}

function findLowestScore(array: Submission[]): Submission|undefined {
    let bestSub: Submission|undefined;
    let bestScore = Infinity;

    for (const sub of array) {
        if (sub.score < bestScore) {
            bestSub = sub;
            bestScore = sub.score;
        }
    }
    return bestSub;
}

function findAverageScore(array: Submission[]): number {
    const totalScore = array.reduce((a, sub) => a + sub.score, 0);
    return totalScore / array.length;
}

function filterPassing(array: Submission[]): Submission[] {
    return array.filter(s => s.passed);
}

async function submissionMain() {
    const submissions: Submission[] = [
        {name: "Jane", score: 95, date: "2020-01-24", passed: true},
        {name: "Joe", score: 77, date: "2018-05-14", passed: true},
        {name: "Jack", score: 59, date: "2019-07-05", passed: false},
        {name: "Jill", score: 88, date: "2020-04-22", passed: true},
    ];

    addSubmission(submissions, "Nathaniel", 143, "2023-01-26");
    console.log(submissions[submissions.length-1]);
}

submissionMain();

