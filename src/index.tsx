import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app';
import store from './redux-store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

const getRootDiv = () => {
  const rootId = 'root';
  let root = document.getElementById(rootId);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', rootId);
    document.append(root);
  }

  return root;
};

const root = ReactDOM.createRoot(getRootDiv());

const WrappedApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

root.render(<WrappedApp />);
