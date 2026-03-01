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

const ICONS = [
  { tooltip: "HTML5", Icon: SiHtml5, color: "#F1662A" },
  { tooltip: "CSS3", Icon: SiCss3, color: "#1572B6" },
  { tooltip: "JavaScript", Icon: SiJavascript, color: "#F5DE19" },
  { tooltip: "TypeScript", Icon: SiTypescript, color: "#1F9CF0" },
  { tooltip: "React", Icon: SiReact, color: "#00D8FF" },
  { tooltip: "Next.js", Icon: SiNextdotjs, color: "var(--icon-color)", useStyle: true },
  { tooltip: "Vue.js", Icon: SiVuedotjs, color: "#42B883" },
  { tooltip: "Nuxt.js", Icon: SiNuxtdotjs, color: "#00DC82" },
  { tooltip: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { tooltip: "Node.js", Icon: SiNodedotjs, color: "#388E3C" },
  { tooltip: "Express", Icon: SiExpress, color: "var(--icon-color)", useStyle: true },
  { tooltip: "PHP", Icon: SiPhp, color: "#777BB4" },
  { tooltip: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { tooltip: "Livewire", Icon: SiLivewire, color: "#FB70A9" },
  { tooltip: "PostgreSQL", Icon: SiPostgresql, color: "#0277BD" },
  { tooltip: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
  { tooltip: "Git", Icon: SiGit, color: "#DE4C36" },
  { tooltip: "GitHub", Icon: SiGithub, color: "var(--icon-color)", useStyle: true },
  { tooltip: "VS Code", Icon: SiVisualstudiocode, color: "#0065A9" },
  { tooltip: "PhpStorm", Icon: SiPhpstorm, color: "#B345F1" },
];

export function Habilidades() {
  return (
    <section className={styles.titulo}>
      <h3>Habilidades</h3>
      <div className={styles.icones}>
        {ICONS.map(({ tooltip, Icon, color, useStyle }, idx) => (
          <div
            key={tooltip + idx}
            className={styles.iconWrapper}
            data-tooltip={tooltip}
          >
            {useStyle ? (
              <Icon style={{ color: color as string }} />
            ) : (
              <Icon color={color as string} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
