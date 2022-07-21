import React, { FC } from 'react';
import { usePagination } from '../../hooks/usePagination';
import MallArrowIcon from '../Icons/MallArrowIcon';
import { IMallPagination } from './IMallPagination';
import './MallPagination.css';

const MallPagination: FC<IMallPagination> = ({
  pageSize,
  totalElements,
  currentPage,
  onPageChange,
  siblingCount = 2,
  showArrows = true,
  hoverArrow = false,
  hoverPages = false,
  _id,
  accentColor = '#0364ed',
  textMainColor = '#000',
}) => {
  const totalPageCount = Math.ceil(totalElements / pageSize);

  const pages = usePagination(totalPageCount, siblingCount, currentPage);

  const onNext = () => {
    if (currentPage < totalPageCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div
      id={_id}
      className="pagination-container"
      style={{ color: textMainColor }}
    >
      {showArrows && (
        <div className="arrow-container">
          {currentPage !== 1 && (
            <button
              className={hoverArrow ? 'arrows-button hover-arrow' : 'arrows-button'}
              style={hoverArrow ? { border: 'none' } : { borderColor: accentColor }}
              onClick={onPrevious}
            >
              <MallArrowIcon
                color="#000"
                size={20}
              />
            </button>
          )}
        </div>
      )}
      <ul className="list">
        {pages?.map((page, index) => (
          <li
            className="list-item"
            key={index}
          >
            <button
              onClick={typeof page === 'number' ? () => onPageChange(page) : undefined}
              className={currentPage === page ? 'current-page' : hoverPages ? 'page hover-page' : 'page'}
              style={
                currentPage === page
                  ? { background: accentColor, color: '#fff' }
                  : hoverPages
                  ? { borderColor: accentColor, color: accentColor }
                  : {}
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      {showArrows && (
        <div className="arrow-container">
          {currentPage !== totalPageCount && (
            <button
              className={hoverArrow ? 'arrows-button hover-arrow' : 'arrows-button'}
              onClick={onNext}
              style={hoverArrow ? { border: 'none' } : { borderColor: accentColor }}
            >
              <MallArrowIcon
                size={20}
                color="#000"
                rotate={180}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MallPagination;
