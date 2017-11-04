import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/public/reducers';

const store = createStore(reducer);

const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
