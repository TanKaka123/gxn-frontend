import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = ({width,height,color}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.125 9.125H4.766l6.71-6.71a1.386 1.386 0 0 0 0-1.953 1.37 1.37 0 0 0-1.938 0L.476 9.524a1.37 1.37 0 0 0 0 1.938l9.062 9.062a1.37 1.37 0 0 0 1.938-1.94l-6.71-6.71h15.36c.755 0 1.374-.618 1.374-1.374a1.38 1.38 0 0 0-1.375-1.375Z"
      fill={color}
    />
  </Svg>
)

export default SvgComponent
