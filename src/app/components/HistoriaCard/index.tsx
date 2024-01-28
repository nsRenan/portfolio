import Link from "next/link";
import styles from "./historiaCard.module.css";

interface momento {
  descricao: string;
  certificado?: string;
}
interface momentosProps {
  ano: string;
  titulo: string;
  descricao: momento[];
}
export function HistoriaCard({ titulo, ano, descricao }: momentosProps) {
  return (
    <div className={styles.card}>
      <h3>{ano}</h3>
      <h4>{titulo}</h4>
      <div>
        <ul>
          {descricao.map((momento, index) => (
            <li className={styles.descricaoCard} key={index}>
              <p className={styles.descricao}>{momento.descricao}</p>
              <div className={styles.botao}>
                {momento.certificado && (
                  <Link
                    className={styles.certificado}
                    target="_blank"
                    href={momento.certificado}
                  >
                    Certificado
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
