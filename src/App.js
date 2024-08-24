import { Route, Routes } from "react-router-dom";

import Home from "./components/DashoboardComp/Home";
import Signup from "./components/Authentication/SignUp";
import LogIn from "./components/Authentication/Log_In";
import SetupAuth from "./components/SetupAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setupauth" element={<SetupAuth />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Log_In" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
