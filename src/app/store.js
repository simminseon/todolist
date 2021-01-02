import {
  configureStore,
  combineReducers, // redux의 그것과 같다.
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { todoReducer } from '../components/Todo.slice';

const rootReducer = combineReducers({
  todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
