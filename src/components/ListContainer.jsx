import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addItem,
  deselectItem,
  removeItem,
  selectItem
} from '../ducks/groceries';

import ListInputs from './ListInputs';
import ListSelection from './ListSelection';
import ListTable from './ListTable';

const mapStateToProps = ({
  groceries: { isItemSelected, list: groceryList, selectedItem }
}) => ({
  isItemSelected,
  groceryList,
  selectedItem
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addItem,
      deselectItem,
      removeItem,
      selectItem
    },
    dispatch
  );

const ListContainer = (props) => {
  const {
    isItemSelected,
    groceryList,
    selectedItem,
    // actions
    addItem,
    deselectItem,
    removeItem,
    selectItem
  } = props;

  useEffect(() => {
    console.log('groceryList :>> ', props.groceryList);
  }, [props]);

  return (
    <section className="groceryApp">
      <div className="listInputs">
        <ListInputs addItem={addItem} />
      </div>
      <div className="types">
        <ListSelection
          isItemSelected={isItemSelected}
          selectedItem={selectedItem}
          deselectItem={deselectItem}
        />
        <ListTable
          groceryList={groceryList}
          deselectItem={deselectItem}
          removeItem={removeItem}
          selectItem={selectItem}
        />
      </div>
    </section>
  );
};

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
