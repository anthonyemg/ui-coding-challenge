import { combineReducers } from 'redux';

const displayNameModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_NAME_MODAL':
      return action.payload;
    case 'HIDE_NAME_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const displayAddressModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_ADDRESS_MODAL':
      return action.payload;
    case 'HIDE_ADDRESS_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const displayFavoritesModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FAVORITES_MODAL':
      return action.payload;
    case 'HIDE_FAVORITES_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayNameModal,
  displayAddressModal,
  displayFavoritesModal
});

export default rootReducer;
