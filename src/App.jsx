import LandingPage from "./components/LandingPage";
import Signup from "./components/SignUp";
import Signin from "./components/Signin";
import {Routes, Route} from "react-router-dom";


function App() {
  

  return (
    <>
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="signup" element={<Signup/>}/>
        <Route path ="signin" element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App;
