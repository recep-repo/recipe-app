import React, {useState} from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyle'

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <Nav>
            <Logo to="/">
                <i>{"Papbu | "}</i><span>Recipe</span>
            </Logo>
            <Hamburger onClick={()=> setisOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>

            </Menu>
        </Nav>
    )
}

export default Navbar
