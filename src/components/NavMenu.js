import React from "react";
import NavItem from "./NavItem";

const tags = ["Mountain", "Beaches", "Birds", "Food"];

export default function NavMenu(props) {
  return (
    <nav>
      <ul>
        {tags.map(tag => (
          <NavItem key={Math.random() * 1000} text={tag} {...props} />
        ))}
      </ul>
    </nav>
  );
}
