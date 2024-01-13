import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./projetoCard.module.css";
import { ReactElement, ReactSVGElement } from "react";

interface projetoCardProps {
  github: string;
  deploy?: string;
  imagem: StaticImageData;
  descricao: string;
  ferramentas: ReactElement[];
}

export function ProjetoCard({
  descricao,
  github,
  imagem,
  deploy,
  ferramentas,
}: projetoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardFoto}>
        <Image src={imagem} objectFit="cover" fill alt="Imagem do Projeto" />
      </div>
      <div className={styles.cardInfo}>
        <p>{descricao}</p>
        <div className={styles.ferramentas}>
        {Array.from(ferramentas).map((element) => (
           element
        ))}
        </div>
        <div className={styles.cardLinks}>
          <Link target="_blank" href={github}>
            Github
          </Link>
          {deploy ? (
            <Link target="_blank" href={deploy}>
              Deploy
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
