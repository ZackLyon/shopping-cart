import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import AddItem from '../../components/AddItem/AddItem';
import List from '../../components/List/List';

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
      console.log(id, type, product);
      const productIndex = list.findIndex((item) => item.id === id);
      console.log(productIndex);
      return list.map((item, index) => {
        console.log(index);
        return productIndex === index ? { id, type, product } : item;
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

  return (
    <div>
      <h1>Grocery List</h1>
      <AddItem {...{ handleAdd }} />
      <List {...{ list, handleEdit }} />
    </div>
  );
}
