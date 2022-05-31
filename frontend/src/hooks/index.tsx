import React from 'react';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

interface BaseAppProvider {
  children?: React.ReactNode;
}

const AppProvider: React.FC<BaseAppProvider> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
