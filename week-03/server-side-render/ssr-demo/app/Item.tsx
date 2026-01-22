"use client";
import { useState } from "react";
type Props = {
  title: string;
  image: string;
};
export default function Item({ title, image }: Props) {
  const [big, setBig] = useState(false);
  return (
    <div style={{ marginBottom: 30 }}>
      <h2>{title}</h2>
      <img
        src={image}
        width={big ? 500 : 100}
        alt={title}
      />
      <br />
      <button onClick={() => setBig(!big)}>
        Show Big Picture
      </button>
    </div>
  );
}


