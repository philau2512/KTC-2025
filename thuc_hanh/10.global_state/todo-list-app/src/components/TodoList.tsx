import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../api/todoApi";

const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
          />
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;