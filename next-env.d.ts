/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="optimized-images-loader" />

type ImgSrc = {
  src: string;
  width: number;
  height: number;
  format: string;
  toString(): string;
};

declare module "*.jpg?webp" {
  const value: ImgSrc;
  export = value;
}

declare module "*.png?webp" {
  const value: ImgSrc;
  export = value;
}
