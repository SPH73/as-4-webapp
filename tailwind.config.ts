import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./app.config.ts",
    "./assets/**/*.{css,vue}", // 👈 include your custom CSS + Vue using utilities
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(248 132 37)", // Orange (#F88425)
        secondary: "rgb(49 98 245)", // Blue (#3162F5)
        accent: "rgb(246 236 73)", // Yellow (#F6EC49)
        dark: "rgb(37 49 68)", // Dark Slate (#253144)
        light: "rgb(255 255 255)", // White (#FFFFFF)
      },
    },
  },
  plugins: [],
};
