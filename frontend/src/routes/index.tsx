import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './routes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashbord';

const RoutesFunction: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default RoutesFunction;
