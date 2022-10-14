import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Call = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.685 9.205a.834.834 0 0 0-1.16.036l-1.993 2.05c-.48-.09-1.445-.392-2.439-1.383C5.1 8.914 4.8 7.947 4.71 7.47l2.05-1.995a.833.833 0 0 0 .035-1.16L3.715.93A.833.833 0 0 0 2.558.858L.749 2.408a.83.83 0 0 0-.242.54c-.013.209-.251 5.144 3.575 8.972 3.339 3.338 7.52 3.583 8.672 3.583.168 0 .272-.005.3-.007a.827.827 0 0 0 .54-.243l1.55-1.809a.833.833 0 0 0-.072-1.159l-3.387-3.08Z"
      fill={fill}
    />
  </Svg>
);

export default Call;
