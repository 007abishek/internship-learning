import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { addTodo, getTodos, deleteTodo } from "../utils/indexDb";
import type { Todo } from "../utils/indexDb";
import "../styles/todos.css";

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

    if (user.isAnonymous && todos.length >= 3) {
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
    <div className="todo-container">
      {/* Add Task Card */}
      <div className="todo-add-card">
        <h3>Add New Task</h3>

        <div className="todo-input-row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button onClick={handleAddTodo}>＋ Add</button>
        </div>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id!} className="todo-item">
            <div className="todo-left">
              <input type="checkbox" />
              <div>
                <strong>{todo.text}</strong>
                <span className="todo-date">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="todo-actions">
              <button className="edit">✏️</button>
              <button
                className="delete"
                onClick={() => handleDeleteTodo(todo.id!)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSection;
