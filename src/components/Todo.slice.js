import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

const name = 'TodoList';

const initialState = {
 todos: initialTodos
};

const todoSlice = createSlice({
  name,
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos = state.todos.concat(action.payload.todos);
    }
  },
});

const stateSelector = createSelector(
  (state) => state,
  (state) => {
    return state.todoReducer;
  },
);

const stateSelectorAll = (state) => state.todoReducer;

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

export const todoSelector = {
  stateSelector,
  stateSelectorAll,
};