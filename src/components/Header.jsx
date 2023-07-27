// HEADER COMPONENT
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <Link to="/">
            <img src={logo} alt="Protips Logo" />
        </Link>
        <nav>
            <ul className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Pricing</Link>
                <Link to="#">Contact</Link>
            </ul>
            <Link to="/signin" className="sign-in">Sign In</Link>
            <Link to="/signup" className="sign-up">Sign Up</Link>
        </nav>
    </header>
    )
}

export default Header;