import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListSelection = (props) => {
  const {
    deselectItem,
    isItemSelected,
    selectedItem: { category, deliveryMethod, id, name }
  } = props;

  return (
    <div className="listSelection">
      {isItemSelected && (
        <Fragment>
          <h2>{name}</h2>
          <p>{id}</p>
          <p>{category}</p>
          <p>{deliveryMethod}</p>
          <button onClick={() => deselectItem(id)}>Deselect</button>
        </Fragment>
      )}
    </div>
  );
};

ListSelection.propTypes = {
  // Props
  isItemSelected: PropTypes.bool.isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    deliveryMethod: PropTypes.string
  }),
  // Actions
  deselectItem: PropTypes.func.isRequired
};

export default ListSelection;
