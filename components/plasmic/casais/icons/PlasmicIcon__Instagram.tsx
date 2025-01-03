// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramIcon(props: InstagramIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 300 300"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.52.012h222.978C282.682.012 300 17.336 300 38.52v222.978c0 21.178-17.318 38.49-38.502 38.49H38.52c-21.184 0-38.52-17.313-38.52-38.49V38.52C0 17.336 17.336.012 38.52.012zm180.026 33.317c-7.438 0-13.505 6.091-13.505 13.525v32.314c0 7.437 6.067 13.514 13.505 13.514h33.903c7.426 0 13.506-6.077 13.506-13.514V46.854c0-7.434-6.08-13.525-13.506-13.525h-33.903zm47.538 93.539h-26.396a87.715 87.715 0 013.86 25.759c0 49.882-41.766 90.34-93.266 90.34-51.487 0-93.254-40.458-93.254-90.34 0-8.963 1.37-17.584 3.861-25.759H33.35V253.6c0 6.563 5.359 11.902 11.916 11.902h208.907c6.563 0 11.911-5.339 11.911-11.902V126.868zm-115.801-35.89c-33.26 0-60.24 26.128-60.24 58.388 0 32.227 26.98 58.375 60.24 58.375 33.278 0 60.259-26.148 60.259-58.375 0-32.261-26.981-58.388-60.259-58.388z"
        }
      ></path>
    </svg>
  );
}

export default InstagramIcon;
/* prettier-ignore-end */
