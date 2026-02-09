"use client";

import { useEffect, useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { Link } from "react-scroll/modules";
import styles from "./contatoBotao.module.css";

export function ContatoBotao() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    function alternarVisivel() {
      const scrollado = document.documentElement.scrollTop;

      if (scrollado > 500) {
        setVisivel(true);
        return;
      }
      setVisivel(false);
    }

    window.addEventListener("scroll", alternarVisivel);
    
    return () => window.removeEventListener("scroll", alternarVisivel);
  }, []);

  if (!visivel) {
    return null;
  }

  return (
    <div className={styles.botaoDiv}>
      <Link
        to="contato"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
        className={styles.botao}
      >
        <span className={styles.texto}>Entre em Contato</span>
        <RiMailSendLine size={20} />
      </Link>
    </div>
  );
}
