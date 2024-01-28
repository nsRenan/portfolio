"use client";
import { Link, animateScroll as scroll, } from "react-scroll/modules";
import { SiLinkedin, SiGithub } from "react-icons/si";
import styles from "./navbar.module.css";
import { RiMailSendLine } from "react-icons/ri";
import renanLogo from "/public/renan-logo.svg";
import Image from "next/image";
import { BarraLateral } from "../BarraLateral";

export function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={styles.main}>
      <div className={styles.nome}>
        <a onClick={scrollToTop} style={{ cursor: "pointer" }}>
          <Image width={44} src={renanLogo} alt={"logo"} />
        </a>
      </div>
      <menu className={styles.menu}>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Sobre
        </Link>
        <Link
          activeClass="active"
          to="projetos"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Projetos
        </Link>
        <Link
          activeClass="active"
          to="trajetoria"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Trajetória
        </Link>
      </menu>
      <div className={styles.menuBotoes}>
        <a target="_blank" href="https://www.linkedin.com/in/renan-nobre/">
          <SiLinkedin /> Linkedin
        </a>
        <a target="_blank" href="https://github.com/nsRenan">
          <SiGithub /> Github
        </a>
        <button className={styles.contato}>
          <a href="mailto:contact.renannobre@gmail.com">
            <RiMailSendLine />
            Contato
          </a>
        </button>
      </div>
      <BarraLateral />
    </header>
  );
}
