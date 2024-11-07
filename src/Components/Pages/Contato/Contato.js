import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from '../../Button/Button';
import style from './Contato.module.css';

const Contato = () => {
  const form = useRef();

  const handleEmailClick = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    emailjs.sendForm('seuServiceID', 'seuTemplateID', form.current, 'seuUserID')
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
        console.log(result.text);
      }, (error) => {
        alert('Erro ao enviar a mensagem, tente novamente.');
        console.log(error.text);
      });
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Entre em contato conosco</h1>
      <div className={style.container_form}>
        <form ref={form} onSubmit={handleEmailClick} className={style.form}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="user_name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
          
          <label htmlFor="experiencia">Mensagem:</label>
          <textarea rows="8" id="experiencia" name="message" required></textarea>
          
          <Button text="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Contato;
