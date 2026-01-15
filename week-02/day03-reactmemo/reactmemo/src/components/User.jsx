import React from "react";

const User = ({ name }) => {
  console.log("User component rendered");
  return <h2>User: {name}</h2>;
};

// Prevent re-render if `name` prop is same
export default React.memo(User);
