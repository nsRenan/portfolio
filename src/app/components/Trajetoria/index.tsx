'use client';

import { useState } from "react";
import { TrajetoriaModal } from "../TrajetoriaModal";
import styles from "./trajetoria.module.css";

const momentos = [
  {
    ano: "2021",
    titulo: "Ciências da Computação",
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
    titulo: "Desbravando OOP",
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
        descricao: "Em julho, concluí com êxito a disciplina 'Modelos, métodos e técnicas da engenharia de software' com carga horária de 160 horas no Centro Universitário AGES, obtendo certificação em Qualificação Profissional em Modelos Métodos e Técnicas da Engenharia de Software.",
        certificado: "/certificados/certificado_engenharia_software.pdf"
      },
      {
        descricao: "Em dezembro deste ano, finalizei um curso intensivo de 500 horas focado no desenvolvimento de software backend utilizando Node.js. Aprendi habilidades essenciais para criar APIs, manipular bancos de dados e implementar lógica de negócios no servidor.",
        certificado: "/certificados/certificado_cubos.pdf"
      },
    ]
  },
  {
    ano: "2024",
    titulo: "Desenvolvimento Web Moderno",
    descricao: [
      {
        descricao: "Aprofundei conhecimentos em TypeScript e Next.js, desenvolvendo meu primeiro portfólio pessoal com foco em frontend moderno. Dominei conceitos avançados do React como hooks personalizados, Context API, gerenciamento de estado e otimização de performance, criando interfaces responsivas e elegantes."
      },
      {
        descricao: "No backend, aprimorei habilidades com Node.js e Express, implementando arquiteturas RESTful, autenticação JWT, integração com PostgreSQL e MongoDB, além de práticas de segurança. No frontend, explorei CSS moderno com Tailwind CSS, CSS Modules e Styled Components, aplicando princípios de design system e acessibilidade."
      },
      {
        descricao: "Em julho, concluí com êxito a disciplina 'Análise de dados e big data' com carga horária de 160 horas no Centro Universitário AGES, obtendo certificação em Qualificação Profissional em Análise de Dados.",
        certificado: "/certificados/certificado_big_data.pdf"
      }
    ]
  },
  {
    ano: "2025",
    titulo: "Crescimento Profissional",
    descricao: [
      {
        descricao: "Expandi conhecimento para o ecossistema Vue.js e Nuxt, explorando composição API, server-side rendering e geração de sites estáticos. Aprofundei em arquitetura de software, padrões de design, clean code e otimização de performance web."
      },
      {
        descricao: "Em julho, concluí minha graduação em Ciências da Computação pela Universidade AGES. Quatro anos de intenso aprendizado consolidaram uma base sólida em algoritmos, estruturas de dados e engenharia de software, complementando perfeitamente minha experiência prática.",
        certificado: "/certificados/diploma_ciencia_computacao.pdf"
      },
      {
        descricao: "Em agosto, conquistei minha primeira oportunidade como desenvolvedor profissional na huboo.ai, startup focada em soluções de IA. Trabalho com Nuxt 4, Tailwind CSS e frameworks modernos, aplicando conhecimento em projetos reais e colaborando com desenvolvedores experientes.",
        certificado: "https://huboo.ai/"
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
