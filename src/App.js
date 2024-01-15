import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/Register/registerPage.jsx'
import Layout from './pages/Layout/Layout';
import CreateTravelPage from './pages/CreateTravel/CreateTravelPage';
import TravelPage from './pages/MyTravels/MyTravelsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Layout />}>

            <Route index element={<TravelPage />} />
            <Route path="create-travel" element={<CreateTravelPage />} />
          </Route>
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

        </Route>
      </Routes>
    </BrowserRouter>);
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       checkIfLogged() ? (
//         <MyTravelsPage {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<LoginPage />} />
//           <Route path="register" element={<RegisterPage />} />
//           <Route path="create-travel" element={<CreateTravelPage />} />
//           <Route path="travel-page" element={<TravelPage />} />

//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
