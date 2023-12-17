import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/Register/registerPage.jsx'
import Layout from './pages/Layout/Layout';
import CreateTravelPage, { CreateTravel } from './pages/CreateTravel/CreateTravelPage';
import { checkIfLogged } from './api/auth';
import TravelPage from './pages/MyTravels/MyTravelsPage';


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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="create-travel" element={<CreateTravelPage />} />
          <Route path="travel-page" element={<TravelPage />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
