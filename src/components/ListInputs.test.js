import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ListInputs from './ListInputs';

describe('ListInputs', () => {
  const props = {
    addItem: jest.fn()
  };

  it('renders correctly', () => {
    const { getByText } = render(<ListInputs {...props} />);

    getByText('Add Random Item');
  });

  it('handles adding an item', () => {
    const { getByText } = render(<ListInputs {...props} />);

    const addButton = getByText('Add Random Item');

    fireEvent.click(addButton);

    expect(props.addItem).toHaveBeenCalledWith({
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground'
    });
  });
});
