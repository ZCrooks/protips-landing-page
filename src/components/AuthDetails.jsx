// USER AUTHENTICATION 
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            }   else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert("Signed Out")
        }).catch (error => alert(error))
    }

    return (
        <div className="wrapper signedIn">
            {authUser ? 
            <>
                <h3 className="welcome-message">{`Welcome to Protips, ${authUser.displayName}!`}</h3> 
                <ul className="user-links">
                    <li className="user-link">
                        <Link to="#">Profile</Link>
                         <FontAwesomeIcon icon={faUser} style={{color: "#FF4F4F",}}/>
                    </li>
                    <li className="user-link">
                        <Link to="#">Your Bookings</Link>
                        <FontAwesomeIcon icon={faUmbrellaBeach} style={{color: "#FF4F4F",}}/>
                    </li>
                    <li className="user-link">
                        <Link to="#">Affiliate Program</Link>
                        <FontAwesomeIcon icon={faDollarSign} style={{color: "#FF4F4F",}} />
                    </li>
                    <li className="user-link">
                        <Link to="#">Settings</Link>
                        <FontAwesomeIcon icon={faGear} style={{color: "#FF4F4F",}}/>         
                    </li>
                </ul>
                <button onClick={userSignOut}>Sign Out</button>
            </>  
                : null }
        </div>
    )
}

export default AuthDetails;