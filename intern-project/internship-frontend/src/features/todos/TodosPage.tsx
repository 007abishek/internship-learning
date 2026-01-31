import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
} from "./todoSlice";

export default function TodosPage() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [text, setText] = useState("");

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
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}
