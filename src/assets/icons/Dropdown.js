import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Dropdown = ({width,height,color}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M9.648 13.062c-.616.967-2.1.967-2.716 0L.228 2.508C-.405 1.51.355.243 1.586.243h13.408c1.23 0 1.99 1.268 1.357 2.265L9.648 13.062Z"
      fill={color}
    />
  </Svg>
)

export default Dropdown;
