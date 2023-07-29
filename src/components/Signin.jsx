// SIGNIN FORM
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    
    return (
        <div className="wrapper">
            <Header/>
            <form 
                method="POST" 
                name="signInForm" 
                className="form"
                onSubmit={handleSignIn} >
                
                <h2>LOGIN</h2>
                <p>Please use this form to Sign In as an existing user!</p>
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

                <button className="form-btn" type="submit">LOG IN</button>
            </form>
        </div>
        
    )
}

export default Signin;