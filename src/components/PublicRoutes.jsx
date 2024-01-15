import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
    const user = localStorage.getItem('token');

    if (user) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};
