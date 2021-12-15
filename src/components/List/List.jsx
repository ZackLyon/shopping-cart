import React from 'react';

export default function List({ list }) {
  console.log(list);
  return (
    <div>
      {list.map(({ id, product }) => (
        <div key={id}>{product}</div>
      ))}
    </div>
  );
}
