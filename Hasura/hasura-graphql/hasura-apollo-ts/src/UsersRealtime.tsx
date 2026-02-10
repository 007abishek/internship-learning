import { gql, useSubscription } from "@apollo/client";

const USERS_SUBSCRIPTION = gql`
  subscription {
    users {
      id
      name
    }
  }
`;

export default function UsersRealtime() {
  const { data, loading, error } = useSubscription(USERS_SUBSCRIPTION);

  if (loading) return <p>Listening…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
