import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from './ShoppingList.jsx';

beforeEach(() =>
  render(
    <React.StrictMode>
      {' '}
      <ShoppingList />
    </React.StrictMode>
  )
);

it('should add an item when new item is submitted', () => {
  userEvent.type(screen.getByLabelText('add item'), 'wonky test item');
  userEvent.click(screen.getByLabelText('submit button'));

  const testItem = screen.getByText('wonky test item');

  expect(testItem).toBeInTheDocument;
});

it('should edit an item when edit button is pressed, new info entered, then save button pressed', () => {
  const coffeeItem = screen.getByText('coffee');

  expect(coffeeItem).toBeInTheDocument;

  userEvent.click(screen.getByLabelText('edit button'));
  userEvent.type(
    screen.getByLabelText('edit item'),
    '{selectall}{delete}gadzooks'
  );
  userEvent.click(screen.getByLabelText('save button'));

  const gadzooksItem = screen.getByText('gadzooks');

  expect(gadzooksItem).toBeInTheDocument;

  expect(screen.queryByText('coffee')).toBeNull;
});

it('should delete an item when delete button is pressed', () => {
  const coffeeItem = screen.getByText('coffee');

  expect(coffeeItem).toBeInTheDocument;

  userEvent.click(screen.getByLabelText('delete button'));

  expect(screen.queryByText('coffee')).toBeNull;
});

it('should display a list of items', () => {
  userEvent.type(screen.getByLabelText('add item'), 'multiple');
  userEvent.click(screen.getByLabelText('submit button'));

  userEvent.type(screen.getByLabelText('add item'), 'items');
  userEvent.click(screen.getByLabelText('submit button'));

  userEvent.type(screen.getByLabelText('add item'), 'displaying');
  userEvent.click(screen.getByLabelText('submit button'));

  const multipleItem = `<div>${screen.getByText('multiple')}</div>`;
  const itemsItem = `<div>${screen.getByText('items')}</div>`;
  const displayingItem = `<div>${screen.getByText('displaying')}</div>`;

  expect(multipleItem).toBeInTheDocument;
  expect(itemsItem).toBeInTheDocument;
  expect(displayingItem).toBeInTheDocument;
});
