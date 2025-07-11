import { useEffect, useState } from "react";
import { addTodo, getTodoList } from "../services/todoListService";
import type { Todo } from "../types/Todo.types";

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    getTodoList().then((data) => setTodoList(data));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    addTodo({ title }).then((data) => setTodoList([...todoList, data]));
    (document.querySelector("input") as HTMLInputElement).value = "";
    alert("Todo added successfully");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new todo" name="title" />
        <br/>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
