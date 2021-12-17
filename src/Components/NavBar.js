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

function NavBar() {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className='container-fluid'>
            <div className="row g-0">
                <div className="col">
                    <Navbar className='text-white' color="clear" dark expand="xl">
                        <NavbarBrand className='ps-2 fs-1' href="/">
                            Wurklo
                        </NavbarBrand>
                        <NavbarToggler left onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
                        <Collapse isOpen={toggleNav} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/tokenomics">Tokenomics</NavLink>
                                </NavItem>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/roadmap">Roadmap</NavLink>
                                </NavItem>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/solscan">Team</NavLink>
                                </NavItem>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/solscan">Wurklo</NavLink>
                                </NavItem>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/whitepaper">Whitepaper</NavLink>
                                </NavItem>
                                <NavItem className='px-2'>
                                    <NavLink className='p-2' href="/contactus">Contact Us</NavLink>
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
