"use client";
import styles from "./sobre.module.css";
import { FiChevronsRight } from "react-icons/fi";
import Image from "next/image";
import minhaFoto from "/public/imagens/fotoPerfil.jpg";
import { Habilidades } from "../Habilidades";
import { useState } from "react";

export function Sobre() {
  const [fotoExpandida, setFotoExpandida] = useState(false);

  return (
    <div className={styles.sobreConteiner}>
      <section className={styles.sobre}>
        <div className={styles.tituloWrapper}>
          <h2>Sobre mim</h2>
          <div 
            className={`${styles.fotoMiniatura} ${fotoExpandida ? styles.expandida : ''}`}
            onClick={() => setFotoExpandida(!fotoExpandida)}
            onMouseLeave={() => setFotoExpandida(false)}
          >
            <Image src={minhaFoto} alt={"Renan Foto"} width={200} height={200} quality={95} />
          </div>
        </div>

        <p>
          Olá! Sou desenvolvedor fullstack natural do interior da Bahia. Minha jornada na programação 
          começou durante o ensino médio, quando descobri o fascinante mundo do Python. Desde então, 
          tenho me dedicado integralmente a construir uma carreira sólida nesta área que tanto me apaixona.
        </p>
        <p>
          Atualmente, atuo como desenvolvedor na huboo.ai, uma startup inovadora focada em soluções 
          de inteligência artificial, onde trabalho com tecnologias modernas como Nuxt 4, Vue.js e Tailwind CSS. 
          Sou bacharel em Ciências da Computação pela Universidade AGES, formação que me proporcionou 
          uma base sólida e estruturada para atuar profissionalmente no desenvolvimento de software.
        </p>
        <Habilidades />
      </section>
      <div className={styles.imagem}>
        <Image src={minhaFoto} alt={"Renan Foto"} width={300} />
      </div>
    </div>
  );
}
