import React, { useState, useEffect } from 'react';
import Logo from '@components/Logo';
import style from '@sass/layouts/header.module.scss';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setScrolled(false);
      return;
    }

    const scrollOffset = lastScrollY - currentScroll; // header height
    console.log(scrollOffset);
    if (currentScroll > lastScrollY && scrollOffset > 88 && !scrolled) {
      setScrolled(true);
    } else if (currentScroll < lastScrollY && scrolled) {
      setScrolled(false);
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={`${style.header} ${scrolled ? 'navUp' : ''}`}>
      <div className="container">
        <Logo />
        <ul>
          {/* <li><a href="#projects-section">Projetos</a></li>
          <li><a href="#about-section">Sobre</a></li>
          <li><a href="#contact-section">Contato</a></li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
