import Image from "next/image";
import { HistoriaCard } from "../HistoriaCard";
import styles from './trajetoria.module.css'
import timeLine from '/public/imagens/timeLine.svg'

export default function Trajetoria() {
    return (
      <div className={styles.conteinerTrajetoria}>
        <h1> Minha Trajetoria</h1>
        <Image src={timeLine} width={55} alt={"timeLine"}/>
        <div >
        <HistoriaCard ano={"2021"} titulo={"Universidade"}  descricao="Começa o Bacharelado"/>
        <HistoriaCard mes={"Fervereiro"} titulo={"Curso Python"} conteudo="/certificados/certificado_python.pdf" descricao="Introdução ao Python"/>
        <HistoriaCard mes={"Novembro"} titulo={"Curso AWS"} conteudo="/certificados/certificado_aws.pdf"  descricao="AWS Cloud Foundation"/>
        <HistoriaCard ano={"2022"} titulo={"Curso JAVA"} conteudo="/certificados/certificado_java.pdf"  descricao="Introdução ao OOP em Java"/>
        <HistoriaCard mes={"Dezembro"} titulo={"Curso CISCO"} conteudo="/certificados/certificado_cisco.pdf"  descricao="Networking Essentials"/>
        <HistoriaCard ano={"2023"} titulo={"Desenvolvimento Web"}  descricao="Estudo Focado em densenvolvimento web"/>
        <HistoriaCard mes={"Junho"} titulo={"Curso Azure"} conteudo="/certificados/certificado_azure.pdf"  descricao="Azure Cloud Commputing"/>
        <HistoriaCard mes={"Dezembro"} titulo={"Curso Node.js"} conteudo="/certificados/certificado_cubos.pdf"  descricao="Curso BackEnd em Node.js"/>
        </div>
        </div>

    );
  }