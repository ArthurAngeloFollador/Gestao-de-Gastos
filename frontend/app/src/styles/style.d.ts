import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      icons: string;
      primaryText: string;
      seccondaryText: string;
      boxShadow: string;
      buttonTextColor: string;
    };
  }
}
