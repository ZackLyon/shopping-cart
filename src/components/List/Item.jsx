import React, { useState } from 'react';

export default function Item({ id, product, handleEdit }) {
  const [editable, setEditable] = useState(false);
  const [edited, setEdited] = useState(product);

  const onEdit = () => {
    handleEdit(id, edited);
    setEditable(false);
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
        </>
      ) : (
        <>
          <div>{product}</div>
          <button onClick={() => setEditable(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
