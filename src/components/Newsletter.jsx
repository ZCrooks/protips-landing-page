// NEWSLETTER SUBSCRIPTION COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
    

    return (
       <form action="" method="POST" name="subscriptionForm">
        <label htmlFor="email">Get Update Protips every newsletter</label>
        <div className="field">
            <input type="email" placeholder="Enter your email" required="true"/>
            <button className="submit"><FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}}/></button>       
        </div>

       </form>
    )
}

export default Newsletter;