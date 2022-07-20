import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import { IMallBreadcrumbs } from './IMallBreadcrumbs';
import './MallBreadcrumbs.css';

const MallBreadcrumbs: FC<IMallBreadcrumbs> = ({
  breadcrumbsData,
  position,
  separator,
  fontSize = '13px',
  margin = '50px',
  textSecondaryColor = '#8a8a8a',
}) => {
  const styleSettings = {
    color: textSecondaryColor,
    fontSize: fontSize,
    justifyContent: position,
    margin: margin,
  };

  return (
    <ul
      style={styleSettings}
      className="mall-breadcrumbs__list"
    >
      {breadcrumbsData?.map((breadcrumb, index) => (
        <li
          className="mall-breadcrumbs__item"
          key={index}
        >
          <span>{separator}</span>
          <Link href={breadcrumb.url}>
            <a
              className="mall-breadcrumbs__link"
              href={breadcrumb.url}
            >
              {breadcrumb.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MallBreadcrumbs;
