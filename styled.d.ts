import "styled-components";

type Color = "primary" | "secondary" | "accent" | "contrast";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<Color, string>;
    contrastColors: Record<Color, string>;
  }
}
