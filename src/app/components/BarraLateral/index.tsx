import styles from "./barraLateral.module.css";
import { CgDetailsMore } from "react-icons/cg";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";

export function BarraLateral() {
  return (
    <div className={styles.barra}>
      <button  className={styles.botao}>
        <CgDetailsMore />
      </button>

      <div >
        <nav>
          <ul style={{display: 'none'}}>
            <h4>Paginas</h4>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <Link href="/trajetoria">Trajetória</Link>
            </li>
            <div style={{width: 'fit-content'}}>_______________</div>
            <li>
              <Link href="/linkedin"> <SiLinkedin/>LinkedIn</Link>
            </li>
            <li>
              <Link href="/github"><SiGithub/> GitHub</Link>
            </li>
            <li>
              <Link href="/contato"><RiMailSendLine/> Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
