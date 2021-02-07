import React from 'react';
import FooterLinkComponent from './FooterLink/FooterLinkComponent';
import style from './FooterComponent.module.css';
import logo from '../../assets/rs_school_logo.svg';
import {
  DEVELOPERS_INFO,
  GENERIC_TEXT,
  RSS_LOGO,
} from '../../constants/footerConstants';

const {
  CREATED_BY,
  AND,
  IN_2001,
} = GENERIC_TEXT;

const {
  HREF,
  ALT,
} = RSS_LOGO;

const FooterComponent = () => (
  <div className={style.footerWrapper}>
    <div>
      {CREATED_BY}
      {DEVELOPERS_INFO.map((obj, index) => {
        const keyProp = `link${index}`;
        return index < DEVELOPERS_INFO.length - 1
          ? (
            <span key={keyProp}>
              <FooterLinkComponent data={obj} key={keyProp} />
              {index < DEVELOPERS_INFO.length - 2 ? ', ' : ' '}
            </span>
          )
          : (
            <span key={keyProp}>
              {`${AND} `}
              <FooterLinkComponent data={obj} key={keyProp} />
            </span>
          );
      })}
      {IN_2001}
    </div>
    <a
      className={style.footerLogoLink}
      href={HREF}
    >
      <img
        src={logo}
        alt={ALT}
        className={style.footerLogo}
      />
    </a>
  </div>
);

export default FooterComponent;
