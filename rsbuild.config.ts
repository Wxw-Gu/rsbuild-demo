import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import UnoCSS from "@unocss/postcss";

export default defineConfig({
  tools: {
    postcss(config, ctx) {
      ctx.addPlugins(UnoCSS());
    },
  },
  plugins: [pluginReact()],
});
