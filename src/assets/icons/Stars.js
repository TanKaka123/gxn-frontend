import * as React from "react"
import Svg, { Path } from "react-native-svg"

 const StarFull = ({width, height, color}) => (
  <Svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m10.31 5.887-1.47-4.84c-.29-.95-1.63-.95-1.91 0l-1.48 4.84H1c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45v-.01Z"
      fill={color}
    />
  </Svg>
)
export default StarFull;
// export const StarHafl = () => (
//     <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
//       <Path
//         d="M3.187 15.648a.832.832 0 0 0 1.275.88L9 13.503l4.537 3.025a.833.833 0 0 0 1.264-.921l-1.524-5.334 3.78-3.401a.833.833 0 0 0-.491-1.45l-4.751-.379L9.759.493A.832.832 0 0 0 8.241.491L6.185 5.043l-4.751.378a.833.833 0 0 0-.516 1.427l3.512 3.423-1.243 5.377ZM9 2.859 10.7 6.627l.49.039h.001l3.31.262-2.726 2.454v.001l-.386.347.142.497v.003l1.044 3.654L9 11.5V2.86Z"
//         fill="#F6E700"
//       />
//     </Svg>
//   )
  



//   export const StarEmpty = () => (
//     <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
//       <Path
//         d="M8.361 1.193 9.81 5.962v.435h4.95c.48 0 .686.616.288.904l-.001.001-3.638 2.599-.294.21.107.345 1.43 4.61c.144.463-.394.84-.778.545l-.002-.001-3.69-2.81-.302-.23-.303.23-3.69 2.8h-.002c-.384.295-.922-.081-.778-.544l1.43-4.61.107-.345-.294-.21-3.64-2.6L.71 7.29c-.39-.277-.196-.903.29-.903h4.82l.109-.353 1.48-4.84.001-.005a.496.496 0 0 1 .952.004Z"
//         stroke="#F6E700"
//       />
//     </Svg>
//   )
  