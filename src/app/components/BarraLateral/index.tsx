"use client";
import { Link, animateScroll as scroll, } from "react-scroll/modules";
import styles from "./barraLateral.module.css";
import { CgDetailsMore } from "react-icons/cg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";
import { ReactElement, useEffect, useState } from "react";
import { FiBox, FiInfo, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { TbTimeline } from "react-icons/tb";

interface menu {
  titulo: string,
  rota: string,
  icon: ReactElement,
}

export const menus: menu[] = [
  {
    titulo: "Sobre",
    rota: "sobre",
    icon: <FiInfo size={16} />,
  },
  {
    titulo: "Projetos",
    rota: "projetos",
    icon: <FiBox size={16} />,
  },
  {
    titulo: "Trajetória",
    rota: "trajetoria",
    icon: <TbTimeline  size={16} />,
  }
];

export function BarraLateral() {
  const [expandido, setExpandido] = useState(false);

  useEffect(() => {
    const handleCliqueForaDoMenu = (event: MouseEvent) => {
      const elementoClicado = event.target as HTMLElement;
      if (expandido && !elementoClicado.closest(".menu-expansivel")) {
        setExpandido(false);
      }
    };

    document.addEventListener("click", handleCliqueForaDoMenu);

    return () => {
      document.removeEventListener("click", handleCliqueForaDoMenu);
    };
  }, [expandido]);

  const alternarExpansao = () => {
    setExpandido((prevExpandido) => !prevExpandido);
  };

  return (
    <div className={styles.barra}>
      <button
        onClick={alternarExpansao}
        className={` ${styles.botao} ${
          !expandido ? styles.expandido : styles.recolhido
        } `}
      >
        <CgDetailsMore />
      </button>

      <>
        <motion.div
          className={` ${styles.motionDiv} ${
            expandido ? styles.expandido : styles.recolhido
          } `}
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={expandido ? { opacity: 0.3 } : { opacity: 0 }}
          onClick={() => alternarExpansao}
        ></motion.div>
        <motion.div
          className={` ${styles.divMobile} ${
            expandido ? styles.expandido : styles.recolhido
          } `}
        >
          <div
            onClick={() => alternarExpansao}
            className={` ${styles.botaoX} ${
              expandido ? styles.expandido : styles.recolhido
            }`}
          >
            <FiX color="white" size={24} />
          </div>

          <div
            className={`menu-expansivel ${
              expandido ? styles.expandido : styles.recolhido
            }`}
          >
            <div>
              <nav className={styles.menu}>
                <h4 className={styles.titulo}>Pages</h4>
                <ul className={styles.conteinerMenu}>
                  {menus.map((menu) => (
                    <li key={menu.titulo}>
                      <Link to={menu.rota}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      style={{ cursor: "pointer" }}
                      onClick={alternarExpansao}
                       className={styles.pagina}>
                        {menu.icon}
                        {menu.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.menuRedes}>
                <h4 className={styles.titulo}>Redes</h4>
                <ul className={styles.conteinerMenu}>
                  <a
                    className={styles.pagina}
                    target="_blank"
                    href="https://www.linkedin.com/in/renan-nobre/"
                  >
                    <SiLinkedin /> Linkedin
                  </a>
                  <a
                    className={styles.pagina}
                    target="_blank"
                    href="https://github.com/nsRenan"
                  >
                    <SiGithub /> Github
                  </a>

                  <a
                    className={styles.pagina}
                    href="mailto:renannprojetos@gmail.com"
                  >
                    <RiMailSendLine />
                    Contato
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    </div>
  );
}
