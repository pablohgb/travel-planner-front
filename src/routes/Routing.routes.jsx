import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../components/PrivateRoutes';
import { PublicRoutes } from '../components/PublicRoutes';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/Register/registerPage';
import CreateTravelPage from '../pages/CreateTravel/CreateTravelPage';
import Layout from '../pages/Layout/Layout';
import TravelPage from '../pages/MyTravels/MyTravelsPage';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    {/* <Route path="/" element={<Layout />}> */}

                    <Route index element={<TravelPage />} />
                    <Route path="/create-travel" element={<CreateTravelPage />} />
                    {/* </Route> */}
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
