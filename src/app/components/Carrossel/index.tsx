"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjetoCard } from "../ProjetoCard";
import styles from "./carrossel.module.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
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

import { SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiSwagger, SiReact, SiCss3, SiJson, SiJest, SiAxios, SiJsonwebtokens, SiTypescript, SiNextdotjs, SiSwiper, SiEslint } from "react-icons/si";

export function Carrossel() {
  return (
    <div className={styles.carrossel}>
        <h2>Projetos</h2>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={2}
      slidesPerView={4}
      navigation
      autoplay={{delay: 5000}}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div >
          <ProjetoCard
            ferramentas={[<SiJavascript/>, <SiNodedotjs/>, <SiExpress/>, <SiJson/>]}
            descricao="API Sistema Bancário"
            imagem={apiSistemaBancarioFoto}
            deploy="oopa"
            github="https://github.com/nsRenan/api-sistema-bancario"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div >
          <ProjetoCard
            ferramentas={[<SiJavascript/>, <SiNodedotjs/>, <SiExpress/>, <SiPostgresql/>, <SiSwagger/>, <SiJest/>, <SiJsonwebtokens/> ]}
            descricao="Ponto de Venda"
            imagem={pontoVendaFoto}
            deploy="https://fair-plum-cow.cyclic.app/api-docs/"
            github="https://github.com/nsRenan/pontodevenda"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div >
          <ProjetoCard
            ferramentas={[<SiJavascript/>, <SiReact/>, <SiCss3/>, <SiJson/>]}
            descricao="DsList"
            imagem={dsListFoto}
            deploy="oopa"
            github="https://github.com/nsRenan/dslist_frontend"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div >
          <ProjetoCard
            ferramentas={[<SiJavascript/>, <SiReact/>, <SiJson/>, <SiCss3/>]}
            descricao="Costs"
            imagem={costsFoto}
            deploy="oopa"
            github="https://github.com/nsRenan/projeto-costs-curso-react"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div >
          <ProjetoCard
            ferramentas={[<SiJavascript/>, <SiReact/>, <SiCss3/>, <SiAxios/>]}
            descricao="Bilioteca Virtual"
            imagem={bibliotecaFoto}
            deploy="oopa"
            github="https://github.com/PietroRhyan/biblioteca-a3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div >
          <ProjetoCard
            ferramentas={[<SiTypescript/>, <SiReact/>, <SiCss3/>, <SiNextdotjs/>, <SiSwiper/>, <SiEslint/>]}
            descricao="Portfolio"
            imagem={portfolioFoto}
            deploy="oopa"
            github="https://github.com/nsRenan/portfolio"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}