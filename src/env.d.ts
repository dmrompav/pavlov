/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface IntrinsicElements {
    i: HTMLAttributes & {
      _i?: string;
    };
  }
}

