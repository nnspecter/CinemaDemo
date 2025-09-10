import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  

  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerLogo}>
            <img src={"images/header/logo.png"}></img>
        </div>
        <div className={styles.headerCategory}>
            <p>ГЛАВНАЯ</p>
            <p>НОВОСТИ</p>
            <p>КОНТАКТЫ</p>
        </div>
    </div>
  )
}

export default Header