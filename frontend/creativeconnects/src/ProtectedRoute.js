import React from 'react';
<<<<<<< HEAD
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
=======
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    // Redirect to login and prevent forward-back trick
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
};

export default ProtectedRoute;
