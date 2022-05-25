/* eslint-disable react/jsx-no-constructed-context-values */
// App.tsx
import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyled from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyled />
  </>
);

export default App;
