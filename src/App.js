import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/Register/registerPage.jsx'
import Layout from './pages/Layout/Layout';
import { CreateTravel } from './pages/CreateTravel/CreateTravel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="create-travel" element={<CreateTravel />} />

          {/* <Route path="create-travel" element={<CreateTravelPage />} /> */}

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
