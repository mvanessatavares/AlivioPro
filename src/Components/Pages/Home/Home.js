import React from "react";
import Cards from "../../Cards/Cards";
import Marcas from "../../Marcas/Marcas";
import Title from "../../Title";
import style from "./Home.module.css";
import Produtos from "../../Produtos/Produtos";
import ProdutoDestaque from "../../Produtos/ProdutoDestaque";
import banner from "../../Assets/frete.png";
const Home = () => {
  return (
    <div className={style.home}>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <h2 className={style.centralizado}>
        Produto de fácil uso! Basta borrifar sobre a área afetada, <br/>realizando
        massagens suaves para potencializar a absorção.<br/> A sensação de alívio
        pode ser imediata!
        <br/>
        <br/>
        <li> Efeito calmante do  ALECRIM!</li>
      </h2>
      <div className={style.container_marcas}>
        <p className={style.p}>
        
        </p>
        <Marcas />
      </div>

      <Title text="" />
      <div className={style.container_destaques}>
        <div>
         
        </div>

        <div className={style.container_produtos}>
       
        </div>
      </div>
      <Title text="Benefícios" />
      <p className={style.p}>
       
      </p>
      <div style={{ margin: "15px auto", width: "60vw" }}>
        <img style={{ width: "100%", marginTop: "10px" }} src={banner} />
      </div>
    </div>
  );
};

export default Home;
