import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ListContainerRedux from './ListContainer';

import { initialState } from '../ducks/groceries/index';

describe('ListContainer', () => {
  const store = configureStore()({ groceries: { ...initialState } });

  it('renders correctly', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <ListContainerRedux />
      </Provider>
    );

    expect(getAllByText('Select')).toHaveLength(5);
  });
});
