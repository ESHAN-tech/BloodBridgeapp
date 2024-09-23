import { BrowserRouter as Blooder , Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Home from "./component/Home";
import AllDoner from "./component/AllDoner";
import Registrationtwo from "./component/Registrationtwo";
import Login from "./component/Login";

function App() {
  return (
    <>
     <Blooder>
     
     <Navigation/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/Regi" element={<Registrationtwo/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/AllDoner" element={<AllDoner/>}/>
      </Routes>
    </Blooder>

     
    </>
  )
}

export default App
