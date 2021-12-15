import React, { useState } from 'react';

export default function AddItem({ handleAdd }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(item);
    setItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={({ target }) => setItem(target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
