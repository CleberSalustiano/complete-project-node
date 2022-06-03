/* eslint-disable react/jsx-no-constructed-context-values */
// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>

    <GlobalStyled />
  </>
);

export default App;
