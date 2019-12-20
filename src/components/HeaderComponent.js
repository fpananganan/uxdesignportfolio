import React, { Component } from 'react'; 
import { Button, Collapse, Form, FormGroup, Label, Input, ModalHeader, ModalBody, Modal, Nav, Navbar, NavbarToggler, NavItem, NavbarBrand } from 'reactstrap';  
import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }; 

        this.toggleNav = this.toggleNav.bind(this); 
        this.toggleModal = this.toggleModal.bind(this); 
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        }); 
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }); 
    }
    
    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
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
                                        <NavLink className="nav-link text-secondary" to='/about'>
                                            About Me
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link text-secondary" to='/'>
                                            Projects
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link text-secondary" to={this.toggleModal}>
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse> 
                        </Navbar>

                        {/* -- Item: Contact Modal --*/}
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}> Contact Me </ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleModal}>
                                    <FormGroup>
                                        <Label htmlFor="username"> What's Your Name </Label>
                                        <Input type="text" id="username" name="username"
                                            innerRef={input => this.username = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email"> Email Address </Label>
                                        <Input type="text" id="email" name="email"
                                            innerRef={input => this.email = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlfor="subject"> Subject Title </Label>
                                        <Input type="text" id="subject" name="subject"
                                            innerRef={input => this.subject = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlfor="message"> Message </Label>
                                        <Input type="text" id="message" name="message"
                                            innerRef={input => this.message = input} />
                                    </FormGroup>
                                    <Button type="send" value="send" color="primary"> Send </Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>  
                </header>
            </React.Fragment>
        ); 
    }
}

export default Header; 