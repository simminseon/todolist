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
  const [ todoText, setTodoText ] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const unDone = todos.filter((todo) => !todo.done);
  const openClick = () => {
    return setOpen(!open);
  };
  const onToggle = (item) => {
    const setDoneData = todos.map((todo) => {
      if(item.id === todo.id) {
        return { ...todo, done: !todo.done };
      } else {
        return { ...todo };
      }
    })
    setTodos(setDoneData);
  }
  const removeClick = (item) => {
    const setRemoveData = todos.filter((todo) => {
      return item.id !== todo.id;
    })
    setTodos(setRemoveData);
  }
  const onChange = (e) => {
    setTodoText(e.target.value)
  }
  const nextId = React.useRef(5);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    setTodos(todos.concat({
      id: nextId.current,
      text: todoText,
      done: false
    }))
    nextId.current += 1;
    setOpen(false);
    setTodoText('');
  }
  return (
    <TodoTemplate>
      <TodoHead unDone={unDone} />
      <TodoList todos={todos} onToggle={onToggle} removeClick={removeClick} />
      <TodoCreate onChange={onChange} onSubmit={onSubmit} openClick={openClick} open={open} />
    </TodoTemplate>
  );
};

// export default Todo;