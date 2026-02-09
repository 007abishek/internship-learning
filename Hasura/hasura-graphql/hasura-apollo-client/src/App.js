import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const TEST_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(TEST_QUERY, {
    fetchPolicy: "network-only"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
