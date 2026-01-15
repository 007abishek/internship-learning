import { useEffect, useState } from "react";
import { fetchUsers } from "../api/userApi";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("API call started");

    fetchUsers()
      .then((response) => {
        console.log("API response:", response.data); // 👈 VERY IMPORTANT
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  return { users, loading };
};

export default useUsers;
