// App.tsx
import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyled from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyled />
  </>
);

export default App;
