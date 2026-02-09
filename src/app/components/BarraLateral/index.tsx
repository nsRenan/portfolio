"use client";
import { Link, animateScroll as scroll, } from "react-scroll/modules";
import styles from "./barraLateral.module.css";
import { CgDetailsMore } from "react-icons/cg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";
import { ReactElement, useEffect, useState } from "react";
import { FiBox, FiInfo, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
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
  },
  {
    titulo: "Contato",
    rota: "contato",
    icon: <RiMailSendLine size={16} />,
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

  useEffect(() => {
    if (expandido) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
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

      <AnimatePresence>
        {expandido && (
          <>
            <motion.div
              className={styles.motionDiv}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={alternarExpansao}
            ></motion.div>
            <motion.div
              className={styles.divMobile}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                onClick={alternarExpansao}
                className={styles.botaoX}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <FiX />
              </motion.div>

              <motion.div
                className="menu-expansivel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <div>
                  <nav className={styles.menu}>
                    <motion.h4 
                      className={styles.titulo}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      Pages
                    </motion.h4>
                    <ul className={styles.conteinerMenu}>
                      {menus.map((menu, index) => (
                        <motion.li 
                          key={menu.titulo}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ delay: 0.2 + index * 0.03, duration: 0.2 }}
                        >
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
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <div className={styles.menuRedes}>
                    <motion.h4 
                      className={styles.titulo}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      Redes
                    </motion.h4>
                    <motion.ul 
                      className={styles.conteinerMenu}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: 0.4, duration: 0.2 }}
                    >
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
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
