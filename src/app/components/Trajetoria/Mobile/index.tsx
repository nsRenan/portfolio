import Image from "next/image";
import { HistoriaCard } from "../../HistoriaCard";
import styles from "./trajetoria.module.css";
import timeLine from "/public/timeLine.svg";

interface historia {
  ano?: string;
  mes?: string;
  titulo: string;
  descricao: string;
  conteudo?: string;
}

const historias: historia[] = [
  {
    ano: "2021",
    titulo: "Universidade",
    descricao: "Começa o Bacharelado",
  },
  {
    mes: "Fevereiro",
    titulo: "Curso Python",
    conteudo: "/certificados/certificado_python.pdf",
    descricao: "Introdução ao Python",
  },
  {
    mes: "Novembro",
    titulo: "Curso AWS",
    conteudo: "/certificados/certificado_aws.pdf",
    descricao: "AWS Cloud Foundation",
  },
  {
    ano: "2022",
    titulo: "Desbravando a OOP",
    descricao: "Introdução ao OOP",
},
{
  mes: "Março",
  titulo: "Curso JAVA",
  conteudo: "/certificados/certificado_java.pdf",
  descricao: "Introdução ao OOP em Java",
},
{
  mes: "Dezembro",
  titulo: "Curso CISCO",
  conteudo: "/certificados/certificado_cisco.pdf",
  descricao: "Networking Essentials",
},
  {
    ano: "2023",
    titulo: "Desenvolvimento Web",
    descricao: "Estudo Focado em Desenvolvimento Web",
  },
  {
    mes: "Junho",
    titulo: "Curso Azure",
    conteudo: "/certificados/certificado_azure.pdf",
    descricao: "Azure Cloud Computing",
  },
  {
    mes: "Dezembro",
    titulo: "Curso Node.js",
    conteudo: "/certificados/certificado_cubos.pdf",
    descricao: "Curso BackEnd em Node.js",
  },
];

export default function TrajetoriaMobile() {
  return (
    <div className={styles.conteinerTrajetoria}>
      <h1> Minha Trajetoria</h1>
      <div className={styles.formato}>
        <Image src={timeLine} width={55} className={styles.timeLine} alt={""}/>
      <div className={styles.capsulaTrajetoria}>
        {historias.map((historia) => (
          <div key={historia.titulo} className={styles.card}>
            <HistoriaCard
              ano={historia.ano}
              mes={historia.mes}
              titulo={historia.titulo}
              descricao={historia.descricao}
              conteudo={historia.conteudo}
              key={historia.titulo}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
