// SIGNUP FORM 
import Header from "./Header";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

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
                    console.log("Updated successfuly", name)
                    }) .catch((error) => {
                    console.log("Error updating user profile:", error);
                    });
                    console.log("User object with updated display name:", user);
                })
                
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
        setEmail("");
        setPassword("");
    };

    return (
    <div className="wrapper">
        <Header />
        <form 
            method="POST" 
            name="signUpForm" 
            className="form signUp"
            onSubmit={handleSignUp}  >
        
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

            <button className="form-btn" type="submit">Sign Up</button>
        </form>
    </div>

    )
}

export default Signup;