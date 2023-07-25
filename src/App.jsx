import LandingPage from "./components/LandingPage";
import Signup from "./components/SignUp";
import {Routes, Route} from "react-router-dom";


function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path ="/signupPage" element={<Signup/>}/>
      </Routes>
      
    </>
  )
}

export default App;
