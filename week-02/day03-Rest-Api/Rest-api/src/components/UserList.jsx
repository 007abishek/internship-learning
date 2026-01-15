const UserList = ({ users, loading }) => {
    if (loading) return <p>Loading users...</p>;
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserList;
  