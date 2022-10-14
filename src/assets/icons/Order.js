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
      d="M11.467 14.597c1.394 0 2.323-1.169 3.051-1.627 1.018-.64 3.576-.89 1.323-.94-2.137-.047-4.776 1.562-6.539 1.452-2.92-.184.07 1.115 2.165 1.115m3.012 2.39c.492.087 1.845-.218 1.253-1.775-.668-1.762-4.716 1.156-1.253 1.774Zm-7.664-3.855c-.47-.616-1.152-1.397-1.435-.99-.386.556-.507 1.676-.227 1.725 2.197.391 2.043-.236 1.662-.735m12.772.25c.396-.456-.395-1.551-.903-1.36-.795.3-1.253.097-1.602.552-.818 1.066 1.966 1.426 2.505.808Zm-.247 1.304c-.57-.233-.436.548-1.278-.079-.603-.449-1.9.684-1.044 1.452.952.856 1.205.043 1.605.111.813.139 2.212-.872.716-1.484Zm-9.477.267c-.297-.27-.696.056-.92.456a1.572 1.572 0 0 0-.405-.126c-.17-.45-.677-.759-.677-.759s.046.469.113.697c-.56-.184-.577-1.113-.577-1.113s-.376.209-.341.563c-.617-.461-1.141-.246-1.141-.246s.781.408.89.683c-.44.032-.696.173-.845.5 0 .003.867-.382 1.509-.104-.253.192-.127.672-.127.672.597-.587 1.074-.525 1.455-.42-.046.18-.043.344.04.444.66.807 2.966.625 3.585.029.75-.722-1.333-.156-2.56-1.276"
      fill={color}
    />
    <Path
      d="M11.068 11.81c-.193.375-.194.658.028.953.003 0 .09-.91.665-1.288.047.308.545.457.545.457-.398-1.37.764-1.44.759-1.932-.617.05-.966.486-.966.486-.495-.099-1.03.152-1.03.152s.448.21.689.275c-.449.36-1.3-.115-1.3-.115s0 .417.339.575c-.729.261-.797.803-.797.803s.763-.423 1.068-.366m10.8 1.87c.174-.323-.081-.658-.081-.658s-.393.873-.974.843c.153-.192.386-.62.386-.62s-.585.109-.922.473c0 0-.548-.148-1.073.168.296.398 1.274-.217 1.793 1.114 0 0 .308-.408.158-.682.694-.03 1.322.653 1.324.65-.003-.365-.177-.591-.562-.782.21-.221 1.083-.322 1.083-.322s-.387-.396-1.133-.184"
      fill={color}
    />
    <Path
      d="M24.958 14.68c1.66-3.162-1.715-5.355-6.126-6.43.332-.755.428-1.742-.508-2.685-1.2-1.207-.403-2.965-.403-2.965s-2.52 2.324-.928 3.926c.586.591.892 1.11 1.038 1.544a28.11 28.11 0 0 0-3.692-.51c.37-1.006.407-2.271-.76-3.482C11.98 2.418 13.044 0 13.044 0s-3.36 3.195-1.239 5.398c.775.804 1.182 1.511 1.38 2.104-1.315-.04-2.58.018-3.704.175.134-.647.022-1.392-.693-2.112C7.59 4.358 8.387 2.6 8.387 2.6s-2.52 2.324-.928 3.926c.498.502.79.95.958 1.34-.19.042-.374.087-.552.136-5.478-.512-7.867.62-6.776 2.84-1.904 1.905-1.189 4.079 1.195 5.742C3.528 21.707 3.848 26 13.214 26c8.359 0 9.514-3.419 10.549-7.795 3.106-.618 2.444-2.107 1.195-3.524m-.775-.512c-1.04 2.219-5.555 3.889-10.968 3.889-5.412 0-9.928-1.67-10.969-3.889l-.064-.2c.496-1.258 2.107-2.35 4.37-3.08-.532.514-.643 1.281.757 1.55.4.077 1.5-.19 1.019-1.554a.705.705 0 0 0-.312-.395c1.555-.356 3.32-.561 5.199-.561.21 0 .417.007.625.012-1.085.385-1.969 1.57.245 1.92.489.077 1.83-.19 1.244-1.554a.757.757 0 0 0-.238-.307c2.074.152 3.954.552 5.473 1.128-1.336-.075-2.818.748-.445 1.908.51.248 2.056.477 1.843-1.03a.774.774 0 0 0-.112-.306c1.214.64 2.062 1.417 2.397 2.268l-.064.201Z"
      fill={color}
    />
  </Svg>
)

export default SvgComponent
