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
                <div className="col d-sm-flex justify-content-sm-center">
                    <Navbar sticky="top" className='' color="clear" dark expand="xl">
                        <NavbarBrand className='fs-1' href="/">
                            <img className='logo-image' src={logo} alt="Wurklo" />
                        </NavbarBrand>
                        <NavbarToggler className='text-white' onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
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
