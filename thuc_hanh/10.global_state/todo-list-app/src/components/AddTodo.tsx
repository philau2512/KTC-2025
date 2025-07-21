import { useState } from "react";
import { useAddTodoMutation } from "../api/todoApi";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    await addTodo({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;