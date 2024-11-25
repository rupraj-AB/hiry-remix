import React from 'react';

interface TrashIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({ height = 16, width = 16, color = '#E11D48' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TrashIcon;
