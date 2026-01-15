import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  const [incrementor, setIncrementor] = useState(1);

  useEffect(() => {
    setItems(getItems(incrementor));
  }, [getItems, incrementor]);

  return (
    <div>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(parseInt(e.target.value))}
      />

      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default List;
