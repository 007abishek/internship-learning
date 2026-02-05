import { createContext, useContext } from "react";

const UserContext = createContext("Guest");

export default function UseContext() {
  return (
    <UserContext.Provider value="Abhishek">
      <User />
    </UserContext.Provider>
  );
}

function User() {
  const user = useContext(UserContext);
  return <p>{user}</p>;
}
