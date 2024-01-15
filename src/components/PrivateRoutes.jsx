import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
    const user = localStorage.getItem('token');
    console.log(user, "aqui")
    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
}; 