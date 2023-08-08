// USER AUTHENTICATION 
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const AuthDetails = () => {
    // Declare state vairable to hold authenticated user data
    const [authUser, setAuthUser] = useState(null);

    // Listen for changes in authentication state with UseEffect
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }   else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    return (
        <div className="wrapper signedIn">
            {/* Ternary operator for displaying if user is authenticated and logged in */}
            {authUser ? 
            <>
                <h3 className="welcome-message">{`Welcome to Protips, ${authUser.displayName}!`}</h3> 
                <ul className="user-links">
                    <li className="user-link">
                        <Link to="#">Profile</Link>
                         <FontAwesomeIcon icon={faUser} style={{color: "#FF4F4F",}}/>
                    </li>
                    <li className="user-link">
                        <Link to="#">Bookings</Link>
                        <FontAwesomeIcon icon={faUmbrellaBeach} style={{color: "#FF4F4F",}}/>
                    </li>
                    <li className="user-link">
                        <Link to="#">Affiliates</Link>
                        <FontAwesomeIcon icon={faDollarSign} style={{color: "#FF4F4F",}} />
                    </li>
                    <li className="user-link">
                        <Link to="#">Settings</Link>
                        <FontAwesomeIcon icon={faGear} style={{color: "#FF4F4F",}}/>         
                    </li>
                </ul>
            </>  
                : null }
        </div>
    )
}

export default AuthDetails;