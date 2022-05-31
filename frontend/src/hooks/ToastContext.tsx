/* eslint-disable react/prop-types */
import { createContext, ReactNode, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface BaseToastProvider {
  children?: ReactNode;
}

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<BaseToastProvider> = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('Toast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
export { ToastProvider, useToast };
