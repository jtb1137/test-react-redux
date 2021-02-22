import React from 'react';
import { render } from '@testing-library/react';

import ListSelection from './ListSelection';

import { initialState } from '../ducks/groceries';

describe('ListSelection', () => {
  const props = {
    isItemSelected: initialState.isItemSelected,
    selectedItem: initialState.selectedItem,
    deselectItem: jest.fn()
  };

  it('renders correctly', () => {
    const { getByText } = render(<ListSelection {...props} />);

    expect(() => getByText('Bananas')).toThrow();
    expect(() => getByText('Deselect')).toThrow();
  });

  it('renders correctly when there is a selected item', () => {
    const { getByText } = render(
      <ListSelection
        {...props}
        isItemSelected={true}
        selectedItem={{
          id: 66,
          name: 'Bananas',
          category: 'Fruit',
          deliveryMethod: 'Air'
        }}
      />
    );

    getByText('Bananas');
  });
});
