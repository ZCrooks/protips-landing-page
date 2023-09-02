import LandingPage from "./components/LandingPage";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import {Routes, Route} from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "./firebase";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  // State for handling User Signedin Status
  const [signedIn, setSignedIn] = useState(false);

  // User Signin Function using Google Authentication
    const handleGoogle = async (e) => {
        e.preventDefault()
        const provider =  new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            // Check if user exists and update state accordingly
            if (user) {
                setSignedIn(true);
            } else {
                // Handle the case where user is not available even after successful sign-in
                alert ('User not available after successful sign-in');
            }
        } catch (error) {
            // Handle sign-in error here
            alert('Error signing in with Google:', error);
        }
    }

  return (
    <>
    <Header signedIn={signedIn} setSignedIn={setSignedIn} />
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="signup" element={<SignUp setSignedIn={setSignedIn} signedIn={signedIn} handleGoogle={handleGoogle}/>}/>
        <Route path ="signin" element={<SignIn setSignedIn={setSignedIn} handleGoogle={handleGoogle}/>}/>
      </Routes>
    </>
  )
}

export default App;
