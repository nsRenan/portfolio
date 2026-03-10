"use client";
import { Link, animateScroll as scroll, } from "react-scroll/modules";
import { SiLinkedin, SiGithub } from "react-icons/si";
import styles from "./navbar.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import renanLogo from "/public/renan-logo.svg";
import Image from "next/image";
import { BarraLateral } from "../BarraLateral";
import ThemeToggle from "../ThemeToggle";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappMessage = encodeURIComponent('Olá Renan! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
          offset={-80}
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
          offset={-80}
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
          offset={-80}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Trajetória
        </Link>
      </menu>
      <div className={styles.menuBotoes}>
        <ThemeToggle />
        <a target="_blank" href="https://www.linkedin.com/in/renan-nobre/">
          <SiLinkedin /> <span className={styles.linkLabel}>Linkedin</span>
        </a>
        <a target="_blank" href="https://github.com/nsRenan">
          <SiGithub /> <span className={styles.linkLabel}>Github</span>
        </a>
        {whatsappNumber && (
          <a target="_blank" rel="noopener noreferrer" href={whatsappUrl}>
            <FaWhatsapp /> <span className={styles.linkLabel}>WhatsApp</span>
          </a>
        )}
        <Link
          to="contato"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.contato}
          style={{ cursor: "pointer" }}
        >
          <RiMailSendLine />
          Contato
        </Link>
      </div>
      <BarraLateral />
    </header>
  );
}
