// SIGNIN FORM
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react"; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../firebase";
import AuthDetails from "./AuthDetails";
    
const SignIn = ({ setSignedIn, handleGoogle }) => { 

    // Initialize State variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // User Signin Function upon form submission
    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/")
                setSignedIn(true);
            })
            .catch((error) => { 
                alert("User not found. Try Again!")
            })
        }

    return (
        <div className="wrapper">
            <AuthDetails />
            <form 
                method="POST" 
                name="signInForm" 
                className="form"
                onSubmit={handleSignIn}
                 >
                
                <h2>LOGIN</h2>
                <p>Please use this form to Sign in you already have an account!</p>
                <Link to="/signup">Don't have an account yet? Click to create.</Link>

                <input 
                    className="form-input" 
                    type="email" 
                    name="userEmailSignIn" 
                    id="userEmailSignIn" 
                    placeholder="Email" 
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input 
                    className="form-input" 
                    type="password" 
                    id="userPasswordSignIn" 
                    name="userPasswordSignIn" 
                    placeholder="Password" 
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button className="form-btn" type="submit">LOGIN</button>
                <button className="form-btn" onClick={handleGoogle}>SIGN IN WITH <strong>GOOGLE</strong></button>
            </form>
        </div>
        
    )
}

export default SignIn;