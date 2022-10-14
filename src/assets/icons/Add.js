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
      d="M21.5 3.26c10.136 0 18.429 7.833 18.429 17.407 0 9.575-8.293 17.408-18.429 17.408S3.071 30.242 3.071 20.667c0-9.574 8.293-17.407 18.429-17.407Zm0-2.902C9.675.358 0 9.498 0 20.668c0 11.17 9.675 20.309 21.5 20.309S43 31.837 43 20.667C43 9.497 33.325.358 21.5.358Z"
      fill={color}
    />
    <Path
      d="M33.786 19.217h-10.75V9.062h-3.072v10.155H9.214v2.901h10.75v10.155h3.072V22.118h10.75v-2.901Z"
      fill={color}
    />
  </Svg>
)

export default SvgComponent
