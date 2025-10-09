"use client";
import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { Link } from "react-scroll";
import { CgProfile } from "react-icons/cg";
import RightPanel from './rightMenu/RightPanel';


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
    <nav>
      <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
          <div className={styles.headerLogo}>
              <img src={"images/header/logo.png"}></img>
          </div>

          <div className={styles.headerCategory}>
            <Link
          to="main"
          smooth={true}
          offset={-80} 
          duration={500}
          spy={true}
          activeClass={styles.active}
        >
          ГЛАВНАЯ
        </Link>
        <Link
          to="news"
          smooth={true}
          offset={-80}
          duration={500}
          spy={true}
          activeClass={styles.active}
        >
          НОВОСТИ
        </Link>
        <Link
          to="contacts" //тут возникает ошибка из за отсутствия contacts!!!
          smooth={true}
          offset={-80}
          duration={500}
          spy={true}
          activeClass={styles.active}
        >
          КОНТАКТЫ
          </Link>
        </div>

        <div className={styles.profile}>
          <RightPanel/>
        </div>   
      </div>
    </nav>
  )
}

export default Header