import React, { Component } from 'react'; 
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavbarBrand } from 'reactstrap'; 
import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    constructor(props) {
        super(props); 

        this.toggleNav = this.toggleNav.bind(this); 
        this.state = {
            isNavOpen: false
        }; 
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        }); 
    }

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="container-fluid">
                        <Navbar expand="md p-3 px-md-4 mb-3 navbar-light text-center bg-white">
                            <NavbarBrand className="navbar-brand" href="/" ><img src="/assets/images/logo-mark.svg" alt="personal brand image" /></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="d-flex align-items-end navbar-nav ml-md-auto">
                                    <NavItem>
                                        <NavLink className="nav-link text-secondary" to="/About">
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link text-secondary" to="/">
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link text-secondary" to="/">
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse> 
                        </Navbar>
                    </div>  
                </header>
            </React.Fragment>
        ); 
    }
}

export default Header; 