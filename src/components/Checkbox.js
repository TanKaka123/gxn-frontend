import * as React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export const CheckboxCircleUnlock = ({ color }) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={11} cy={11} r={10} stroke={color} strokeWidth={2} />
  </Svg>
);

export const CheckboxCircleLock = ({ color }) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={11} cy={11} r={10} stroke={color} strokeWidth={2} />
    <Circle cx={11} cy={11} r={7} fill={color} />
  </Svg>
);

export const CheckboxSquareUnlock = ({ color }) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x={1.5}
        y={1.5}
        width={19}
        height={18}
        rx={1.5}
        stroke={color}
        strokeWidth={3}
      />
    </Svg>
  );
};

export const CheckboxSquareLock = ({ color }) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="m21.858 3.76-2.587-2.617a.482.482 0 0 0-.685 0L9.236 10.6 7.416 8.757a.482.482 0 0 0-.685 0l-2.588 2.617a.49.49 0 0 0 0 .693l4.737 4.79c.09.091.214.143.343.143.005 0 .01-.003.016-.003l.015.003a.478.478 0 0 0 .343-.144L21.858 4.454a.494.494 0 0 0 0-.693Z"
        fill={color}
      />
      <Path
        d="M18.488 11.232v7.195H3.513V3.452h10.56L17.466.059H1.886v.002L1.863.06a1.74 1.74 0 0 0-1.739 1.7H.12v18.36h.004a1.738 1.738 0 0 0 1.696 1.696v.004h18.36v-.004a1.738 1.738 0 0 0 1.696-1.696h.004V7.84l-3.392 3.393Z"
        fill={color}
      />
    </Svg>
  );
};
