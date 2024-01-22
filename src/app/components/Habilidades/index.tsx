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
  SiVisualstudiocode,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";
import pythonSvg from "/public/pythonSvg.svg";
import Image from "next/image";

export function Habilidades() {
  return (
    <section className={styles.titulo}>
      <h3>Habilidades</h3>
      <div className={styles.icones}>
        <SiHtml5 color="#F1662A" /> <SiCss3 color="#1572B6" />{" "}
        <SiGit color="#DE4C36" /> <SiGithub color="#F2F2F2" />
        <SiVisualstudiocode color="#0065A9" /> <SiNodedotjs color="#388E3C" />
        <Image src={pythonSvg} alt={"python"} />
        <SiPostgresql color="#0277BD" /> <SiReact color="#00D8FF" />{" "}
        <SiTypescript color="#1F9CF0" /> <SiJavascript color=" #F5DE19" />{" "}
        <SiWordpress color="#01579B" /> <SiNextdotjs color="#F2F2F2" />
      </div>
    </section>
  );
}
