import { useParams } from "react-router-dom";
import type React from "react";

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <h2>User ID: {id ?? "unknown"}</h2>;
};

export default User;
