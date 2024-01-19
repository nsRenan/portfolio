import Image from "next/image";
import { HistoriaCard } from "../HistoriaCard";
import styles from "./trajetoria.module.css";
import timeLine from "/public/imagens/timeLine.svg";


export default function Trajetoria() {
  return (
    <div className={styles.conteinerTrajetoria}>
      <h1> Minha Trajetoria</h1>
      <div className={styles.capsulaTrajetoria}>
        <div className={styles.esquerda}>
          <HistoriaCard
            ano={"2021"}
            key={'universidade'}
            titulo={"Universidade"}
            descricao="Começa o Bacharelado"
          />
          <div className={styles.espaco} style={{ height: 260 }}></div>
          <HistoriaCard
            ano={"2022"}
            key={'oop'}
            titulo={"Desbravando a OOP"}
            descricao="Introdução ao OOP"
          />
          <div className={styles.espaco} style={{ height: 150 }}></div>
          <HistoriaCard
            ano={"2023"}
            key={'web'}
            titulo={"Desenvolvimento Web"}
            descricao="Estudo Focado em densenvolvimento web"
          />
        </div>
        <Image src={timeLine} width={55} alt={"timeLine"} />
        <div>
          <div className={styles.espaco} style={{ height: 50 }}></div>
          <HistoriaCard
            mes={"Fevereiro"}
            key={'cursoPython'}
            titulo={"Curso Python"}
            conteudo="/certificados/certificado_python.pdf"
            descricao="Introdução ao Python"
          />
          <HistoriaCard
            mes={"Novembro"}
            key={'cursoAws'}
            titulo={"Curso AWS"}
            conteudo="/certificados/certificado_aws.pdf"
            descricao="AWS Cloud Foundation"
          />
          <div className={styles.espaco} style={{ height: 80 }}></div>
          <HistoriaCard
            mes={"Março"}
            key={'cursoJava'}
            titulo={"Curso JAVA"}
            conteudo="/certificados/certificado_java.pdf"
            descricao="Introdução ao OOP em Java"
          />
          <HistoriaCard
            mes={"Dezembro"}
            key={'cursoCisco'}
            titulo={"Curso CISCO"}
            conteudo="/certificados/certificado_cisco.pdf"
            descricao="Networking Essentials"
          />
          <div className={styles.espaco} style={{ height: 50 }}></div>
          <HistoriaCard
            mes={"Junho"}
            key={"cursoAzure"}
            titulo={"Curso Azure"}
            conteudo="/certificados/certificado_azure.pdf"
            descricao="Azure Cloud Commputing"
          />
          <HistoriaCard
            mes={"Dezembro"}
            key={"cursoNode"}
            titulo={"Curso Node.js"}
            conteudo="/certificados/certificado_cubos.pdf"
            descricao="Curso BackEnd em Node.js"
          />
        </div>
      </div>
    </div>
  );
}
