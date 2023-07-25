// HEADER COMPONENT
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <img src={logo} alt="Protips Logo" />
        <nav>
            <ul className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Pricing</Link>
                <Link to="#">Contact</Link>
            </ul>
            <Link className='sign-in'>Sign In</Link>
            <Link to="signupPage" className='sign-up'>Sign Up</Link>
        </nav>
    </header>
    )
}

export default Header;