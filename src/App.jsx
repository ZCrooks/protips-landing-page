import LandingPage from "./components/LandingPage";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  
  // State for handling User Signedin Status
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
    <Header signedIn={signedIn} setSignedIn={setSignedIn} />
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="signup" element={<SignUp setSignedIn={setSignedIn} signedIn={signedIn}/>}/>
        <Route path ="signin" element={<SignIn setSignedIn={setSignedIn}/>}/>
      </Routes>
    </>
  )
}

export default App;
