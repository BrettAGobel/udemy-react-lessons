import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const Navbar = ({icon, title})  => {
        return(
            <nav className='navbar bg-primary'>
                <h1>
                    {icon} {title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: <FontAwesomeIcon icon={faGithub} />
};


export default Navbar;