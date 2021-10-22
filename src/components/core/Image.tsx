import React from "react";

export const IMG = (props: {
  mobile: string;
  desktop: string;
  tablet: string;
  alt: string;
  style?: React.CSSProperties;
}) => (
  <picture style={props.style || {}}>
    <source media="(max-width:426px)" srcSet={props.mobile} />
    <source media="(min-width:426px) and (max-width:768px)" srcSet={props.tablet} />
    <source media="(min-width:769px)" srcSet={props.desktop} />
    <img
      src={props.desktop}
      alt={props.alt}
      style={{
        width: "100%"
      }}
    />
  </picture>
);

export const Icon = (props: { src: string; alt: string }) => (
  <img
    src={props.src}
    alt={props.alt}
    style={{ width: "24px", height: "24px", margin: "0px 24px" }}
  />
);
