import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ListTable from './ListTable';

import { initialState } from '../ducks/groceries';

describe('ListTable', () => {
  const props = {
    groceryList: initialState.list,
    deselectItem: jest.fn(),
    removeItem: jest.fn(),
    selectItem: jest.fn()
  };

  it('renders correctly', () => {
    const { getByText, getAllByText } = render(<ListTable {...props} />);

    getByText('Bananas');
    getByText('16');
    getByText('Vegitable');
    expect(getAllByText('Remove')).toHaveLength(5);
  });

  it('handles removing an item', () => {
    const { getAllByText } = render(<ListTable {...props} />);

    const removeButton = getAllByText('Remove')[2];

    fireEvent.click(removeButton);

    expect(props.removeItem).toHaveBeenCalledWith(1);
  });
});
