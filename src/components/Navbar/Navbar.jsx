import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons';


class Navbar extends Component {
    state = {clicked: false}

    hanleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render () {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<FontAwesomeIcon icon= {faComment}/></h1>
                <div className="menu-icon"onClick={this.hanleClick}>
                
                <i className={this.state.clicked ? <FontAwesomeIcon icon= {faComment}/> : <FontAwesomeIcon icon= {faBell}/>}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className= {item.cName} href={item.url}>
                                {item.title}    
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }


}
export default Navbar