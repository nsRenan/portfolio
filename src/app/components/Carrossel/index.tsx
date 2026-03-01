"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjetoCard } from "../ProjetoCard";
import { ProjetoModal } from "../ProjetoModal";
import styles from "./carrossel.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import apiSistemaBancarioFoto from "/public/imagens/api-sistema-bancario.png";
import pontoVendaFoto from "/public/imagens/ponto-de-venda.gif";
import dsListFoto from "/public/imagens/dsList.png";
import costsFoto from "/public/imagens/costs.png";
import bibliotecaFoto from "/public/imagens/biblioteca.png";
import portfolioFoto from "/public/imagens/portfolio.png";
import manorderFoto from "/public/imagens/manorder.png";
import blogPostsFoto from "/public/imagens/blogPots.png";

import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSwagger,
  SiReact,
  SiCss3,
  SiJest,
  SiTypescript,
  SiNextdotjs,
  SiSwiper,
  SiEslint,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiAlpinedotjs,
  SiAxios,
} from "react-icons/si";
import { ReactElement, useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface projetos {
  deploy?: string;
  github: string;
  imagem: StaticImageData;
  descricao: string;
  ferramentas: ReactElement[];
  descricaoLonga?: string;
}

const projetos: projetos[] = [
  {
    ferramentas: [
      <SiJavascript key={"javascript"} />,
      <SiNodedotjs key={"node"} />,
      <SiExpress key={"express"} />,
    ],
    descricao: "API Sistema Bancário",
    imagem: apiSistemaBancarioFoto,
    github: "https://github.com/nsRenan/api-sistema-bancario",
  },
  {
    ferramentas: [
      <SiJavascript key={"javascript"} />,
      <SiNodedotjs key={"node"} />,
      <SiExpress key={"express"} />,
      <SiPostgresql key={"postgresql"} />,
      <SiSwagger key={"swagger"} />,
      <SiJest key={"jest"} />,
    ],
    descricao: "Ponto de Venda",
    imagem: pontoVendaFoto,
    deploy: "https://pontodevenda.onrender.com/api-docs/",
    github: "https://github.com/nsRenan/pontodevenda",
  },
  {
    ferramentas: [
      <SiJavascript key={"javascript"} />,
      <SiReact key={"react"} />,
      <SiCss3 key={"css"} />,
    ],
    descricao: "DsList",
    imagem: dsListFoto,
    github: "https://github.com/nsRenan/dslist_frontend",
  },
  {
    ferramentas: [
      <SiJavascript key={"javascript"} />,
      <SiReact key={"react"} />,
      <SiCss3 key={"css"} />,
    ],
    descricao: "Costs",
    imagem: costsFoto,
    github: "https://github.com/nsRenan/projeto-costs-curso-react",
  },

  {
    ferramentas: [
      <SiJavascript key={"javascript"} />,
      <SiReact key={"react"} />,
      <SiCss3 key={"css"} />,
    ],
    descricao: "Bilioteca Virtual",
    imagem: bibliotecaFoto,
    github: "https://github.com/PietroRhyan/biblioteca-a3",
  },
  {
    ferramentas: [
      <SiTypescript key={"typescript"} />,
      <SiReact key={"react"} />,
      <SiNextdotjs key={"next"} />,
      <SiTailwindcss key={"tailwind"} />,
    ],
    descricao: "Manorder",
    imagem: manorderFoto,
    github: "https://github.com/Manorder",
    descricaoLonga: "SaaS desenvolvido em parceria com um colega de faculdade para gerenciar pedidos e receitas de restaurantes e lanchonetes. A aplicação oferece gerenciamento de pedidos e produtos, controle de um ou mais estabelecimentos pelo mesmo proprietário, dashboard com métricas de receita, relatórios completos e sistema de pagamento automatizado. O frontend foi construído com TypeScript, ReactJS e Next.js, utilizando Shadcn/ui e Radix UI para componentes, React-Hook-Form e Zod para formulários e validação, e Tremor para gráficos. O backend está atualmente em desenvolvimento.",
  },
  {
    ferramentas: [
      <SiPhp key={"php"} />,
      <SiLaravel key={"laravel"} />,
      <SiAlpinedotjs key={"alpine"} />,
      <SiTailwindcss key={"tailwind"} />,
      <SiAxios key={"axios"} />,
    ],
    descricao: "Blog Posts",
    imagem: blogPostsFoto,
    github: "https://github.com/nsRenan/blog-posts-laravel",
    descricaoLonga: "Projeto desenvolvido para aprofundar o conhecimento em PHP e no ecossistema Laravel. A aplicação é uma plataforma de posts com autenticação completa de usuários, sistema de curtidas, páginas de filtragem por categoria e criação de posts com editor rico. No backend, explorei os recursos do Laravel como Eloquent ORM, migrations, middlewares, validações e policies para controle de permissões. No frontend, utilizei Alpine.js para interatividade reativa sem abrir mão da leveza, Tailwind CSS para estilização moderna e Axios para as requisições assíncronas — entregando uma experiência fluida e responsiva.",
  },
  {
    ferramentas: [
      <SiTypescript key={"typescript"} />,
      <SiReact key={"react"} />,
      <SiCss3 key={"css"} />,
      <SiNextdotjs key={"next"} />,
      <SiSwiper key={"swiper"} />,
    ],
    descricao: "Portfolio",
    imagem: portfolioFoto,
    deploy: "https://nsrenan.com",
    github: "https://github.com/nsRenan/portfolio",
  },
];

export function Carrossel() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState<projetos | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const abrirModal = (projeto: projetos) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  let slidesVisiveis = 0;
  if (windowSize.width <= 1880) {
    slidesVisiveis = 3;
  }
  if (windowSize.width <= 1400) {
    slidesVisiveis = 2;
  }
  if (windowSize.width <= 752) {
    slidesVisiveis = 1;
  }
  if(windowSize.width >= 2400){
    slidesVisiveis = 5
  }
  if(windowSize.width < 2400 && windowSize.width > 1880){
    slidesVisiveis = 4
  }

  return (
    <div className={styles.carrossel}>
      <h2>Projetos</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={2}
        slidesPerView={slidesVisiveis}
        navigation
        autoplay={{ delay: 5000 }}
        loop={true}
        className={styles.swiper}
        
      >
        {projetos.map((projeto) => (
          <SwiperSlide key={projeto.descricao}>
            <div className={styles.card}>
              <ProjetoCard
                ferramentas={projeto.ferramentas}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
                deploy={projeto.deploy}
                github={projeto.github}
                onClick={() => abrirModal(projeto)}
                key={projeto.descricao}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {projetoSelecionado && (
        <ProjetoModal
          isOpen={modalAberto}
          onClose={fecharModal}
          descricao={projetoSelecionado.descricao}
          imagem={projetoSelecionado.imagem}
          ferramentas={projetoSelecionado.ferramentas}
          github={projetoSelecionado.github}
          deploy={projetoSelecionado.deploy}
          descricaoLonga={projetoSelecionado.descricaoLonga}
        />
      )}
    </div>
  );
}
