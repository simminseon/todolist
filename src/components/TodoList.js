import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export function TodoList({ onToggle, removeClick, todos }) {
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem key={todo.id} text={todo.text} done={todo.done} onToggle={() => onToggle(todo)} removeClick={() => removeClick(todo)} />
      ))}
    </TodoListBlock>
  );
} 

// export default TodoList;