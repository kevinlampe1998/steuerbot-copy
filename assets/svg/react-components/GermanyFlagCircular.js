import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgGermanyFlagCircular = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    {...props}
  >
    <G
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <Path
        d="M2.57 30h84.859C81.254 12.534 64.611.015 45.033 0h-.068C25.388.015 8.745 12.534 2.57 30"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#000",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.407 1.407)scale(2.81)"
      />
      <Path
        d="M87.429 60H2.57C8.749 77.476 25.408 90 45 90s36.25-12.524 42.429-30"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#ffce00",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.407 1.407)scale(2.81)"
      />
      <Path
        d="M87.429 60A44.9 44.9 0 0 0 90 45c0-5.261-.911-10.307-2.571-15H2.57A44.9 44.9 0 0 0 0 45c0 5.261.912 10.307 2.571 15z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#d00",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.407 1.407)scale(2.81)"
      />
    </G>
  </Svg>
);
export default SvgGermanyFlagCircular;
