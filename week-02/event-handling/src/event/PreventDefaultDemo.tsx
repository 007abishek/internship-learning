import React from "react";

const PreventDefaultDemo = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Form submitted without reload!");
  };

  return (
    <div>
      <h2>preventDefault</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PreventDefaultDemo;
