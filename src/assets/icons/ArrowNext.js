import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowNext = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15 11.5 3.462 23 0 19.55l8.077-8.05L0 3.45 3.462 0 15 11.5Z"
      fill={fill}
    />
  </Svg>
);

export default ArrowNext;
