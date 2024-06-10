import React, { useState } from "react";

export default function SearchPictures({ setQuery }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='search' className='search-input' type='text' placeholder='Search...' value={value} onChange={e => setValue(e.target.value)} />
      <button className={`submit-btn ${value ? "active" : ""}`} type='submit' disabled={value ? false : true}>
        <svg height='32' width='32'>
          <path
            d='M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z'
            fill='#ffffff'
            fillRule='evenodd'
          ></path>
        </svg>
      </button>
    </form>
  );
}
