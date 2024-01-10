import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Onboarding from "./Componentes/Onboarding";
import Register from "./Componentes/Register";
import Login from "./Componentes/Login";
import MyProfile from "./Componentes/MyProfile";
import HomePage from "./Componentes/HomePage";
import WriterProfile from "./Componentes/WriterProfile";
import Navbar from "./Componentes/Navbar";

function App() {
  const { pathname } = useLocation()
  console.log(pathname)
  const NO_NAVBAR = ['/onboarding', '/login', '/register']
  return (
    <main>
      <Routes>
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="MyProfile" element={<MyProfile />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="WriterProfile" element={<WriterProfile />} />
      </Routes>
      {NO_NAVBAR.includes(pathname) ? <></> : <Navbar />}
    </main>
  );
}

export default App;
