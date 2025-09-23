// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Allow self-closing tags for void elements like <img />, <br />, <input />
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", //fixes the <img /> lint warning
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
