/* eslint-disable no-empty-pattern */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode } from 'react';

interface AuthContextState {
  name: string;
}

interface BaseLayoutProps {
  children?: ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC<BaseLayoutProps> = ({ children }) => (
  <AuthContext.Provider value={{ name: 'Cleber' }}>
    {children}
  </AuthContext.Provider>
);
