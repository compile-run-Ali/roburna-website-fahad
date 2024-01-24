import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Dropdown } from 'react-bootstrap'



function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  function hideMenu() {
    let toggleIcon = document.getElementById('toggleIco')!;
    toggleIcon.click()
  };
 
  return (
    <header className='d-flex align-items-center w-100'>
      
      <BootstrapNavbar variant="light" id="navigation" className="py-3 px-2 px-sm-4" expand="lg">


        <BootstrapNavbar.Toggle color="black" onClick={() => setMenuOpen(false)} id="toggleIco" />

        <BootstrapNavbar.Collapse color="black" className="mobile-collapse-hide pt-4 pt-lg-0 " id="menuShow">


          <Nav className="d-flex align-items-lg-center">

            <NavLink to="/" onClick={hideMenu} className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}>
              Home
            </NavLink>
            <NavLink
              to="/blockchain" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              BLOCKCHAIN
            </NavLink>
            <NavLink
              to="/whitepaper" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              WHITEPAPER
            </NavLink>
            <NavLink
              to="/labs" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              RBA LABS
            </NavLink>
            <NavLink
              to="/blog" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              BLOG
            </NavLink>
            <NavLink
                to="/updates" onClick={hideMenu}
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              UPDATES
            </NavLink>
            <NavLink
              to="/faq" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact" onClick={hideMenu}
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'item' : ''} mb-1 mb-lg-0`}
            >
              CONTACT
            </NavLink>
           
        
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </header>
  );
}

export default Header;
