import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = ({width , height, color}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M0 0h2.444v25H0V0Zm19.556 0H3.666v25h15.89C20.904 25 22 23.879 22 22.5v-20C22 1.121 20.904 0 19.556 0Zm-1.223 12.5h-11V10h11v2.5Zm0-5h-11V5h11v2.5Z"
      fill={color}
    />
  </Svg>
)

export default SvgComponent
