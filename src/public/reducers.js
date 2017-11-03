import { combineReducers } from 'redux';

const displayModal = (state = false, action) => {
  console.log(action);
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.payload;
    case 'HIDE_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayModal
});

export default rootReducer;
