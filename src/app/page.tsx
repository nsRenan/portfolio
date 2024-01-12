import { Conteiner } from "./components/Conteiner";
import { Info } from "./components/Info";
import styles from "./page.module.css";;
import { Habilidades } from "./components/Habilidades";

export default function Home() {
  return (
    <main className={styles.main}>
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
      <div>
        <Habilidades/>
      </div>
    </main>
  );
}
