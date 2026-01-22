import { openDB, DBSchema } from "idb";

export interface Todo {
  id?: number;
  text: string;
  userId: string;
}

interface TodoDB extends DBSchema {
  todos: {
    key: number;
    value: Todo;
  };
}

export const dbPromise = openDB<TodoDB>("todo-db", 1, {
  upgrade(db) {
    db.createObjectStore("todos", {
      keyPath: "id",
      autoIncrement: true,
    });
  },
});

export const addTodo = async (todo: Todo) => {
  const db = await dbPromise;
  return db.add("todos", todo);
};

export const getTodos = async () => {
  const db = await dbPromise;
  return db.getAll("todos");
};

export const deleteTodo = async (id: number) => {
  const db = await dbPromise;
  await db.delete("todos", id);
};
