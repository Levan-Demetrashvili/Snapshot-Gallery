import React from "react";

export default function Photo({ url, description }) {
  return (
    <li>
      <img src={url} alt={description} />
    </li>
  );
}
