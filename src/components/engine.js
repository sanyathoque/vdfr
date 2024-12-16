import React from 'react';

const Engineicon = ({ color }) => {
  return (
    <svg
    width="100"
    height="100"
    viewBox="144 144 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    {/* Paths for the parking icon */}
    <g>
      <path
        d="m311.47 384.88h-36.863v92.047h43.668l25.418 39.406h192.09l-0.003906-132.27h-43.668l-42.848-35.219h-105.56zm80.902 6.7305h35.887l-3.1406 26.465h28.559l-45.082 65.125-1.6445-40.902-21.387 0.078125z"
        fill={color}
      />
      <path
        d="m408.92 333.89v-25.688h37.242v-24.547h-102.45v24.547h37.242v25.688z"
        fill={color}
      />
      <path
        d="m210.82 476.92h23.176v-39.496h25.688v-27.969h-25.688v-24.547h-38.957v33.387h15.781z"
        fill={color}
      />
      <path
        d="m576.42 428.71h-25.688v27.969h25.688v49.344l28.543-8.9414v-93.82l-28.543-8.9414z"
        fill={color}
      />
    </g>
  </svg>
  );
};

export default Engineicon;
