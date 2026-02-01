import { openDB } from "idb";
import type { Todo } from "../features/todos/todoSlice";

const DB_NAME = "todo-db";
const DB_VERSION = 2; // 🔥 INCREMENT VERSION
const STORE_NAME = "todos-by-user";

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    // 🔑 create store if missing
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  },
});

export async function loadTodosForUser(userId: string): Promise<Todo[]> {
  const db = await dbPromise;
  return (await db.get(STORE_NAME, userId)) ?? [];
}

export async function saveTodosForUser(
  userId: string,
  todos: Todo[]
): Promise<void> {
  const db = await dbPromise;
  await db.put(STORE_NAME, todos, userId);
}
