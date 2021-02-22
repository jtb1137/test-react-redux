import React from 'react';
import PropTypes from 'prop-types';

export const ListTable = (props) => {
  const { groceryList, deselectItem, removeItem, selectItem } = props;

  return (
    <div className="listTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Category</th>
            <th>Delivery Method</th>
            <th>Remove</th>
            <th>Select</th>
            <th>Deselect</th>
          </tr>
        </thead>
        <tbody>
          {groceryList.map((item, index) => {
            const { category, deliveryMethod, id, name } = item;

            return (
              <tr key={`item-${index}-${id}`}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{deliveryMethod}</td>
                <td>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </td>
                <td>
                  <button onClick={() => selectItem(item)}>Select</button>
                </td>
                <td>
                  <button onClick={() => deselectItem(id)}>Deselect</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

ListTable.propTypes = {
  // Props
  groceryList: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      deliveryMethod: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  // Actions
  deselectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired
};

export default ListTable;
