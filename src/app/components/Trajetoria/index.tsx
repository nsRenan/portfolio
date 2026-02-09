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
    titulo: "Desenvolvimento Web Moderno",
    descricao: [
      {
        descricao: "Em janeiro, dediquei-me a aprender TypeScript e a utilizar o framework Next.js para desenvolver meu primeiro portfólio. Essa experiência proporcionou-me a oportunidade de explorar as vantagens do TypeScript e aplicar os recursos avançados do Next.js na criação de uma aplicação web robusta e dinâmica."
      },
      {
        descricao: "Durante o primeiro semestre, aprofundei meus conhecimentos em React, dominando conceitos avançados como hooks personalizados, Context API, gerenciamento de estado com Redux e otimização de performance. Aprendi a criar componentes reutilizáveis e seguir as melhores práticas do ecossistema React."
      },
      {
        descricao: "Aprimorei minhas habilidades em desenvolvimento backend com Node.js e Express, implementando arquiteturas RESTful, autenticação JWT, integração com bancos de dados relacionais (PostgreSQL) e não-relacionais (MongoDB), além de práticas de segurança e validação de dados."
      },
      {
        descricao: "Mergulhei no mundo do CSS moderno, explorando Tailwind CSS, CSS Modules, Styled Components e animações avançadas. Desenvolvi habilidades em criar interfaces responsivas, acessíveis e com excelente experiência do usuário, seguindo princípios de design system."
      },
      {
        descricao: "Aprimorei conhecimentos em controle de versão com Git, trabalhando com Git Flow, estratégias de branching, resolução de conflitos e colaboração em equipe através de pull requests e code reviews."
      }
    ]
  },
  {
    ano: "2025",
    titulo: "Crescimento Profissional",
    descricao: [
      {
        descricao: "Iniciei o ano expandindo meu conhecimento para além do React, explorando o ecossistema Vue.js e Nuxt. Me encantei pela simplicidade e elegância do framework, estudando sua composição API, sistema de roteamento, e as poderosas funcionalidades de server-side rendering e geração de sites estáticos."
      },
      {
        descricao: "Aprofundei em arquitetura de software e boas práticas, estudando padrões de design, clean code, princípios SOLID e estruturação de projetos escaláveis. Aprendi a escrever código mais limpo, manutenível e testável, seguindo as melhores práticas da indústria."
      },
      {
        descricao: "Explorei técnicas avançadas de otimização e performance web, estudando lazy loading, code splitting, otimização de bundle, estratégias de cache e técnicas de SEO. Aprendi a utilizar ferramentas de análise como Lighthouse para melhorar a experiência do usuário e entregar aplicações mais rápidas e eficientes."
      },
      {
        descricao: "Em agosto de 2025, alcancei um marco decisivo na minha carreira: consegui minha primeira oportunidade como desenvolvedor profissional na huboo.ai, uma startup inovadora focada em soluções de inteligência artificial. Esta conquista representou a materialização de anos de dedicação e estudo.",
        certificado: "https://huboo.ai/"
      },
      {
        descricao: "Na huboo.ai, passei a trabalhar diariamente com tecnologias de ponta como Nuxt 4, Tailwind CSS e os frameworks mais modernos do ecossistema JavaScript. Tive a oportunidade de aplicar todo conhecimento adquirido em projetos reais de produção, colaborar com desenvolvedores experientes, participar de code reviews e contribuir efetivamente para o crescimento da empresa."
      },
      {
        descricao: "A experiência profissional acelerou exponencialmente meu desenvolvimento técnico e me proporcionou vivência prática em metodologias ágeis, trabalho em equipe, gestão de tempo e comunicação efetiva. Aprendi a balancear qualidade de código com prazos de entrega e a importância da documentação e manutenibilidade em projetos de longo prazo."
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
