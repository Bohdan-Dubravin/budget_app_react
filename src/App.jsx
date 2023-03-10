import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Statistic from "./components/Statistic";
import Login from "./layouts/login/Login";
import Main from "./layouts/main/Main";
import Register from "./layouts/register/Register";
import ShowPage from "./layouts/ShowPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowPage />} />
      <Route path="/dash" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
