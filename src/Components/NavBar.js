import React, { useState } from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    NavItem,
    Nav,
    Collapse
} from 'reactstrap';
import "../styles/NavBar.css"
import logo from '../assets/wurklo-logo-website.png'

function NavBar() {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className='container-fluid g-0 g-sm-4'>
            <div className="row g-0">
                <div className="col d-lg-flex justify-content-lg-center">
                    <Navbar sticky="top" className='' color="clear" dark expand="lg">
                        <NavbarBrand className='fs-1' href="/">
                            <img className='logo-image' src={logo} alt="Wurklo" />
                        </NavbarBrand>
                        <NavbarToggler className='text-white me-2' onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
                        <Collapse isOpen={toggleNav} navbar>
                            <Nav className="ms-2" navbar>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Tokenomics</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Roadmap</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Team</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Wurklo</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Whitepaper</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default NavBar
