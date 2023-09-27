import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import contactImg from '../../assets/img/contact.png';
import { Link } from 'react-scroll';
import Portfolio from '../Portfolio/portfolio';

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
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='event'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Events</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>

      <button className='contactbtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth' , offset:-70 })
      }}>
        <img src={contactImg} alt='' className='desktopmenuImg' /> Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
