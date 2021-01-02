import React from 'react';
// import Redux from 'react-redux';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from './app/store';

import { Todo } from './components/Todo';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Todo />
    </Provider>
  );
}

export default App;
