// HEADER COMPONENT
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { auth } from "../firebase"
import { signOut } from "firebase/auth";
import { useState } from "react";

const Header = ({ signedIn, setSignedIn }) => {

    // Handle User SignOut  
    const handleSignOut = () => {
        setSignedIn(false)
        signOut(auth).then(() => {
            alert("Sign Out Successful");
        }).catch (error => alert(error))
    }
    
    return (
    <>
        <header>
            <Link to="/">
                <img src={logo} alt="Protips Logo" />
            </Link>
            <nav>
                <div className="menu">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <ul className="nav-bar">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Pricing</Link></li>
                                <li><Link to="#">Contact</Link></li>     
                            </ul>
                            {/* Ternary operator for displaying either Signed Out or Signed In button depending on state  */}
                            {signedIn ? (
                            <button onClick={handleSignOut} className="sign-out">Sign Out</button>   
                            ) : (
                            <Link to="/signin" className="sign-in">Sign In</Link> 
                            )}  
                            <Link to="/signup" className="sign-up">Sign Up</Link> 
                        </div>
                    </div>
                </div>
            </nav>
        </header> 
    </>
    )
}

export default Header;