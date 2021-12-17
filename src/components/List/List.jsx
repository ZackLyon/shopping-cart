import React from 'react';
import Item from './Item.jsx';
import './List.css';

export default function List({
  list,
  handleEdit,
  handleDelete,
  handleCompleted,
}) {
  return (
    <section>
      {list.map(({ id, completed, product }) => (
        <Item
          key={id}
          {...{
            id,
            completed,
            product,
            handleEdit,
            handleDelete,
            handleCompleted,
          }}
        />
      ))}
    </section>
  );
}
