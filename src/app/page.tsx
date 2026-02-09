import styles from "./page.module.css";
import { Sobre } from "./components/Sobre";
import { Seta } from "./components/Seta";
import { Carrossel } from "./components/Carrossel";
import Trajetoria from "./components/Trajetoria";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      
      <div className={styles.seta}>
        <Seta />
      </div>

      <section id="sobre">
        <Sobre />
      </section>

      <div className={styles.seta}>
        <Seta />
      </div>

      <section id="projetos">
        <Carrossel />
      </section>

      <section id="trajetoria">
        <Trajetoria />
      </section>
    </main>
  );
}
