import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const TakePhoto = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={33} cy={33} r={33} fill={fill} />
    <Circle cx={33} cy={33} r={32} fill="#fff" />
    <Circle cx={33} cy={33} r={29} fill={fill} />
    <Path
      d="M19.25 23.156h5.313l1.265-3.547a1.253 1.253 0 0 1 1.18-.828h11.984c.528 0 1 .332 1.176.828l1.27 3.547h5.312a3.124 3.124 0 0 1 3.125 3.125v17.813a3.124 3.124 0 0 1-3.125 3.125h-27.5a3.124 3.124 0 0 1-3.125-3.125V26.28a3.124 3.124 0 0 1 3.125-3.125ZM33 40.97a6.248 6.248 0 0 0 6.25-6.25 6.248 6.248 0 0 0-6.25-6.25 6.248 6.248 0 0 0-6.25 6.25 6.248 6.248 0 0 0 6.25 6.25Zm3.75-6.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      fill="#fff"
    />
  </Svg>
);

export default TakePhoto;
