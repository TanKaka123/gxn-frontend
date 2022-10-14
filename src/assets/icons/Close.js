import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Close = ({ width, height, color }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20 2.867 17.133 0 10 7.133 2.867 0 0 2.867 7.133 10 0 17.133 2.867 20 10 12.867 17.133 20 20 17.133 12.867 10 20 2.867Z"
      fill={color}
    />
  </Svg>
);

export default Close;
