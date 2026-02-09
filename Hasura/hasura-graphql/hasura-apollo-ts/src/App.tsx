import { gql, useQuery } from "@apollo/client";

interface User {
  id: number;
  name: string;
}

interface GetUsersResponse {
  users: User[];
}

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery<GetUsersResponse>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
