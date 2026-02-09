import styles from "./hero.module.css";
import { Info } from "../Info";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <span className={styles.greeting}>Olá, me chamo</span>
          <h1 className={styles.name}>
            Renan <span className={styles.highlight}>Nobre</span>
          </h1>
          <p className={styles.role}>
            Desenvolvedor <span className={styles.stack}>FullStack</span>
          </p>
          <p className={styles.description}>
            Especializado em criar experiências web modernas e intuitivas com as mais recentes tecnologias.
          </p>
          
          <div className={styles.stats}>
            <Info numero="2" titulo="anos de experiência" />
            <Info numero="+5" titulo="projetos publicados" />
          </div>
        </div>

        <div className={styles.decorative}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </section>
  );
}
