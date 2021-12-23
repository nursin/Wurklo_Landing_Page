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
import { Button } from '@material-ui/core'

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
                                    <NavLink className='p-sm-2' href="/">Products</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Roadmap</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Tokenomics</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Validation</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">About</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Store</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/">Contact</NavLink>
                                </NavItem>
                                <NavItem className='px-sm-2'>
                                    <NavLink className='p-sm-2' href="/"><Button className='bg-primary text-white' variant="contained">Connect</Button></NavLink>
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
