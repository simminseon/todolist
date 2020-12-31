import React from 'react';
import Redux from 'react-redux';

import { TodoCreate } from './TodoCreate';
import { TodoHead } from './TodoHead';
import { TodoList } from './TodoList';
import { TodoTemplate } from './TodoTemplate';

import { todoAction, todoSelector } from './Todo.slice';

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


export function Todo() {
  // const dispatch = Redux.useDispatch();
  // const stateSelector = Redux.useSelector(todoSelector.stateSelector);
  // const { todos } = stateSelector;
  const [ todos, setTodos ] = React.useState(initialTodos);
  const unDone = todos.filter((todo) => !todo.done);
  const onToggle = () => {
    // const setDoneData = todos.map((todo) => {
    //   if(todo.done) {
    //     return { ...todo }
    //   }
    // })
    // setTodos(setDoneData);
    console.log('test')
  }
  console.log(todos)
  return (
    <TodoTemplate>
      <TodoHead unDone={unDone} />
      <TodoList todos={todos} onToggle={onToggle} />
      <TodoCreate />
    </TodoTemplate>
  );
};

// export default Todo;