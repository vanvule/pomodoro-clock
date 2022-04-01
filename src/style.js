import styled, { css } from "styled-components/macro";
import lightTomatoes from "./assests/image/light-tomatoes.png"

export const Body = styled.body`
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
min-width: 100vw;
  ${props => props.dark && css`
    background: url(${lightTomatoes}) no-repeat center center fixed; 
  `}
`