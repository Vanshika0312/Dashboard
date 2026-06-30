import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If user does not have permission, redirect to their home dashboard
    return <Navigate to={user.role === 'admin' ? '/admin' : '/'} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
