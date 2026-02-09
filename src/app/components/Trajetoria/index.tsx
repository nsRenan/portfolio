'use client';

import { useState } from "react";
import { TrajetoriaModal } from "../TrajetoriaModal";
import styles from "./trajetoria.module.css";

const momentos = [
  {
    ano: "2021",
    titulo: "Ciencias da Computação",
    descricao: [
      {
        descricao:
          "Em fevereiro de 2021, durante a pandemia de COVID-19, dediquei-me a cursos de Python para aprimorar minhas habilidades em programação. Essa iniciativa solidificou minha convicção de que essa seria a área à qual deveria seguir.",
        certificado: "/certificados/certificado_python.pdf",
      },
      {
        descricao:
          "Em julho deste ano, iniciei minha jornada acadêmica rumo ao bacharelado em Ciência da Computação. Fascinado pela intersecção entre lógica, criatividade e tecnologia, dei o primeiro passo para explorar este campo em constante evolução.",
      },
      {
        descricao: "Em novembro, concluí o curso de AWS Cloud oferecido pelo campus do bacharelado, onde adquiri habilidades essenciais para trabalhar com a infraestrutura de nuvem da Amazon Web Services.",
        certificado: "/certificados/certificado_aws.pdf"
      }
    ],
  },
  {
    ano: "2022",
    titulo: "Desbravando ao OOP",
    descricao: [
      {
        descricao: "Em março de 2022, iniciei um estudo dedicado às linguagens de programação orientadas a objetos (OOP), com ênfase especial em Java. Nesse período, mergulhei profundamente nos conceitos fundamentais da OOP, explorando as características e a sintaxe específicas de Java.",
        certificado: "/certificados/certificado_java.pdf"
      },
      {
        descricao: "Em dezembro deste ano, finalizei o curso da Cisco, Networking Essentials. Adquiri conhecimentos fundamentais sobre redes, incluindo comunicação de dados, arquiteturas de rede e protocolos de Internet, preparando-me para desafios futuros na área de tecnologia.",
        certificado: "/certificados/certificado_cisco.pdf"
      }
    ]
  },
  {
    ano: "2023",
    titulo: "Desenvolvimento Web",
    descricao: [
      {
        descricao: "Em 2023, com o mercado de desenvolvimento web em ascensão, optei por direcionar meus estudos para essa área promissora, buscando explorar suas vastas oportunidades."
      },
      {
        descricao: "Em junho, finalizei o curso de Azure Cloud Computing com ênfase em IA. Adquiri habilidades para integrar inteligência artificial na plataforma Azure, capacitando-me para desenvolver e implementar soluções na nuvem.",
        certificado: "/certificados/certificado_azure.pdf"
      },
      {
        descricao: "Em dezembro deste ano, finalizei um curso intensivo de 500 horas focado no desenvolvimento de software backend utilizando Node.js. Aprendi habilidades essenciais para criar APIs, manipular bancos de dados e implementar lógica de negócios no servidor.",
        certificado: "/certificados/certificado_cubos.pdf"
      },
    ]
  },
  {
    ano: "2024",
    titulo: "Desenvolvimento Web",
    descricao: [
      {
        descricao: "Em 2024, tenho priorizado meu estudo em JavaScript, dedicando tempo para explorar suas bibliotecas e frameworks. Estou empenhado em aprofundar meu conhecimento e habilidades nessa linguagem versátil e em constante evolução."
      },
      {
        descricao: "Em janeiro, dediquei-me a aprender TypeScript e a utilizar o framework Next.js para desenvolver meu primeiro portfólio. Essa experiência proporcionou-me a oportunidade de explorar as vantagens do TypeScript e aplicar os recursos avançados do Next.js na criação de uma aplicação web robusta e dinâmica."
      }
    ]
  },
];

interface MomentoSelecionado {
  ano: string;
  titulo: string;
  descricao: { descricao: string; certificado?: string }[];
}

export default function Trajetoria() {
  const [modalAberto, setModalAberto] = useState(false);
  const [momentoSelecionado, setMomentoSelecionado] = useState<MomentoSelecionado | null>(null);

  const abrirModal = (momento: MomentoSelecionado) => {
    setMomentoSelecionado(momento);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTimeout(() => setMomentoSelecionado(null), 300);
  };

  return (
    <div className={styles.conteinerTrajetoria}>
      <h2 className={styles.titulo}>Minha Trajetória</h2>
      <div className={styles.trajetoriaGrid}>
        {momentos.map((trajeto) => (
          <div 
            key={trajeto.ano} 
            className={styles.card}
            onClick={() => abrirModal(trajeto)}
          >
            <span className={styles.ano}>{trajeto.ano}</span>
            <h3 className={styles.cardTitulo}>{trajeto.titulo}</h3>
            <p className={styles.preview}>
              {trajeto.descricao.length} {trajeto.descricao.length === 1 ? 'marco' : 'marcos'}
            </p>
            <div className={styles.verMais}>
              Ver detalhes →
            </div>
          </div>
        ))}
      </div>

      {momentoSelecionado && (
        <TrajetoriaModal
          isOpen={modalAberto}
          onClose={fecharModal}
          ano={momentoSelecionado.ano}
          titulo={momentoSelecionado.titulo}
          descricao={momentoSelecionado.descricao}
        />
      )}
    </div>
  );
}
