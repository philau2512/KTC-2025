import axiosClient from "../api/axiosClient";
import type { Todo } from "../types/Todo.types";

export const getTodoList = async (): Promise<Todo[]> => {
    const response = await axiosClient.get<Todo[]>("");
    return response.data;
}

export const addTodo = async (data: Omit<Todo, "id" | "completed" | "userId">): Promise<Todo> => {
    const response = await axiosClient.post<Todo>("", data);
    return response.data;
}