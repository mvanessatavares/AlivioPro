import React from "react";
import Title from "../../Title";
import style from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={style.sobre_container}>
      <Title text="Sobre o produto" />
      <p className={style.quem_somos}>
      O AlivioPro é um produto para alívio de dores com ativo de alecrim é uma solução natural e eficaz para 
      quem busca conforto e bem-estar sem recorrer a substâncias químicas agressivas. O alecrim, conhecido cientificamente como Rosmarinus officinalis, é uma planta que possui propriedades terapêuticas há séculos, 
      sendo utilizado tanto na medicina tradicional quanto na moderna.
        <p>
      
        </p>
        <p>
        O uso do produto é simples e prático: basta aplicar sobre a área afetada, realizando massagens suaves para potencializar a absorção. A sensação de alívio pode ser imediata, e o efeito calmante da planta ajuda a 
        relaxar o corpo e a mente, promovendo uma sensação de bem-estar geral.
        </p>
        <p>
          
        </p>
        <p>
        Além disso, por ser uma alternativa natural, o produto com alecrim é uma excelente escolha para quem busca um alívio para dores 
        sem o risco de efeitos colaterais típicos de medicamentos mais fortes.
        </p>
      
         
        <p className={style.somoss}>
          Somos a <span>AlivioPro</span>, seu amigo contra dores musculares!
        </p>
        
      </p>
    </div>
  );
};

export default Sobre;
