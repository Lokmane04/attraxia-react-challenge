import * as React from "react";

const RectangleVector: React.FC<{ num: number }> = ({ num }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="22"
      viewBox="0 0 27 22"
      fill="none"
    >
      <path
        d="M26 20C26 20.5523 25.5523 21 25 21L5.82759 21C5.27530 21 4.82759 20.5523 4.82759 20L4.82759 15.579C4.82759 14.7097 4.45057 13.8832 3.79414 13.3134L1.65897 11.4601C1.15707 11.0244 1.21192 10.2294 1.76890 9.86682L3.46436 8.76304C4.31470 8.20945 4.82759 7.26355 4.82759 6.24889L4.82759 2C4.82759 1.44771 5.27530 0.999996 5.82759 0.999996L25 0.999998C25.5523 0.999998 26 1.44771 26 2L26 20Z"
        fill="#EDEDED"
        stroke="#EDEDED"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="50%"
        fontSize="10"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="arial"
        fontWeight={"bold"}
      >
        {num}
      </text>
    </svg>
  );
};

export default RectangleVector;
