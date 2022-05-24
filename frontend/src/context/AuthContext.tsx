/* eslint-disable no-empty-pattern */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext } from 'react';

interface AuthContextState {
  name: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({}, children) => (
  <AuthContext.Provider value={{ name: 'Cleber' }}>
    {children}
  </AuthContext.Provider>
);
