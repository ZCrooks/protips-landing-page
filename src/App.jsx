import LandingPage from "./components/LandingPage";
import Signup from "./components/SignUp";
import Signin from "./components/Signin";
import {Routes, Route} from "react-router-dom";
import AuthDetails from "./components/AuthDetails";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
    <Header signedIn={signedIn} setSignedIn={setSignedIn} />
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="signup" element={<Signup/>}/>
        <Route path ="signin" element={<Signin setSignedIn={setSignedIn}/>}/>
      </Routes>
    </>
  )
}

export default App;
