import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import {
  useSearchUsersQuery,
  useSearchReposQuery,
} from "./githubApi";

type SearchMode = "users" | "repos";

export default function GithubPage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState<SearchMode>("users");

  const {
    data: userResults,
    isLoading: usersLoading,
  } = useSearchUsersQuery(search, {
    skip: !search || mode !== "users",
  });

  const {
    data: repoResults,
    isLoading: reposLoading,
  } = useSearchReposQuery(search, {
    skip: !search || mode !== "repos",
  });

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">
        GitHub Search
      </h1>

      {/* Mode toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMode("users")}
          className={`px-4 py-2 rounded ${
            mode === "users"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Users
        </button>

        <button
          onClick={() => setMode("repos")}
          className={`px-4 py-2 rounded ${
            mode === "repos"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Repositories
        </button>
      </div>

      {/* Search input */}
      <div className="flex gap-3 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search GitHub ${mode}`}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800"
        />
        <button
          onClick={() => setSearch(query.trim())}
          className="bg-black text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {(usersLoading || reposLoading) && (
        <p className="text-gray-500">Loading...</p>
      )}

      {/* USER RESULTS */}
      {mode === "users" && userResults && (
        <ul className="space-y-3">
          {userResults.items.map((user) => (
            <li
              key={user.login}
              className="flex items-center gap-4 border p-3 rounded"
            >
              <img
                src={user.avatar_url}
                className="w-12 h-12 rounded-full"
              />
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 font-medium"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* REPO RESULTS */}
      {mode === "repos" && repoResults && (
        <ul className="space-y-3">
          {repoResults.items.map((repo) => (
            <li
              key={repo.id}
              className="border p-4 rounded"
            >
              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-500 font-medium"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-500">
                Owner: {repo.owner.login}
              </p>
              <p className="text-sm">
                ⭐ {repo.stargazers_count} · 🍴{" "}
                {repo.forks_count}
              </p>
            </li>
          ))}
        </ul>
      )}
    </AppLayout>
  );
}
