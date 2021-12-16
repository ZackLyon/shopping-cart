import React, { useState } from 'react';
import style from './Item.css';

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
        <div className={style.productContainer}>
          <input
            aria-label="edit item"
            value={edited}
            onChange={({ target }) => setEdited(target.value)}
          ></input>
          <div>
            <button aria-label="save button" onClick={onEdit}>
              Save
            </button>
            <button aria-label="delete button" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className={style.productContainer}>
          <div>{product}</div>
          <div>
            <button aria-label="edit button" onClick={() => setEditable(true)}>
              Edit
            </button>
            <button aria-label="delete button" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
