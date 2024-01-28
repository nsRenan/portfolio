"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjetoCard } from "../ProjetoCard";
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
} from "react-icons/si";
import { ReactElement, useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface projetos {
  deploy?: string;
  github: string;
  imagem: StaticImageData;
  descricao: string;
  ferramentas: ReactElement[];
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
    deploy: "https://fair-plum-cow.cyclic.app/api-docs/",
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
      <SiCss3 key={"css"} />,
      <SiNextdotjs key={"next"} />,
      <SiSwiper key={"swiper"} />,
    ],
    descricao: "Portfolio",
    imagem: portfolioFoto,
    github: "https://github.com/nsRenan/portfolio",
  },
];

export function Carrossel() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

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
                key={projeto.descricao}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
