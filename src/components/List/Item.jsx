import React, { useState } from 'react';

export default function Item({ id, product, handleEdit, handleDelete }) {
  const [editable, setEditable] = useState(false);
  const [edited, setEdited] = useState(product);

  const onEdit = () => {
    handleEdit(id, edited);
    setEditable(false);
  };

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div key={id}>
      {editable ? (
        <>
          <input
            value={edited}
            onChange={({ target }) => setEdited(target.value)}
          ></input>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      ) : (
        <>
          <div>{product}</div>
          <button onClick={() => setEditable(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
