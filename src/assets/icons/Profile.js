import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = ({width, height, color}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8 0-5.965-4.835-10.8-10.8-10.8C6.035 1.2 1.2 6.035 1.2 12c0 5.965 4.835 10.8 10.8 10.8Zm0 1.2c6.628 0 12-5.372 12-12S18.628 0 12 0 0 5.372 0 12s5.372 12 12 12Z"
      fill={color}
    />
    <Path
      d="M4.8 18.978c0-.62.463-1.143 1.08-1.212 4.629-.512 7.632-.466 12.25.012a1.193 1.193 0 0 1 .666 2.083c-5.451 4.751-8.567 4.686-13.612.005a1.211 1.211 0 0 1-.384-.887Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.069 18.374c-4.582-.474-7.542-.519-12.124-.012a.616.616 0 0 0-.545.617c0 .171.071.334.192.447 2.5 2.32 4.396 3.367 6.248 3.374 1.859.007 3.855-1.033 6.561-3.391a.595.595 0 0 0-.332-1.035ZM5.814 17.17c4.678-.518 7.724-.471 12.38.01a1.795 1.795 0 0 1 .996 3.133c-2.745 2.393-5.03 3.696-7.354 3.687-2.33-.008-4.515-1.334-7.06-3.695a1.812 1.812 0 0 1-.576-1.327 1.817 1.817 0 0 1 1.614-1.809Z"
      fill={color}
    />
    <Path d="M16.8 9.6a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13.2A3.6 3.6 0 1 0 12 6a3.6 3.6 0 0 0 0 7.2Zm0 1.2a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
      fill={color}
    />
  </Svg>
)

export default SvgComponent
