import React from 'react';
import style from './FooterComponent.module.css';
import logo from '../../assets/rs_school_logo.svg';

const FooterComponent = () => (
  <div className={style.footerWrapper}>
    <div>
      Created by
      {' '}
      <a href="https://github.com/Velidoss" target="_blank" rel="noreferrer">Velidoss</a>
      ,
      {' '}
      <a href="https://github.com/va-z" target="_blank" rel="noreferrer">va-z</a>
      ,
      {' '}
      <a href="https://github.com/Noch4nce" target="_blank" rel="noreferrer">Noch4nce</a>
      ,
      {' '}
      and
      {' '}
      <a href="https://github.com/JaneEllison" target="_blank" rel="noreferrer">JaneEllison</a>
      {' '}
      in 2021.
    </div>
    <a
      className={style.footerLogoLink}
      href="https://rs.school/js/"
    >
      <img
        width="50"
        height="auto"
        src={logo}
        alt="Rolling Scopes School"
      />
    </a>
  </div>
);

export default FooterComponent;
