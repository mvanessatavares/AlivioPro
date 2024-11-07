import React from "react";
import Button from "../Button/Button";
import Sobre from "../Pages/Sobre/Sobre";
import { NavLink } from "react-router-dom";
import style from "./LinksMenu.module.css";
import { BiAlignJustify } from "react-icons/bi";

const Infos = () => {
  return (
    <div>
      <h1>
        Está com dor? A <span style={{color: 'green'}}>AlivioPro</span>{" "} é a solução!
      </h1>
      <h2>
        <span style={{color: 'rgb(27, 27, 27)'}}>
        Spray de rápida absorção desenvolvido para proporcionar alívio imediato das dores musculares e nas articulações.</span>
      </h2>
      <br/>
      <br/>
      <NavLink to="/sobre" className={style.links} style={{ textDecoration: 'none' }}>
      <Button text="Saiba Mais" />
    </NavLink>
   
    </div>
  );
};

export default Infos;
