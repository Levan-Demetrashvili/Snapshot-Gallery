import React from "react";
import { getImages } from "../helper";
import { API_KEY, API_URL, IMG_PER_PAGE } from "../config";

export default function Gallery() {
  return (
    <div className='gallery'>
      <h2>Mountain Images</h2>;
      <div className='photos'>
        <ul></ul>
      </div>
    </div>
  );
}
