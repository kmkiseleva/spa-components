import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import { IMallFooter } from './IMallFooter';
import './MallFooter.css';

const MallFooter: FC<IMallFooter> = ({
  _id,
  padding,
  phone,
  logo,
  menuFontSize,
  accentColor = '#0364ed',
  textMainColor = '#000',
  textSecondaryColor = '#8a8a8a',
  phoneFontSize,
  vk,
  ok,
  instagram,
  twitter,
  telegram,
  youtube,
  facebook,
  social = true,
  backgroundSecondaryColor = '#f5f5f6',
  companyName,
  menuList,
  privacy_policy,
  public_offer,
  constructor_url,
}) => {
  const menuStyle = {
    fontSize: menuFontSize,
    color: textMainColor,
  };

  const phoneStyle = {
    fontSize: phoneFontSize,
    color: textMainColor,
  };

  return (
    <div
      id={_id}
      style={{ background: backgroundSecondaryColor }}
      className="wrapper"
    >
      <div
        className="mall-footer__container"
        style={{ padding: padding }}
      >
        <div className="logo-container">
          <Link href="/">
            <a
              className="logo"
              href="/"
            >
              {logo && (
                <img
                  src={logo}
                  alt="logo"
                />
              )}
            </a>
          </Link>

          {phone && (
            <div
              style={phoneStyle}
              className="phone"
            >
              <a href={`tel:#${phone}`}>{phone}</a>
            </div>
          )}
        </div>
        <div className="body">
          <ul
            style={menuStyle}
            className="mall-footer__menu-list"
          >
            {menuList?.map((item) => (
              <li key={item.url}>
                <Link href={item.url}>
                  <a href={item.url}>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          {social && (
            <div className="social">
              <ul className="social-list">
                <li>
                  <a
                    title="facebook"
                    href={facebook}
                    className="social-item facebook"
                  />
                </li>
                <li>
                  <a
                    title="vk"
                    href={vk}
                    className="social-item vk"
                  />
                </li>
                <li>
                  <a
                    title="ok"
                    href={ok}
                    className="social-item ok"
                  />
                </li>
                <li>
                  <a
                    title="instagram"
                    href={instagram}
                    className="social-item instagram"
                  />
                </li>
                <li>
                  <a
                    title="twitter"
                    href={twitter}
                    className="social-item twitter"
                  />
                </li>
                <li>
                  <a
                    title="telegram"
                    href={telegram}
                    className="social-item telegram"
                  />
                </li>
                <li>
                  <a
                    title="youtube"
                    href={youtube}
                    className="social-item youtube"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="footer">
          {companyName && (
            <div
              className="info"
              style={{ color: textSecondaryColor }}
            >
              <span>{companyName}</span>
            </div>
          )}
          <div className="docs">
            <ul className="docs-list">
              <li>
                {/*<Link href={privacy_policy}>*/}
                <a
                  title="privacy policy"
                  href={privacy_policy}
                  style={{ color: accentColor }}
                >
                  Политика конфиденциальности
                </a>
                {/*</Link>*/}
              </li>
              <li>
                {/*<Link href={public_offer}>*/}
                <a
                  title="public offer"
                  href={public_offer}
                  style={{ color: accentColor }}
                >
                  Публичная оферта
                </a>
                {/*</Link>*/}
              </li>
            </ul>
          </div>
          <div className="created">
            {/*<Link href={constructor}>*/}
            <a
              title="constructor"
              href={constructor_url}
              style={{ color: accentColor }}
            >
              Сделано в конструкторе сайтов
            </a>
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MallFooter;
