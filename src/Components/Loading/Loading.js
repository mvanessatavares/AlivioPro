import React from 'react'
import Logo from '../Logo/Logo'
import style from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={style.loading}>
    
      <h1 className={style.text}>Carregando</h1>
    </div>
  )
}
