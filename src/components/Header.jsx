// HEADER COMPONENT
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Link to="/signin" className="sign-in">Sign In</Link>
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