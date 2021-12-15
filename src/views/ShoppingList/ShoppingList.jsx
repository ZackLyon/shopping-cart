import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import AddItem from '../../components/AddItem/AddItem';
import List from '../../components/List/List';

const initialList = [
  {
    id: '001',
    item: 'coffee',
    completed: false,
  },
];

const listReducer = (list, action) => {
  const { id, type, product } = action;

  switch (type) {
    case 'add': {
      return [...list, { id, product, completed: false }];
    }
    default:
      throw Error(`Apologies, customer, ${type} is not allowed.`);
  }
};

export default function ShoppingList() {
  const [list, dispatch] = useReducer(listReducer, initialList);

  const handleAdd = (product) => {
    console.log(product);
    dispatch({
      id: nanoid(3),
      type: 'add',
      product,
    });
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <AddItem {...{ handleAdd }} />
      <List {...{ list }} />
    </div>
  );
}
