/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useContext,
} from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface BaseLayoutProps {
  children?: ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

interface AuthState {
  token: string;
  user: object;
}

const AuthProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
