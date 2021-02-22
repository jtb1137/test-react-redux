const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air'
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air'
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground'
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground'
    }
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: ''
  }
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, payload]
      };

    case REMOVE_ITEM:
      return {
        ...state,
        // .filter() will remove all instances of that ID
        // list: state.list.filter((item) => item.id !== payload)
        list: [
          ...state.list.slice(0, payload),
          ...state.list.slice(payload + 1)
        ]
      };

    case SELECT_ITEM:
      return {
        ...state,
        isItemSelected: true,
        selectedItem: payload
      };

    case DESELECT_ITEM: {
      // Prevent unrelated item deselect actions from removing the selected item
      if (payload !== state.selectedItem.id) {
        return state;
      }

      return {
        ...state,
        isItemSelected: false,
        selectedItem: {
          id: 0,
          name: '',
          category: '',
          deliveryMethod: ''
        }
      };
    }

    default:
      return state;
  }
}

// Action Creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index
});

export const selectItem = (item) => ({
  type: SELECT_ITEM,
  payload: item
});

export const deselectItem = (id) => ({
  type: DESELECT_ITEM,
  payload: id
});
