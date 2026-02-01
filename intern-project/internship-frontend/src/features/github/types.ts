import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  GithubUser,
  GithubRepo,
  GithubUserSearchResponse,
  GithubRepoSearchResponse,
} from "./types";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    // 👤 Single user profile
    getUser: builder.query<GithubUser, string>({
      query: (username) => `users/${username}`,
    }),

    // 📦 User repositories
    getRepos: builder.query<GithubRepo[], string>({
      query: (username) =>
        `users/${username}/repos?sort=updated`,
    }),

    // 🔍 Search users
    searchUsers: builder.query<
      GithubUserSearchResponse,
      string
    >({
      query: (query) =>
        `search/users?q=${query}&per_page=10`,
    }),

    // 🔍 Search repositories (projects)
    searchRepos: builder.query<
      GithubRepoSearchResponse,
      string
    >({
      query: (query) =>
        `search/repositories?q=${query}&per_page=10`,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetReposQuery,
  useSearchUsersQuery,
  useSearchReposQuery,
} = githubApi;
