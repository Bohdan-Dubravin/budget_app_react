import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Statistic from "./components/Statistic";
import Login from "./layouts/login/Login";
import Main from "./layouts/main/Main";
import Register from "./layouts/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
