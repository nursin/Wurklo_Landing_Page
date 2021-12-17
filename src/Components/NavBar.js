import React, { useState } from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';
function NavBar() {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className='container-fluid'>
            <div className="row g-0">
                <div className="col">
                    <Navbar className='text-white' color="clear" dark expand="xl">
                        <NavbarBrand className='ps-2 mx-auto' href="/">
                        </NavbarBrand>
                        <NavbarToggler hidden onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
                        {/* <Collapse isOpen={toggleNav} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/tokenomics">Tokenomics</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/roadmap">Roadmap</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/solscan">Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/solscan">Wurklo</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/whitepaper">Whitepaper</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contactus">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse> */}
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default NavBar
