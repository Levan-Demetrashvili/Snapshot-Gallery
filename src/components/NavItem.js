import React from "react";

export default function NavItem({ text }) {
  return (
    <li>
      <a href={`#/SnapScout/${text}`}>{text}</a>
    </li>
  );
}
