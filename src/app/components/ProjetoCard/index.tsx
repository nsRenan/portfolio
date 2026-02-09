import Image, { StaticImageData } from "next/image";
import styles from "./projetoCard.module.css";
import { ReactElement } from "react";

interface projetoCardProps {
  github: string;
  deploy?: string;
  imagem: StaticImageData;
  descricao: string;
  ferramentas: ReactElement[];
  onClick: () => void;
}

export function ProjetoCard({
  descricao,
  imagem,
  ferramentas,
  onClick,
}: projetoCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardFoto}>
        <Image src={imagem} objectFit="cover" fill alt="Imagem do Projeto" />
      </div>
      <div className={styles.cardInfo}>
        <p>{descricao}</p>
        <div className={styles.ferramentas}>
          {Array.from(ferramentas).map((element, index) => (
            <span key={index}>{element}</span>
          ))}
        </div>
        <span className={styles.verMais}>Clique para ver detalhes</span>
      </div>
    </div>
  );
}
