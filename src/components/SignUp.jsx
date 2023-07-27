// SIGNUP FORM 
import Header from "./Header";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    
    return (
    <div className="wrapper">
        <Header />
        <form 
            action="" 
            method="POST" 
            name="signUpForm" className="form signUp"  >
        
            <h2>SIGN UP</h2>
            <p>Create a free account now!</p>

            <input className="form-input" type="text" id="firstName" name="firstName" placeholder="First name" aria-label="First name" />

            <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Last name" aria-label="Last name"/>

            <input className="form-input" type="email" name="userEmailSignUp" id="userEmailSignUp" placeholder="Email" aria-label="Email" />

            <input className="form-input" type="text" placeholder="Date of Birth" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}name="userBirthDate" id="userBirthDate"  aria-label="Date of Birth" />

            <input className="form-input" type="tel" id="userPhone" name="userPhone" placeholder="Phone number" aria-label="Phone number" />

            <input className="form-input" type="password" id="userPasswordSignUp" name="userPasswordSignUp" placeholder="Password" aria-label="Password" />

            <button className="form-btn" type="submit">Sign Up</button>
        </form>
    </div>

    )
}

export default Signup;