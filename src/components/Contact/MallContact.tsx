import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IMallContact } from './IMallContact';
import './MallContact.css';

const MallContact: FC<IMallContact> = ({
  padding = '24px 0',
  margin = '0',
  backgroundColor,
  fontSize = '15px',
  textMainColor = '#000',
  accentColor = '#0364ed',
  contactTitle = 'Отдел маркетинга',
  phone = '88002342213',
  email = 'marketing@mallcms.ru',
}) => {
  const styleSettings = {
    padding: padding,
    margin: margin,
    background: backgroundColor,
    fontSize: fontSize,
    color: textMainColor,
  };

  return (
    <div
      className="mall-contact__container"
      style={styleSettings}
    >
      <div className="mall-contact__title">{contactTitle}</div>
      <div className="mall-contact__data">
        <div className="mall-contact__value">
          <a
            style={{ color: accentColor }}
            href={`tel:${phone}`}
          >
            {phone}
          </a>
        </div>
        <div className="mall-contact__value">
          <a
            style={{ color: accentColor }}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MallContact;
