import React from 'react';
import Item from './Item.jsx';

export default function List({ list, handleEdit }) {
  console.log(list);
  return (
    <div>
      {list.map(({ id, product }) => (
        <Item key={id} {...{ id, product, handleEdit }} />
      ))}
    </div>
  );
}
