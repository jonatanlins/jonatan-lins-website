import React from "react";
import {
  withTheme,
  Theme,
  ThemeColor, 
} from "styled-components";

export type ImgType = string | { toString(): string; src: string };
export type DeviceType = "iphoneX" | "galaxyA30" | "macbookAir";

export type Device = {
  width: number;
  height: number;
  screenDimensions: {
    x: number;
    y: number;
    width: number;
  };
  frame: string;
  screen: string;
  sideButton: string;
};

export type Position = {
  width?: number | string;
  height?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
};

export type Props = {
  image: ImgType;
  device: DeviceType;
  position?: Position;
  color?: ThemeColor;
  theme: Theme;
  stroke?: number;
};

const devices: Record<DeviceType, Device> = {
  iphoneX: {
    width: 257,
    height: 521,
    screenDimensions: {
      x: 15,
      y: 15,
      width: 227,
    },
    frame: `
      M40,3 h177 a37 37 90 0 1 37,37
      v441 a37 37 90 0 1 -37,37
      h-177 a37 37 90 0 1 -37,-37
      v-441 a37 37 90 0 1 37,-37
      M158,14 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8
      M158,16 a2 2 90 0 1 2,2
      M115,16 h27 a2 2 180 0 1 0,4 h-27 a2 2 180 0 1 0,-4
    `,
    screen: `
      M40,15 h20 a5 5 90 0 1 5,5 a13 13 90 0 0 13,13
      h101 a13 13 90 0 0 13,-13 a5 5 90 0 1 5,-5
      h20 a25 25 90 0 1 25,25
      v441 a25 25 90 0 1 -25,25
      h-177 a25 25 90 0 1 -25,-25
      v-441 a25 25 90 0 1 25,-25
    `,
    sideButton: `
      M3,71 h-3 v18 h3 z
      M3,107 h-3 v36 h3 z
      M3,155 h-3 v36 h3 z
    `,
  },

  galaxyA30: {
    width: 258,
    height: 552,
    screenDimensions: {
      x: 10,
      y: 10,
      width: 238,
    },
    frame: `
      M37,3 h184 a34 34 90 0 1 34,34
      v478 a34 34 90 0 1 -34,34
      h-184 a34 34 90 0 1 -34,-34
      v-478 a34 34 90 0 1 34,-34
      M129,12 a5 5 180 0 1 0,10 a5 5 180 0 1 0,-10 z
      M129,14.5 a2.5 2.5 90 0 1 2.5,2.5
      M129,5 h12.5 a1.5 1.5 90 0 1 -1.5,1.5 h-22 a1.5 1.5 90 0 1 -1.5,-1.5 z
    `,
    screen: `
      M37,10 h74
      a6 6 90 0 1 6,6 a12 12 90 0 0 12,12
      a12 12 90 0 0 12,-12 a6 6 90 0 1 6,-6
      h74 a27 27 90 0 1 27,27
      v461 a27 27 90 0 1 -27,27
      h-184 a27 27 90 0 1 -27,-27
      v-461 a27 27 90 0 1 27,-27
    `,
    sideButton: `
      M255,87 h2 v73 h-2 z
      M255,198 h2 v32 h-2 z
    `,
  },

  macbookAir: {
    width: 1250,
    height: 1000,
    screenDimensions: {
      x: 144,
      y: 47,
      width: 961,
    },
    frame: `
      M150,3 h949 a32 32 90 0 1 32,32 v649 h-1013 v-649 a32 32 90 0 1 32,-32 z
      M5,684 h1240 v8 c0 0, -40 20, -130 20 h-980 c-90 0, -130 -20, -130 -20 z
      M5,692 h513 v-8 m0,8 c0 0, 5 3, 15 3 h184 c10 0, 15 -3, 15 -3 v-8 m0,8 h513
      M625,22 a4 4 180 0 1 0,8 a4 4 180 0 1 0,-8 z
      M625,24 a2 2 90 0 1 2,2
    `,
    screen: `
      M144,47 h961 v600 h-961 z
    `,
    sideButton: ``,
  },
};

function DeviceFrame(props: Props): JSX.Element {
  const { device, image, position, theme, color, stroke } = props;
  const deviceData = devices[device] || devices.iphoneX;
  const { screenDimensions } = deviceData;
  const screenClipPathId = `screenFormat-${device}`;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${deviceData.width} ${deviceData.height}`}
      style={position && { position: "absolute", ...position }}
    >
      <defs>
        <clipPath id={screenClipPathId}>
          <path d={deviceData.screen} />
        </clipPath>
      </defs>

      <path
        fill={theme.contrastColors[color]}
        stroke={theme.colors[color]}
        strokeWidth={stroke}
        strokeLinejoin="round"
        d={deviceData.frame}
      />

      <image
        x={screenDimensions.x}
        y={screenDimensions.y}
        width={screenDimensions.width}
        style={{ clipPath: `url(#${screenClipPathId})` }}
        href={image as string}
      />

      <path
        fill="none"
        stroke={theme.colors[color]}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={deviceData.screen}
      />

      <path fill={theme.colors[color]} d={deviceData.sideButton} />
    </svg>
  );
}

DeviceFrame.defaultProps = {
  color: "contrast",
  stroke: 1,
};

export default withTheme(DeviceFrame) as any;
