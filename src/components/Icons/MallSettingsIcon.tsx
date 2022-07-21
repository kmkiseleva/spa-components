import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallSettingsIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
  return (
    <svg
      transform={`rotate(${rotate})`}
      id={_id}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          fill
            ? 'M9.954 2.21C11.3029 1.92713 12.6958 1.92645 14.045 2.208C14.1349 2.80129 14.3573 3.36669 14.6958 3.86218C15.0342 4.35767 15.48 4.7705 16 5.07C16.5196 5.37053 17.1002 5.55006 17.6987 5.59525C18.2972 5.64044 18.8982 5.55012 19.457 5.331C20.3753 6.35906 21.0709 7.56604 21.5 8.876C21.0313 9.25058 20.6531 9.72595 20.3934 10.2668C20.1337 10.8076 19.9993 11.4 20 12C20 13.264 20.586 14.391 21.502 15.124C21.0703 16.4329 20.3739 17.6389 19.456 18.667C18.8973 18.448 18.2965 18.3578 17.6982 18.403C17.0999 18.4482 16.5194 18.6276 16 18.928C15.4805 19.2274 15.035 19.64 14.6967 20.1351C14.3585 20.6302 14.1361 21.1952 14.046 21.788C12.6972 22.0715 11.3043 22.0729 9.955 21.792C9.86555 21.1982 9.64331 20.6322 9.30482 20.1361C8.96634 19.6401 8.52033 19.2268 8 18.927C7.48036 18.6266 6.8997 18.4473 6.30119 18.4023C5.70268 18.3572 5.10172 18.4477 4.543 18.667C3.6246 17.6386 2.929 16.4313 2.5 15.121C2.96839 14.7466 3.34646 14.2716 3.60613 13.7311C3.86581 13.1906 4.00043 12.5986 4 11.999C4.00049 11.3989 3.86571 10.8064 3.60567 10.2655C3.34563 9.72466 2.96702 9.24938 2.498 8.875C2.92967 7.56612 3.62612 6.3601 4.544 5.332C5.10265 5.55096 5.70347 5.6412 6.30179 5.59601C6.90012 5.55083 7.48057 5.37138 8 5.071C8.51955 4.7716 8.96499 4.35902 9.30326 3.86391C9.64153 3.36879 9.86395 2.80284 9.954 2.21ZM12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z'
            : 'M3.34 17C2.91727 16.269 2.58866 15.4875 2.362 14.674C2.85531 14.4231 3.26959 14.0406 3.55903 13.5689C3.84846 13.0972 4.00177 12.5546 4.00197 12.0011C4.00218 11.4477 3.84928 10.9049 3.5602 10.433C3.27112 9.96105 2.85712 9.57827 2.364 9.327C2.81604 7.69249 3.67673 6.19995 4.865 4.99C5.32909 5.29172 5.86762 5.45916 6.42098 5.47378C6.97434 5.4884 7.52095 5.34963 8.00033 5.07283C8.47971 4.79603 8.87315 4.392 9.13713 3.90544C9.4011 3.41888 9.52531 2.86878 9.496 2.316C11.1381 1.89162 12.8612 1.89231 14.503 2.318C14.474 2.87076 14.5984 3.42079 14.8626 3.90721C15.1268 4.39363 15.5204 4.79747 15.9998 5.07406C16.4793 5.35065 17.0259 5.48919 17.5793 5.47435C18.1326 5.45952 18.671 5.29188 19.135 4.99C19.714 5.58 20.228 6.251 20.66 7C21.093 7.749 21.417 8.53 21.638 9.326C21.1447 9.5769 20.7304 9.95937 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9989C19.9978 12.5523 20.1507 13.0951 20.4398 13.567C20.7289 14.0389 21.1429 14.4217 21.636 14.673C21.184 16.3075 20.3233 17.8 19.135 19.01C18.6709 18.7083 18.1324 18.5408 17.579 18.5262C17.0257 18.5116 16.479 18.6504 15.9997 18.9272C15.5203 19.204 15.1268 19.608 14.8629 20.0946C14.5989 20.5811 14.4747 21.1312 14.504 21.684C12.8619 22.1084 11.1388 22.1077 9.497 21.682C9.52605 21.1292 9.4016 20.5792 9.13742 20.0928C8.87324 19.6064 8.47964 19.2025 8.00017 18.9259C7.5207 18.6494 6.97405 18.5108 6.42073 18.5256C5.8674 18.5405 5.32896 18.7081 4.865 19.01C4.27399 18.4069 3.76159 17.7316 3.34 17ZM9 17.196C10.0656 17.8106 10.8668 18.797 11.25 19.966C11.749 20.013 12.25 20.014 12.749 19.967C13.1324 18.7979 13.934 17.8114 15 17.197C16.0652 16.5807 17.3205 16.3795 18.525 16.632C18.815 16.224 19.065 15.789 19.273 15.334C18.4524 14.4174 17.9991 13.2302 18 12C18 10.74 18.47 9.563 19.273 8.666C19.0635 8.21115 18.8125 7.77663 18.523 7.368C17.3193 7.62031 16.0648 7.41948 15 6.804C13.9344 6.18937 13.1332 5.20298 12.75 4.034C12.251 3.987 11.75 3.986 11.251 4.033C10.8676 5.20215 10.066 6.18856 9 6.803C7.93478 7.41931 6.67948 7.62052 5.475 7.368C5.18557 7.77629 4.93513 8.21086 4.727 8.666C5.54757 9.58256 6.00088 10.7698 6 12C6 13.26 5.53 14.437 4.727 15.334C4.93647 15.7889 5.18754 16.2234 5.477 16.632C6.68072 16.3797 7.93521 16.5805 9 17.196ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallSettingsIcon;