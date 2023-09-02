// SIGNUP FORM 
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const SignUp = ({ setSignedIn, signedIn, handleGoogle }) => {
    // Set Email, Password, and Name States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // User SignUp Submission
    const handleSignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Set display name for the user
                updateProfile(user, {
                    displayName: name,
                }) 
                    .then(() => {
                        // Send Email verification
                       sendEmailVerification(user)
                        .then(() => {
                            setSignedIn(true);
                        })
                    }) .catch((error) => {
                        alert(error);
                    });
                })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
        // Reset Fields
        setEmail("");
        setPassword("");
    };

    return (
    <div className="wrapper">
        <form 
            method="POST" 
            name="signUpForm" 
            className="form signUp"
            onSubmit={handleSignUp}  >

            {signedIn ? <h3>Welcome to Protips! Please check your inbox for a verification e-mail.</h3> : null}
            <h2>SIGN UP</h2>
            <p>Create a free account now!</p>

            <input 
                className="form-input" 
                type="text" id="firstName" 
                name="firstName" 
                placeholder="First name"
                onChange={(e) => setName(e.target.value)}
                aria-label="First name" />

            <input 
                className="form-input" 
                type="text" id="lastName" 
                name="lastName" 
                placeholder="Last name" 
                aria-label="Last name"/>

            <input 
                className="form-input" 
                type="email" 
                name="userEmailSignUp" 
                id="userEmailSignUp" 
                placeholder="Email" 
                aria-label="Email"
                onChange={(e) => setEmail(e.target.value)} />

            <input 
                className="form-input" 
                type="text" 
                placeholder="Date of Birth" 
                onFocus={(e) => (e.target.type = "date")} 
                onBlur={(e) => (e.target.type = "text")}
                name="userBirthDate" 
                id="userBirthDate"  
                aria-label="Date of Birth" />

            <input 
                className="form-input" 
                type="tel" 
                id="userPhone" 
                name="userPhone" 
                placeholder="Phone number" 
                aria-label="Phone number" />

            <input 
                className="form-input" 
                type="password" 
                id="userPasswordSignUp" 
                name="userPasswordSignUp" 
                placeholder="Password" 
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)} />

            <button className="form-btn" type="submit">SIGN UP</button>
            <button className="form-btn" onClick={handleGoogle}>SIGN UP WITH <strong>GOOGLE</strong></button>
        </form>
    </div>
    )
}

export default SignUp;
