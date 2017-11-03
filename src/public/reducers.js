import { combineReducers } from 'redux';

const name = (state = 'Anthony G', action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.payload;
    default:
      return state;
  }
};

const address = (state = { line1: '123 W Ave', line2: 'NY, NY 10000' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      return { ...state, ...action.payload };
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
  name,
  address,
  favorites,
  displayNameModal,
  displayAddressModal,
  displayFavoritesModal
});

export default rootReducer;
