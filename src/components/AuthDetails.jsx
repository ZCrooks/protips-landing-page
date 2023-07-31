// USER AUTHENTICATION 
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Header from "./Header";

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
        <div>
            {authUser ? 
            <>
                <h3 className="welcome-message">{`Welcome to Protips, ${authUser.displayName}!`}</h3> 
                <button onClick={userSignOut}>Sign Out</button>
            </>  
                : null }
        </div>
    )
}

export default AuthDetails;