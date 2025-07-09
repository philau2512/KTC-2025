import { useState } from "react";
import "../styles/TodoItem.css";

interface TodoItemProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className="todo-item">
      <span className="todo-checkbox" onClick={toggleCompleted}>
        {completed && "✓"}
      </span>
      <span className={`todo-text ${completed ? "completed" : ""}`}>
        {text}
      </span>
      <span className="todo-delete" onClick={() => onDelete(id)}>
        ×
      </span>
    </div>
  );
};

export default TodoItem;
