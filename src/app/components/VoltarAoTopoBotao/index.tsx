"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styles from "./voltarAoTopoBotao.module.css";

export function VoltarAoTopoBotao() {
  const [visivel, setVisivel] = useState(false);

  function scrollParaTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
  });

  if (!visivel) {
    return null;
  }

  return (
    <div className={styles.botaoDiv}>
      <button onClick={scrollParaTopo} className={styles.botao}>
        <FiArrowUp size={24} />
      </button>
    </div>
  );
}
