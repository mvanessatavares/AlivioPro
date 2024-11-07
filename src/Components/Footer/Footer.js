import React from "react";
import style from "./Footer.module.css";
import pl from "../Assets/pl.png";
import pl2 from "../Assets/pl2.png";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <img className={style.img} src={pl} />
          <div className={style.container_ul}>
            <ul className={style.ul}>
              <h3>INSTITUCIONAL</h3>
              <Link to="/">Quem Somos</Link>
              <Link to="/">Politica de Trocas e Devoluções</Link>
              <Link to="/">Politicas de Privacidade</Link>
              <Link to="/">Contato</Link>
            </ul>
          
            <ul className={style.ul}>
              <h3>RELACIONAMENTO</h3>
              <p className={style.ajuda}>
                Precisa de ajuda? Fale com a gente!
              </p>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: 'center',
                  marginTop: "20px",
                }}
              >
                <FaWhatsapp className={style.icon} />
                <p>(11) 99999-9999</p>
              </Link>
            </ul>
          </div>
          <p style={{ textAlign: "center", marginTop: "35px" }}>
            {" "}
            <a href="https://www.linkedin.com/in/devrodrigomolina/" target='_blank'></a>
          </p>
       
        <img className={style.img} src={pl2} />
      </div>
    </>
  );
};

export default Footer;
