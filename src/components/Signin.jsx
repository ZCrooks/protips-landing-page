// SIGNIN FORM
import Header from "./Header";
import { Link } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Signin = () => {

    return (
        <div className="wrapper">
            <Header/>
            <form 
                action="" 
                method="POST" 
                name="signInForm" className="form" >
            
                <h2>LOGIN</h2>
                <p>Please use this form to Sign In as an existing user!</p>
                <Link to="/signup">Don't have an account yet? Click to create.</Link>

                <input className="form-input" type="email" name="userEmailSignIn" id="userEmailSignIn" placeholder="Email" aria-label="Email" />

                <input className="form-input" type="password" id="userPasswordSignIn" name="userPasswordSignIn" placeholder="Password" aria-label="Password" />

                <button className="form-btn" type="submit">LOGIN</button>
            </form>
        </div>
        
    )
}

export default Signin;