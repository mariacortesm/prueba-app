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
  const { pathname } = useLocation();
  console.log(pathname);
  const NO_NAVBAR = ["/", "/login", "/register"];
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="writerProfile" element={<WriterProfile />} />
      </Routes>
      {NO_NAVBAR.includes(pathname) ? <></> : <Navbar />}
    </>
  );
}

export default App;
