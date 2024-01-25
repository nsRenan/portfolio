import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import styles from "./navbar.module.css";
import { RiMailSendLine } from "react-icons/ri";
import renanLogo from '/public/renan-logo.svg'
import Image from "next/image";
import { BarraLateral } from "../BarraLateral";

export function Navbar() {
  return (
    <header className={styles.main}>
      <div className={styles.nome}>
        <Link href="/"> <Image width={44}  src={renanLogo} alt={"logo"} /> </Link>
      </div>
      <menu className={styles.menu}>
        <Link href="#sobre"> Sobre</Link>
        <Link href="#projetos"> Projetos</Link>
        <Link href="#trajetoria"> Trajetória</Link>
      </menu>
      <div className={styles.menuBotoes}>
        <Link target="_blank" href="https://www.linkedin.com/in/renan-nobre/">
          <SiLinkedin /> Linkedin
        </Link>
        <Link target="_blank" href="https://github.com/nsRenan">
          <SiGithub /> Github
        </Link>
        <button className={styles.contato}>
          <a href="mailto:contact.renannobre@gmail.com">
            <RiMailSendLine />
            Contato
          </a>
        </button>
      </div>
      <BarraLateral/>
    </header>
  );
}
