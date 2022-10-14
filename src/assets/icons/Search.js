import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Search = ({width,height,color}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.836 19.67c2.182 0 4.302-.73 6.02-2.075L21.263 23 23 21.262l-5.405-5.405a9.776 9.776 0 0 0 2.077-6.022C19.672 4.412 15.259 0 9.836 0S0 4.412 0 9.835c0 5.423 4.413 9.836 9.836 9.836Zm0-17.211c4.068 0 7.377 3.308 7.377 7.376 0 4.068-3.309 7.377-7.377 7.377s-7.377-3.309-7.377-7.377S5.768 2.46 9.836 2.46Z"
      fill={color}
    />
  </Svg>
)

export default Search
