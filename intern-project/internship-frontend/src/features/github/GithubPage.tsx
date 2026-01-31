import { useGetUserQuery } from "./githubApi";

export default function GithubPage() {
  const { data } = useGetUserQuery("octocat");

  return (
    <div className="p-6">
      <h1>{data?.login}</h1>
      <img src={data?.avatar_url} width={100} />
    </div>
  );
}
