import Link from "next/link";
import styles from "./historiaCard.module.css";

interface trajetoriProps {
  ano?: string;
  mes?: string;
  titulo: string;
  conteudo?: string;
  descricao: string;
}
export function HistoriaCard({
  titulo,
  mes,
  ano,
  conteudo,
  descricao,
}: trajetoriProps) {
  return (
    <div className={styles.card}>
      <div>
        {ano ? <span className={styles.ano}>{ano}</span> : null}
        {mes ? <span className={styles.ano}>{mes}</span> : null}
        <span className={styles.titulo}>{titulo}</span>
      </div>
      <p className={styles.descricao}>{descricao}</p>
      {conteudo ? (
        <button className={styles.certificado}>
          <Link target="_blank" href={conteudo}>
            Certificado
          </Link>
        </button>
      ) : null}
    </div>
  );
}
