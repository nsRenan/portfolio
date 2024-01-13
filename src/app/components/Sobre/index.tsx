import styles from "./sobre.module.css";
import { FiChevronsRight } from "react-icons/fi";
import Image from 'next/image'
import minhaFoto from '/public/imagens/tt.jpg'
import { Habilidades } from "../Habilidades";

export function Sobre() {
  return (
    <div className={styles.sobreConteiner}>
    <section className={styles.sobre}>
      <h2>
        Sobre mim
      </h2>

      <p>
        Olá, sou natural do interior da Bahia e minha paixão pela programação
        começou durante o ensino médio, quando descobri o fascinante mundo do
        Python. Foi nesse momento que decidi dedicar-me integralmente a essa
        área promissora.
        </p>
        <p>
        Atualmente, estou imerso no curso de Ciências da Computação na renomada
        Universidade AGES, onde aprofundo meus conhecimentos e aprimoro minhas
        habilidades. Paralelamente, atuo como freelancer, aplicando minha
        expertise em projetos diversos.
        </p>
        <Habilidades/>
    </section>
    <Image src={minhaFoto} alt={"Renan Foto"} width={300}/>
    </div>
  
  );
}
