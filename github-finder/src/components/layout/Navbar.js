import React, { Component } from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";


library.add(fas, fab)
export class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder',
        icon: <FontAwesomeIcon icon={faGithub} />
    };

    render() {

        return(
            <nav className='navbar bg-primary'>
                <h1>
                    {this.props.icon} {this.props.title}

                </h1>
            </nav>

        )
    }

}

export default Navbar;