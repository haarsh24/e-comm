import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext';
const PrivateRoute = () => {
    const { authState:{isLogin} } = useAuth();
    return (
        (isLogin ? <Outlet /> : <Navigate to="/login" />)
    )
}
export { PrivateRoute }