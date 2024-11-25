import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const UsersIcon: React.FC<IconProps> = ({
  width = 16, // Default width
  height = 16, // Default height
  color = '#7730F7', // Default color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.7517C10.5553 12.9133 11.1425 13 11.75 13C12.7358 13 13.6683 12.7718 14.4976 12.3652C14.4992 12.327 14.5 12.2886 14.5 12.25C14.5 10.7312 13.2688 9.5 11.75 9.5C10.8046 9.5 9.97068 9.97701 9.47572 10.7035M10 12.7517V12.75C10 12.0081 9.80989 11.3105 9.47572 10.7035M10 12.7517C9.99999 12.7755 9.99978 12.7992 9.99939 12.8229C8.75824 13.5702 7.30432 14 5.75 14C4.19568 14 2.74176 13.5702 1.50061 12.8229C1.50021 12.7986 1.5 12.7743 1.5 12.75C1.5 10.4028 3.40279 8.5 5.75 8.5C7.35528 8.5 8.75269 9.38999 9.47572 10.7035M8 4.25C8 5.49264 6.99264 6.5 5.75 6.5C4.50736 6.5 3.5 5.49264 3.5 4.25C3.5 3.00736 4.50736 2 5.75 2C6.99264 2 8 3.00736 8 4.25ZM13.5 5.75C13.5 6.7165 12.7165 7.5 11.75 7.5C10.7835 7.5 10 6.7165 10 5.75C10 4.7835 10.7835 4 11.75 4C12.7165 4 13.5 4.7835 13.5 5.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
