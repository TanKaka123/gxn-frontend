import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Home = ({width,height,color}) => (
    <Svg
    width={26}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M25.462 11.803 13.649.263A.918.918 0 0 0 13 0a.934.934 0 0 0-.649.263L.54 11.803c-.344.337-.539.794-.539 1.27 0 .99.823 1.795 1.835 1.795H3.08v8.235c0 .496.41.897.918.897h7.167v-6.28h3.212V24h7.626c.508 0 .918-.4.918-.897v-8.235h1.245c.487 0 .955-.188 1.299-.527.714-.701.714-1.837-.003-2.538Z"
      fill={color}
    />
  </Svg>
)

export default Home
