import React from 'react';
import Item from './Item.jsx';
import './List.css';

export default function List({ list, handleEdit, handleDelete }) {
  return (
    <section>
      {list.map(({ id, product }) => (
        <Item key={id} {...{ id, product, handleEdit, handleDelete }} />
      ))}
    </section>
  );
}
