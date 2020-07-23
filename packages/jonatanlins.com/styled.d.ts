import "styled-components";

declare module "styled-components" {
  export type ThemeColor = "primary" | "secondary" | "accent" | "contrast";

  export interface Theme {
    colors: Record<ThemeColor, string>;
    contrastColors: Record<ThemeColor, string>;
  }
}
