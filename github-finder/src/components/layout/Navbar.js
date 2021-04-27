import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




const Navbar = ({icon, title})  => {
        return(
            <nav className='navbar bg-primary'>
                <h1>
                    {icon} {title}
                </h1>
            </nav>
        )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: <FontAwesomeIcon icon={faGithub} />
};


export default Navbar;