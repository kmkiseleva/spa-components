import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import { IMallMenu } from './IMallMenu';
import './MallMenu.css';

const MallMenu: FC<IMallMenu> = ({
  borderRadius,
  logo,
  accentColor = '#0364ed',
  textMainColor = '#000',
  textSecondaryColor = '#8a8a8a',
  navigation,
  search,
  login,
  basket,
  phone,
  onSearch,
  onLogin,
  onBasket,
  logoLink,
}) => {
  const styleSettings = {
    backgroundColor: accentColor,
    borderRadius: borderRadius,
  };

  return (
    <header className="mall-menu__header">
      <div
        style={styleSettings}
        className="mall-menu__header-wrapper"
      >
        <div className="mall-menu__header-top">
          {logo && (
            <a href={logoLink}>
              {' '}
              <img
                className="mall-menu__header-img"
                src={logo}
                alt="logo"
              />{' '}
            </a>
          )}
          {search && (
            <div className="mall-menu__search-block">
              <button
                onClick={onSearch}
                className="mall-menu__search-button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="#0364ED"
                  />
                </svg>
              </button>
              <input
                className="mall-menu__search"
                style={{ color: textSecondaryColor }}
                placeholder="Поиск товаров"
              />
            </div>
          )}
          {phone && (
            <div className="mall-menu__phone">
              <a
                style={{ color: textMainColor }}
                href={`tel:#${phone}`}
              >
                {phone}
              </a>
            </div>
          )}
          {basket && (
            <div
              role="presentation"
              onClick={onBasket}
              className="mall-menu__basket"
            >
              <span>Корзина</span>
            </div>
          )}
          {login && (
            <div
              role="presentation"
              onClick={onLogin}
              className="mall-menu__login"
            >
              <span>Войти</span>
            </div>
          )}
        </div>
      </div>

      <div
        style={styleSettings}
        className="mall-menu__nav-wrapper"
      >
        <nav className="mall-menu__nav">
          <input
            className="mall-menu__menu-btn"
            type="checkbox"
            id="menu-btn"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            className="mall-menu__menu-icon"
            htmlFor="menu-btn"
          >
            <span className="mall-menu__nav-icon" />
          </label>

          {navigation?.length && (
            <ul className="mall-menu__menu">
              {navigation?.map((item) => (
                <li key={item.url}>
                  <Link href={item.url}>
                    <a
                      className="mall-menu__nav-link"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default MallMenu;
