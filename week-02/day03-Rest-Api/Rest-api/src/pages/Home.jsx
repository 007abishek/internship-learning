// src/pages/Home.jsx
import useUsers from "../hooks/useUsers";
import UserList from "../components/UserList";


const Home = () => {
  const { users, loading } = useUsers();

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default Home;
