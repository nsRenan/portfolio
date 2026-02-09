import styles from "./habilidades.module.css";
import {
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiVisualstudiocode,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiExpress,
  SiPhpstorm,
  SiPhp,
  SiLaravel,
  SiLivewire,
} from "react-icons/si";

export function Habilidades() {
  return (
    <section className={styles.titulo}>
      <h3>Habilidades</h3>
      <div className={styles.icones}>
        <div className={styles.iconWrapper} data-tooltip="HTML5">
          <SiHtml5 color="#F1662A" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="CSS3">
          <SiCss3 color="#1572B6" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="JavaScript">
          <SiJavascript color="#F5DE19" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="TypeScript">
          <SiTypescript color="#1F9CF0" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="React">
          <SiReact color="#00D8FF" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Next.js">
          <SiNextdotjs color="#F2F2F2" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Vue.js">
          <SiVuedotjs color="#42B883" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Nuxt.js">
          <SiNuxtdotjs color="#00DC82" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Tailwind CSS">
          <SiTailwindcss color="#06B6D4" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Node.js">
          <SiNodedotjs color="#388E3C" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Express">
          <SiExpress color="#F2F2F2" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="PHP">
          <SiPhp color="#777BB4" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Laravel">
          <SiLaravel color="#FF2D20" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Livewire">
          <SiLivewire color="#FB70A9" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="PostgreSQL">
          <SiPostgresql color="#0277BD" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="MongoDB">
          <SiMongodb color="#4DB33D" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="Git">
          <SiGit color="#DE4C36" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="GitHub">
          <SiGithub color="#F2F2F2" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="VS Code">
          <SiVisualstudiocode color="#0065A9" />
        </div>
        <div className={styles.iconWrapper} data-tooltip="PhpStorm">
          <SiPhpstorm color="#B345F1" />
        </div>
      </div>
    </section>
  );
}
