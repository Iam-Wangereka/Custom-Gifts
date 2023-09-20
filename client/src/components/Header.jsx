import  logo from '../images/logo.png';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
      <>
      <header>
      <img src={logo} alt='logo'/>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Services.jsx">Services</Link></li>
                        <li><Link to="/Contact_Us.jsx">Contact Us</Link></li>
                        <li><Link to="/About.jsx">About</Link></li>
                        <li><input type="text" placeholder="Search.." name="search" /></li>
                        <li><button type="submit">Search</button></li>
                    </ul>
                </nav>
      </header>
      </>
    )
}

export default Header;