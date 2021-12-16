import React, { useState } from 'react';

import './AddItem.css';

export default function AddItem({ handleAdd }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(item);
    setItem('');
  };

  return (
    <section>
      <h1>Add Item:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="add item"
          value={item}
          onChange={({ target }) => setItem(target.value)}
        />
        <button aria-label="submit button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
