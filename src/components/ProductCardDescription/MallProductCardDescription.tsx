import React, { FC, useState } from 'react';
import { IMallProductCardDescription, CardDescriptionType } from './IMallProductCardDescription';
import './MallProductCardDescription.css';

const MallProductCardDescription: FC<IMallProductCardDescription> = ({ description, characteristics }) => {
  const [active, setActive] = useState<CardDescriptionType>('description');

  return (
    <>
      <div className="mall-product-card__footer">
        <div className="mall-footer__buttons">
          <button
            className={active === 'description' ? '' : 'button-disabled'}
            onClick={() => setActive('description')}
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
                fill="black"
              />
            </svg>
            Описание товара
          </button>
          <button
            className={active === 'chars' ? '' : 'button-disabled'}
            onClick={() => setActive('chars')}
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.17 17C4.3766 16.4145 4.75974 15.9074 5.2666 15.5488C5.77346 15.1902 6.37909 14.9976 7 14.9976C7.62091 14.9976 8.22654 15.1902 8.7334 15.5488C9.24026 15.9074 9.6234 16.4145 9.83 17H20V19H9.83C9.6234 19.5855 9.24026 20.0926 8.7334 20.4512C8.22654 20.8099 7.62091 21.0025 7 21.0025C6.37909 21.0025 5.77346 20.8099 5.2666 20.4512C4.75974 20.0926 4.3766 19.5855 4.17 19H0V17H4.17ZM10.17 10C10.3766 9.41448 10.7597 8.90744 11.2666 8.5488C11.7735 8.19015 12.3791 7.99756 13 7.99756C13.6209 7.99756 14.2265 8.19015 14.7334 8.5488C15.2403 8.90744 15.6234 9.41448 15.83 10H20V12H15.83C15.6234 12.5855 15.2403 13.0926 14.7334 13.4512C14.2265 13.8099 13.6209 14.0025 13 14.0025C12.3791 14.0025 11.7735 13.8099 11.2666 13.4512C10.7597 13.0926 10.3766 12.5855 10.17 12H0V10H10.17ZM4.17 3.00001C4.3766 2.41448 4.75974 1.90744 5.2666 1.5488C5.77346 1.19015 6.37909 0.997559 7 0.997559C7.62091 0.997559 8.22654 1.19015 8.7334 1.5488C9.24026 1.90744 9.6234 2.41448 9.83 3.00001H20V5.00001H9.83C9.6234 5.58554 9.24026 6.09258 8.7334 6.45122C8.22654 6.80986 7.62091 7.00246 7 7.00246C6.37909 7.00246 5.77346 6.80986 5.2666 6.45122C4.75974 6.09258 4.3766 5.58554 4.17 5.00001H0V3.00001H4.17ZM7 5.00001C7.26522 5.00001 7.51957 4.89465 7.70711 4.70712C7.89464 4.51958 8 4.26523 8 4.00001C8 3.73479 7.89464 3.48044 7.70711 3.2929C7.51957 3.10537 7.26522 3.00001 7 3.00001C6.73478 3.00001 6.48043 3.10537 6.29289 3.2929C6.10536 3.48044 6 3.73479 6 4.00001C6 4.26523 6.10536 4.51958 6.29289 4.70712C6.48043 4.89465 6.73478 5.00001 7 5.00001ZM13 12C13.2652 12 13.5196 11.8947 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11C14 10.7348 13.8946 10.4804 13.7071 10.2929C13.5196 10.1054 13.2652 10 13 10C12.7348 10 12.4804 10.1054 12.2929 10.2929C12.1054 10.4804 12 10.7348 12 11C12 11.2652 12.1054 11.5196 12.2929 11.7071C12.4804 11.8947 12.7348 12 13 12ZM7 19C7.26522 19 7.51957 18.8947 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18C8 17.7348 7.89464 17.4804 7.70711 17.2929C7.51957 17.1054 7.26522 17 7 17C6.73478 17 6.48043 17.1054 6.29289 17.2929C6.10536 17.4804 6 17.7348 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8947 6.73478 19 7 19Z"
                fill="black"
              />
            </svg>
            Характеристики
          </button>
        </div>
        <div className="mall-footer__description">
          <p className={active === 'description' ? 'description-active' : 'description-disabled'}>{description}</p>
          <div className={active === 'description' ? 'description-disabled' : ''}>
            <table className="table">
              <tbody>
                {characteristics.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MallProductCardDescription;