import { useEffect, useRef, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setTodos,
} from "./todoSlice";
import {
  loadTodosForUser,
  saveTodosForUser,
} from "../../utils/indexedDb";

export default function TodosPage() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);
  const { user, loading } = useAppSelector((state) => state.auth);

  const [text, setText] = useState("");
  const hydrated = useRef(false);

  // Load todos after auth resolves
  useEffect(() => {
    if (loading) return;
    if (!user?.uid) return;

    loadTodosForUser(user.uid).then((storedTodos) => {
      dispatch(setTodos(storedTodos));
      hydrated.current = true;
    });
  }, [loading, user?.uid, dispatch]);

  // Save todos after hydration
  useEffect(() => {
    if (!hydrated.current) return;
    if (!user?.uid) return;

    saveTodosForUser(user.uid, todos);
  }, [todos, user?.uid]);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">Todos</h1>

      <div className="flex gap-3 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800"
          placeholder="Enter a todo"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded"
          >
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <span
                className={`select-none transition ${
                  todo.completed
                    ? "line-through text-gray-400 italic"
                    : "text-black dark:text-white"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 ml-3"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}
