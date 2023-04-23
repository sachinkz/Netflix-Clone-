import React from 'react'
import '../NavBar/NavBar.css'
import {useState,useEffect} from 'react'

function NavBar() {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="netflix"
        />
        <i className="fa fa-search "></i>
        <button className="dot-menu">...</button>
      </header>
    </div>
  );
}

export default NavBar
