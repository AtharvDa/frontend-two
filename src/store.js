// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
