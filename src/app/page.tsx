import { Conteiner } from "./components/Conteiner";
import { Info } from "./components/Info";
import styles from "./page.module.css";
import { Sobre } from "./components/Sobre";
import { Seta } from "./components/Seta";
import { Carrossel } from "./components/Carrossel";
import Trajetoria from "./components/Trajetoria";
import TrajetoriaMobile from "./components/Trajetoria/indexMobile";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Conteiner>
          <div>
            <h4>Olá, me chamo</h4>
            <h1>Renan Nobre</h1>
            <h3>Desenvolvedor FullStack</h3>
            <div className={styles.info}>
              <Info numero="2" titulo="anos de experiência" />
              <Info numero="+5" titulo="projetos publicados" />
            </div>
          </div>
        </Conteiner>
        <div className={styles.seta}>
          <Seta />
        </div>
        <div>
          <Sobre />
        </div>
      </section>
      <div className={styles.seta}>
        <Seta />
      </div>
      <Carrossel />
      <div className={styles.trajetoria}>
      <Trajetoria  />
      </div>
      <div className={styles.trajetoriaMobile}>
      <TrajetoriaMobile/>
      </div>
    </main>
  );
}
