import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import AddItem from '../../components/AddItem/AddItem';
import List from '../../components/List/List';
import './ShoppingList.css';

const initialList = [
  {
    id: '001',
    product: 'coffee',
    completed: false,
  },
];

const listReducer = (list, action) => {
  const { id, type, product } = action;

  switch (type) {
    case 'add': {
      return [...list, { id, product, completed: false }];
    }
    case 'edit': {
      const productIndex = list.findIndex((item) => item.id === id);

      return list.map((item, index) =>
        productIndex === index
          ? { id, completed: item.completed, product }
          : item
      );
    }
    case 'delete': {
      const productIndex = list.findIndex((item) => item.id === id);

      return list.filter((_, index) => productIndex !== index);
    }
    case 'completed': {
      const productIndex = list.findIndex((item) => item.id === id);

      return list.map((item, index) => {
        console.log(!item.completed);
        return productIndex === index
          ? { id, product: item.product, completed: !item.completed }
          : item;
      });
    }
    default:
      throw Error(`Apologies, customer, ${type} is not allowed.`);
  }
};

export default function ShoppingList() {
  const [list, dispatch] = useReducer(listReducer, initialList);

  const handleAdd = (product) => {
    dispatch({
      id: nanoid(3),
      type: 'add',
      product,
    });
  };

  const handleEdit = (id, product) => {
    dispatch({
      id,
      type: 'edit',
      product,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      id,
      type: 'delete',
    });
  };

  const handleCompleted = (id) => {
    dispatch({
      id,
      type: 'completed',
    });
  };

  return (
    <div>
      <header>Grocery List</header>
      <main>
        <AddItem {...{ handleAdd }} />
        <List {...{ list, handleEdit, handleDelete, handleCompleted }} />
      </main>
    </div>
  );
}
