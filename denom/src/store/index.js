// src/store/index.js
import { createStore } from 'redux';
import denominationReducer from './reducer/denominationReducer';

const store = createStore(denominationReducer);

export default store;

