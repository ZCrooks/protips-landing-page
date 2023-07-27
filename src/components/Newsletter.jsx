// NEWSLETTER SUBSCRIPTION COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp} from 'firebase/firestore';

const Newsletter = () => {

    // Store User Input (email) in State
    const [input, setInput] = useState("")

    // Set User Input in State
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    
    // Handle User submit Function (store data in Firestore)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // add to firebase 
        if (input) {
            await addDoc(collection(db, "emails"), {
                email: input,
                timestamp: serverTimestamp()
            })
            .then(() => {
                alert("Thank you for subscribing! We will be in touch soon.")
            })
            setInput("");
        }
    }

    return (
       <form method="POST" name="subscriptionForm" className='subscriptionForm' onSubmit={handleSubmit} >
        <label htmlFor="email">Get Update Protips every newsletter</label>
        <div className="field">
            <input 
                type="email" 
                placeholder="Enter your email" 
                required={true} 
                onChange={inputHandler} 
                value = {input} 
                aria-label="Email" />
            <button 
                type="submit" 
                className="submit">
                    <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}}/>
            </button>       
        </div>

       </form>
    )
}

export default Newsletter;