import { combineReducers } from 'redux';

const name = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.payload;
    default:
      return state;
  }
};

const displayNameModal = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NAME_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const address = (state = { line1: '', line2: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const displayAddressModal = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADDRESS_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return action.payload;
    default:
      return state;
  }
};

const displayFavoritesModal = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITES_MODAL':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  name,
  address,
  favorites,
  displayNameModal,
  displayAddressModal,
  displayFavoritesModal
});

export default rootReducer;
