import "styled-components";

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  contrast: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    contrastColors: Colors;
  }
}
