import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowNextSmall = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="m0 9 9-9h3L3 9l9 9H9L0 9Z" fill={fill} />
  </Svg>
);

export default ArrowNextSmall;
