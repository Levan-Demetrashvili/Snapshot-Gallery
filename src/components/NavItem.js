import React from "react";

export default function NavItem({ text, setQuery }) {
  return (
    <li>
      <button
        onClick={() => {
          setQuery(text);
          localStorage.setItem("query", text);
        }}
      >
        {text}
      </button>
    </li>
  );
}
