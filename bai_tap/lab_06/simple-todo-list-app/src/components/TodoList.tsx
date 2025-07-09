import { useState } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "learn react" },
    { id: 2, text: "Go shopping" },
    { id: 3, text: "buy flowers" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-title">Todo list</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="add a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="todo-add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
