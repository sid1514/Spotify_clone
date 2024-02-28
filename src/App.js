import Home from "./components/Home";
import Test from "./test";
import { Route,Routes } from "react-router-dom";
import Signup from "./components/SignUp";
import LogIn from "./components/Log_In";

function App() {
  return (
    <>
   
    
           <Test/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignUp' element={<Signup/>}/>
            <Route path='/Log_In' element={<LogIn/>}/>
    </Routes>
   
    </>
  );
}

export default App;
