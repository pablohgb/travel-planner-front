import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
    const user = localStorage.getItem('token');
    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
}; 