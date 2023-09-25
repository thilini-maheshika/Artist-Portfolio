import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import contactImg from '../../assets/img/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <img src={logo} alt='logo' className='logo'></img>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className={`desktopMenu ${isMenuOpen ? 'open' : ''}`}>
        <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link to='portfolio' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Events</Link>
        <Link to='events' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>
      <button className='contactbtn'>
        <img src={contactImg} alt='' className='desktopmenuImg' /> Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
