import Image from "next/image";
import { HistoriaCard } from "../HistoriaCard";
import styles from "./trajetoria.module.css";
import timeLine from "/public/imagens/timeLine.svg";

export default function Trajetoria() {
  return (
    <div className={styles.conteinerTrajetoria}>
      <h1 > Minha Trajetoria</h1>
      <div className={styles.capsulaTrajetoria}>
        <div className={styles.esquerda}>
          <HistoriaCard
            ano={"2021"}
            titulo={"Universidade"}
            descricao="Começa o Bacharelado"
            />
            <div style={{height: 266}}></div>
          <HistoriaCard
            ano={"2022"}
            titulo={"Desbravando a OOP"}
            descricao="Introdução ao OOP"
          />
           <div style={{height: 250}}></div>
          <HistoriaCard
            ano={"2023"}
            titulo={"Desenvolvimento Web"}
            descricao="Estudo Focado em densenvolvimento web"
          />
        </div>
        <Image src={timeLine} width={55} alt={"timeLine"} />
        <div>
        <div style={{height: 50}}></div>
          <HistoriaCard
            mes={"Fevereiro"}
            titulo={"Curso Python"}
            conteudo="/certificados/certificado_python.pdf"
            descricao="Introdução ao Python"
          />
          <HistoriaCard
            mes={"Novembro"}
            titulo={"Curso AWS"}
            conteudo="/certificados/certificado_aws.pdf"
            descricao="AWS Cloud Foundation"
          />
           <div style={{height: 50}}></div>
          <HistoriaCard
            mes={"Março"}
            titulo={"Curso JAVA"}
            conteudo="/certificados/certificado_java.pdf"
            descricao="Introdução ao OOP em Java"
          />
          <HistoriaCard
            mes={"Dezembro"}
            titulo={"Curso CISCO"}
            conteudo="/certificados/certificado_cisco.pdf"
            descricao="Networking Essentials"
          />
           <div style={{height: 50}}></div>
          <HistoriaCard
            mes={"Junho"}
            titulo={"Curso Azure"}
            conteudo="/certificados/certificado_azure.pdf"
            descricao="Azure Cloud Commputing"
          />
          <HistoriaCard
            mes={"Dezembro"}
            titulo={"Curso Node.js"}
            conteudo="/certificados/certificado_cubos.pdf"
            descricao="Curso BackEnd em Node.js"
          />
        </div>
      </div>
    </div>
  );
}
