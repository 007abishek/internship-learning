import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addTodo, getTodos, deleteTodo } from "../utils/indexDb";
import type { Todo } from "../utils/indexDb";

const TodoSection = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!user) return;

    getTodos().then((allTodos) => {
      const userTodos = allTodos.filter(
        (todo) => todo.userId === user.uid
      );
      setTodos(userTodos);
    });
  }, [user]);

  const handleAddTodo = async (): Promise<void> => {
    if (!text.trim()) return;
    if (!user) return;

    if (user?.isAnonymous && todos.length >= 3) {
      alert("Guest users can add only 3 todos. Please login.");
      return;
    }

    const newTodo = {
      text,
      userId: user.uid,
    };

    const id = await addTodo(newTodo);

    setTodos((prev) => [...prev, { ...newTodo, id }]);
    setText("");
  };

  const handleDeleteTodo = async (id: number): Promise<void> => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>Todos</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id!}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id!)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSection;
