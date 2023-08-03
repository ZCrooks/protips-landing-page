// SIGNIN FORM
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react"; 
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import AuthDetails from "./AuthDetails";
    
const Signin = () => { 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => { 
                alert("User not found. Try Again!")
            })
            navigate('/')
        }

    return (
        <div className="wrapper">
            <Header/>
            <AuthDetails />
            <form 
                method="POST" 
                name="signInForm" 
                className="form"
                onSubmit={handleSignIn} >
                
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

                <button className="form-btn" type="submit">LOG IN</button>
            </form>
        </div>
        
    )
}

export default Signin;