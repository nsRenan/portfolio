import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import styles from "./navbar.module.css";
import { RiMailSendLine } from "react-icons/ri";

export function Navbar() {
  return (
    <header className={styles.main}>
      <div className={styles.nome}>
        <Link href="/">RENAN<span className={styles.sobrenome}>NOBRE</span></Link>
      </div>
      <menu className={styles.menu}>
        <Link href="/sobre"> Sobre</Link>
        <Link href="/projetos"> Projetos</Link>
        <Link href="/trajetoria"> Trajetória</Link>
      </menu>
      <div className={styles.menuBotoes}>
        <Link target="_blank" href="https://www.linkedin.com/in/renan-nobre/">
          <SiLinkedin /> Linkedin
        </Link>
        <Link target="_blank" href="https://github.com/nsRenan">
          <SiGithub /> Github
        </Link>
        <button className={styles.contato}>
          <a href="mailto:renannprojetos@gmail.com">
            <RiMailSendLine />
            Contato
          </a>
        </button>
      </div>
    </header>
  );
}
